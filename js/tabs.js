 /***************************/
//@Author: Adrian "yEnS" Mato Gondelle & Ivan Guardado Castro
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

$(document).ready(function(){
	$(".menu > li").click(function(e){
		switch(e.target.id){
			case "tab1":
				//change status & style menu
				$("#tab1").addClass("active");
				$("#tab2").removeClass("active");
				$("#tab3").removeClass("active");
				//display selected division, hide others
				$("div.tab1").fadeIn();
				$("div.tab2").css("display", "none");
				$("div.tab3").css("display", "none");
			break;
			case "tab2":
				//change status & style menu
				$("#tab1").removeClass("active");
				$("#tab2").addClass("active");
				$("#tab3").removeClass("active");
				//display selected division, hide others
				$("div.tab2").fadeIn();
				$("div.tab1").css("display", "none");
				$("div.tab3").css("display", "none");
			break;
			case "tab3":
				//change status & style menu
				$("#tab1").removeClass("active");
				$("#tab2").removeClass("active");
				$("#tab3").addClass("active");
				//display selected division, hide others
				$("div.tab3").fadeIn();
				$("div.tab1").css("display", "none");
				$("div.tab2").css("display", "none");
			break;
		}
		//alert(e.target.id);
		return false;
	});
});




$(document).ready(function () {

if ($.browser.msie && $.browser.version < 7) return; // Don't execute code if it's IE6 or below cause it doesn't support it.

  $(".fade").fadeTo(1, 1);
  $(".fade").hover(
    function () {
      $(this).fadeTo("fast", 0.43);
    },
    function () {
      $(this).fadeTo("slow", 1);
    }
  );
});
