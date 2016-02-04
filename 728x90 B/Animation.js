home_animation = (function() {
	var endFrame = 0;
	if (Enabler.isInitialized()) {
	  init();
	} else {
	  Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
	}

	// Runs when Enabler is ready.
	function init() {
	  if (Enabler.isPageLoaded()) {
	    politeInit();
	  } else {
	    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit);
	  }
	};

	// Runs when the page is completely loaded.		
	function politeInit(){		
	  // Add your code to load creative assets or begin creative animation.
	  	document.getElementById("container").style.display = "block";
	  	document.getElementById("preloadWrap").style.display = "none";
		frame1();

	};
	
	function frame1()
	{
		TweenLite.to(f1_txt, .5, {opacity:1});
		TweenLite.to(left, 2.5, {top:-260, ease: Linear.easeNone});
		TweenLite.to(right, 2.5, {top:-60, ease: Linear.easeNone});
		TweenLite.delayedCall(2.5, frame2);
	}
	function frame2()
	{	
		TweenLite.to(left, 1, {top:-170, ease: Linear.easeNone});
		TweenLite.to(right, 1, {top:-170, ease: Linear.easeNone});

		TweenLite.to(left, 2.5, {top:-92, delay:1, ease: Linear.easeNone});
		TweenLite.to(right, 2.5, {top:-250, delay:1, ease: Linear.easeNone});
		
		TweenLite.delayedCall(3.5, frame3);
	}
	function frame3()
	{
		TweenLite.to(left, 1.5, {top:-2, ease: Linear.easeNone});
		TweenLite.to(right, 1.5, {top:-340, ease: Linear.easeNone});
		TweenLite.to(f1_txt, 1, {opacity:0, ease: Linear.easeNone});
		TweenLite.to(bottle, 1, {opacity:1, delay: 2, ease: Linear.easeNone});
		TweenLite.to(shop, 1, {opacity:1, delay: 2, ease: Linear.easeNone});
		TweenLite.to(hashtag, 1, {opacity:1, delay: 2, ease: Linear.easeNone});
		TweenLite.to(bottle, 3, {top:-247, delay: 2.7, ease: Power1.easeOut});

		endFrame = 1;
	}
	container.onmouseover = function() {
		if(endFrame == 1)
		{
	 		TweenLite.to(shop_rollover, 0.2, {opacity:1});
	 		TweenLite.to(shop, 0.2, {opacity:0});
		}

	}

	container.onmouseout = function() {
		if(endFrame == 1)
		{	
	 		TweenLite.to(shop_rollover, 0.2, {opacity:0});
	  		TweenLite.to(shop, 0.2, {opacity:1});
		}
	}
	init();
});






// If true, start function. If false, listen for INIT.
window.onload = function() {
  home_animation();
}

