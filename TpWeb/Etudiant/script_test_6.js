var imgCoin = new Image();   // Create new img element
imgCoin.src = './images/coin-sprite-animation.png'; // Set source path

var monCanvas;

var coin; 

function init(){

	monCanvas =document.createElement("canvas");
	monCanvas.id = "animCoin";
	document.getElementsByTagName('body')[0].appendChild(monCanvas);
	monCanvas.width = 150;
	monCanvas.height = 150;
	
	coin = sprite({
    context: monCanvas.getContext("2d"),
    width: 1000,
    height: 100,
    image: imgCoin,
    numberOfFrames: 10,
	ticksPerFrame: 3,
	});
	mainLoop();
}


function sprite (options) {
				
     var that = {},
        frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0;
        numberOfFrames = options.numberOfFrames || 1;
	
	that.loop = options.loop;
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;

     that.render = function () {
		
		  // Clear the canvas
		  that.context.clearRect(0, 0, that.width, that.height);

		  
		  // Draw the animation
		  that.context.drawImage(
		    that.image,
		    frameIndex * that.width / numberOfFrames,
		    0,
		    that.width / numberOfFrames,
		    that.height,
		    0,
		    0,
		    that.width / numberOfFrames,
		    that.height);
		};
		


     that.update = function () {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

				tickCount = 0;
				
                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {	
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }
            }
        };

    return that;
}


function mainLoop () {
	
  coin.update();
  coin.render();
 	window.requestAnimationFrame(mainLoop);
}
