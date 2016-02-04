var endFrame = 0;
var	mouseOver = 0;
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
	  Enabler.setStartExpanded(false);
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
		TweenLite.to(shop, .5, {opacity:1});
		TweenLite.delayedCall(2, frame2);
	};
	function frame2()
	{	
		TweenLite.to(left, 1, {top:-250});
		TweenLite.to(right, 1, {top:-250});
	};
	init();
});

shop.onclick = function() {
	// document.getElementById("container").style.display = "none";
	document.getElementById("richContainer").style.display = "block";
	Enabler.requestExpand();
	creative.isExpanded = true;
	//Enabler.finishExpand();
};

closeBtn.onclick = function() {
	document.getElementById("container").style.display = "block";
	document.getElementById("richContainer").style.display = "none";
	document.getElementById("player").remove();
	document.getElementById("richMedia").innerHTML ='<iframe width="800" height="450" id="player" src="https://www.youtube.com/embed/3XJh9n8K3XU" frameborder="0" allowfullscreen></iframe>';
	//Enabler.finishCollapse();
	creative.isExpanded = false;
};
richContainer.onclick = function (){
	document.getElementById("richContainer").style.display = "none";
	document.getElementById("expanded-state").style.display = "none";
	document.getElementById("collapsed-state").style.display = "block";
	document.getElementById("expand-button").style.display = "block";
	 Enabler.requestCollapse();
	creative.isExpanded = false;
}
window.onload = function() {
  home_animation();
}

