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
		TweenLite.delayedCall(2, frame2);
	}
	function frame2()
	{	
		TweenLite.to(topImg, 1, {left:0});
		TweenLite.to(bottomImg, 1, {left:-300});
		
		TweenLite.delayedCall(4, frame3);
	}
	function frame3()
	{
		TweenLite.to(leftImg, 1, {top:0});
		TweenLite.to(rightImg, 1, {top:0});
		TweenLite.to(f1_txt, 1, {opacity:0});
		TweenLite.to(bottle, 1, {opacity:1, delay: 1});
		TweenLite.to(shop, 1, {opacity:1, delay: 1});
		TweenLite.to(hashtag, 1, {opacity:1, delay: 1});
		endFrame = 1;
	}
	// container.onmouseover = function() {
	// 	if(endFrame == 1)
	// 	{
	//  		TweenLite.to(shop_rollover, 0.2, {opacity:1});
	//  		TweenLite.to(shop, 0.2, {opacity:0});
	// 	}

	// }

	// container.onmouseout = function() {
	// 	if(endFrame == 1)
	// 	{	
	//  		TweenLite.to(shop_rollover, 0.2, {opacity:0});
	//   		TweenLite.to(shop, 0.2, {opacity:1});
	// 	}
	// }
	init();
});






// If true, start function. If false, listen for INIT.
window.onload = function() {
  home_animation();
}

