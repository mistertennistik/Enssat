var elem;
var left;
var start=null;



function init(){

	var madiv =document.createElement("div");
	madiv.id = "animatedElem";
	document.getElementsByTagName('body')[0].appendChild(madiv);
	elem = document.getElementById("animatedElem");
	 left = 0;
	window.requestAnimationFrame(step);
	
}


function step(timestamp) {
  var progress;
  if (start === null) start = timestamp;
  progress = timestamp - start;
  console.log(progress);
  elem.style.left = ( left += progress/16 ) + "px"; // Supprime les wormholes
  if (elem.offsetLeft < 400) {
    window.requestAnimationFrame(step);
  }
}

function pausecomp(millis) 
		{
			var date = new Date();
			var curDate = null;
			do { 
				curDate = new Date(); 
			} while(curDate-date < millis);
		} 




