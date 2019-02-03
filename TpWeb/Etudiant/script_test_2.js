

function init(){
	var madiv =document.createElement("div");
	madiv.id = "animatedElem";
	document.getElementsByTagName('body')[0].appendChild(madiv);
	var elem = document.getElementById("animatedElem");
	var left = 0;
	var timer;
	var ancienneDate = new Date();
	// Move the element 10px on the right every 16ms
	timer = setInterval(function() {
		var dateCourrante = new Date();
		var ecart = dateCourrante-ancienneDate;
		elem.style.left = ( left += (ecart*10/16) ) + "px";
		ancienneDate = new Date();
		// clear the timer at 400px to stop the animation
		if ( left > 400 ) {
			clearInterval( timer );
		}
	}, 16);
	
}


function pausecomp(millis) 
		{
			var date = new Date();
			var curDate = null;
			do { 
				curDate = new Date(); 
			} while(curDate-date < millis);
		} 




