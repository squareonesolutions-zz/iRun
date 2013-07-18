<link rel='stylesheet' id='screen_css-css'  href='js/fancyflow/screen.css?ver=1.0' type='text/css' media='all' />
<link rel='stylesheet' id='fancybox_css-css'  href='js/fancyflow/jquery.fancybox-1.3.0.css?ver=1.0' type='text/css' media='all' />
<script type='text/javascript' src='js/fancyflow/jquery.js?ver=1.0'></script>
<script type='text/javascript' src='js/fancyflow/jquery.ppflip.js?ver=1.0'></script>


   							<div id="imageFlow">
                                <div class="text">
                                    <div class="title">Loading</div>
                                    <div class="legend">Please wait...</div>
                                </div>
                                <div class="scrollbar">
                                    <img class="track" src="js/fancyflow/white_slider_bg.png" alt="">
                                    <img class="bar" src="js/fancyflow/white_slider_handle.png" alt="">
                                    <img class="arrow-left" src="js/fancyflow/sl.gif" alt="">
                                    <img class="arrow-right" src="js/fancyflow/sr.gif" alt="">
                                </div>
                            </div>

							<div style="background:#fff;position:absolute;bottom:0;height:100px;width:500px"></div>

                            <script>
								/* ==== create imageFlow ==== */
								//          div ID, imagesbank, horizon, size, zoom, border, autoscroll_start, autoscroll_interval
								imf.create("imageFlow", 'js/fancyflow/photoList.xml', 0.6, 0.5, 0, 5, 7, 0.35);
							</script>
							<div id="fancy_flow" style="display:none">
                                <a id="fancy_flow0" href="http://www.gallyapp.com/tf_themes/8cells_wp/?slides=built-in-image-upload" class="fancy_flow">JingJang Premium Theme for Photography Portfolio</a>
                                <a id="fancy_flow1" href="http://www.gallyapp.com/tf_themes/8cells_wp/?slides=built-in-contact-form" class="fancy_flow">Accent Clean WP for Business Corporate Portfolio</a>
                                <a id="fancy_flow2" href="http://www.gallyapp.com/tf_themes/8cells_wp/?slides=wordpress-custom-menu" class="fancy_flow">CORE Photography</a>
                                <a id="fancy_flow3" href="http://www.gallyapp.com/tf_themes/8cells_wp/?slides=more-color-options" class="fancy_flow">KIN Minimalist Photography Wordpress Template</a>
                                <a id="fancy_flow4" href="http://www.gallyapp.com/tf_themes/8cells_wp/?slides=sample-content-included" class="fancy_flow">Amphawa for Business Corporate Portfolio</a>
                            </div>
							<script>
								jQuery('.fancy_flow').fancybox({ 
									padding: 0,
									type: 'iframe',
									overlayColor: '#fff', 
									transitionIn: 'fade',
									transitionOut: 'fade',
									overlayOpacity: .8,
									width: 620,
									height: 325
								});
                            </script>