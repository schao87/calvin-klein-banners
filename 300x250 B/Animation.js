home_animation = (function() {

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
		TweenLite.delayedCall(2, frame2);
	}
	function frame2()
	{	
		TweenLite.to(left, 1, {top:-250});
		TweenLite.to(right, 1, {top:-250});
		
		TweenLite.delayedCall(4, frame3);
	}
	function frame3()
	{
		TweenLite.to(left, 1, {top:0});
		TweenLite.to(right, 1, {top:-500});
		TweenLite.to(f1_txt, 1, {opacity:0});
		TweenLite.to(bottle, 1, {opacity:1, delay: 1});
		TweenLite.to(shop, 1, {opacity:1, delay: 1});
		TweenLite.to(hashtag, 1, {opacity:1, delay: 1});
	}
	init();
});
// If true, start function. If false, listen for INIT.
window.onload = function() {
  home_animation();
}

