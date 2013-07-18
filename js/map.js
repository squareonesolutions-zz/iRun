



/* 

Version : 1.1 
Date:2011-02-08
Author : anjie
Email:anjie521@gmail.com
Author URL : http://www.fu-an.net

*/
if (!String._FORMAT_SEPARATOR) {
    String._FORMAT_SEPARATOR = String.fromCharCode(0x1f);
    String._FORMAT_ARGS_PATTERN = new RegExp('^[^' + String._FORMAT_SEPARATOR + ']*'
                + new Array(100).join('(?:.([^' + String._FORMAT_SEPARATOR + ']*))?'));
}
if (!String.format)
    String.format = function(s) {
        return Array.prototype.join.call(arguments, String._FORMAT_SEPARATOR).
                replace(String._FORMAT_ARGS_PATTERN, s);
    }
if (typeof (Object.extend) === "undefined") {
    Object.extend = function() {
        var target = arguments[0] || {}, i = 1, options, deep = false;
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[1] || {};
            i++;
        }
        for (; i < arguments.length; i++) {
            if ((options = arguments[i]) != null) {
                for (var name in options) {
                    var src = target[name], copy = options[name];
                    if (deep && copy && typeof copy === "object") {
                        target[name] = Object.extend(deep, src, copy);
                    } else {
                        target[name] = options[name];
                    }
                }
            }
        }

        return target;
    }

}



var MyMapObj = {
    initialize: function(options) {
        var defaults = {};
        defaults.map = { x: -150.109291, y: 62.323907, zoom: 15, container: "mapbox" };
        defaults.info = { title: "title", pic: "", text: "text" };
        defaults.icon = { img: "" };

        var opt = Object.extend(true, defaults, options);

        var latlng = new google.maps.LatLng(opt.map.y, opt.map.x);
        var myOptions = {
            zoom: opt.map.zoom,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById(opt.map.container), myOptions);

        var infowindow = new google.maps.InfoWindow();

        var image = opt.icon.img;
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            icon: image
        });


        var bounds = latlng;

        var overlay = new USGSOverlay(latlng, map);

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
            overlay.toggle();
        });
        return overlay;
    }
}
function USGSOverlay(bounds, map) {

    this.bounds_ = bounds;
    this.map_ = map;

    this.div_ = null;

	// Explicitly call setMap on this overlay
    this.setMap(map);
}
USGSOverlay.prototype = new google.maps.OverlayView();
USGSOverlay.prototype.onAdd = function() {

    var contentString = String.format('<div class="wrap"><div class="mapwrap"><div class="maptop"></div><div class="mapmain"><h3 class="maptitle">$1</h3><div class="maptxt">$2<div class="mapnr">$3</div></div></div><div class="mapbot"></div></div><div class="mapshadow"></div></div>',
					opt.info.title,
					opt.info.pic ? String.format('<img src="$1" class="addrimg">', opt.info.pic) : "",
					opt.info.text);
	
	// Create the DIV and set some basic attributes.
    var div = document.createElement('DIV');
    div.style.borderStyle = "none";
    div.style.borderWidth = "0px";
    div.style.position = "absolute";

    div.setAttribute("class", "contain_class");
    div.innerHTML = contentString;
	
	// Set the overlay's div_ property to this DIV
    this.div_ = div;

    var panes = this.getPanes();
    panes.overlayImage.appendChild(div);
}

USGSOverlay.prototype.draw = function() {
	
	// Size and position the overlay.
    var overlayProjection = this.getProjection();

    var position = overlayProjection.fromLatLngToDivPixel(this.bounds_);

	// Resize the overlay's DIV to fit the indicated dimensions.
    var div = this.div_;
    div.style.left = position.x - 200 + 'px';
    div.style.top = position.y - 440 + 'px';
    div.style.width = 400 + 'px';
    div.style.height = 400 + 'px';
}

USGSOverlay.prototype.onRemove = function() {
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
}

USGSOverlay.prototype.hide = function() {
    if (this.div_) {
        this.div_.style.visibility = "hidden";
    }
}

USGSOverlay.prototype.show = function() {
    if (this.div_) {
        this.div_.style.visibility = "visible";
    }
}

USGSOverlay.prototype.toggle = function() {
    if (this.div_) {
        if (this.div_.style.visibility == "hidden") {
            this.show();
        } else {
            this.hide();
        }
    }
}






