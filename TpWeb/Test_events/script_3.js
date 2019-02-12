

var canvas;
var carre;
var dir_x;
var dir_y;
var ctx;
var isXDone;

var player;
var imgPlayer = new Image();   // Create new img element
imgPlayer.src = './hero_walk_cycle_spritesheet_by_mrnoobtastic-d3defej.png'; // Set source path
function init(){

	canvas = document.createElement('canvas');
	canvas.id = 'monCanvas';
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx = canvas.getContext("2d");

	canvas.addEventListener("mousedown", function (event){
		console.log("IL A CLIQU2éééééééééééééééééééé");
		dir_x = event.clientX-75;
		console.log("x = "+ dir_x);
		dir_y = event.clientY-78;
		console.log("y = " + dir_y);
		isXDone = false;
		//mainLoop();
		
	},true);
	document.getElementsByTagName('body')[0].appendChild(canvas);

	
	dir_x=150;
	dir_y = 150;

	playerSprite = sprite({
    context: ctx,
    width: 512,
    height: 512,
    image: imgPlayer,
    numberOfFrames: 4,
	ticksPerFrame: 4,
	});
	player = new Player(playerSprite,150,150);
	player.render();
	mainLoop();

}

function Player(sprite, x, y){
	this.x = x;
	this.y=y;
	this.sprite = sprite;

	this.dir_en_cours="gauche";



		this.update = function(nX,nY,dir){
		//console.log("ON UPDATE");
		if(dir === "x"){
			if(this.x>nX){
			this.x-=1;
			this.dir_en_cours = "gauche";
			}else{
			this.x+=1;
			this.dir_en_cours = "droite";
			}
			
		}else{
			if(this.y>nY){
			this.y-=1;
			this.dir_en_cours = "haut";
			}else{
			this.y+=1;
			this.dir_en_cours = "bas";
			}
		}
		this.sprite.update(this.dir_en_cours);
};

	this.render = function(step){
		//console.log("RENDER");
	

		//if(progress < 160){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
 		 this.sprite.render(this.x, this.y);
		
		 
	}


}


function sprite (options) {
				
     var that = {},
        frame_index = 0,
        animation_index=0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0;
        numberOfFrames = options.numberOfFrames || 1;
	
	that.loop = options.loop;
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    that.update = function (dir) {


		  if (dir==="gauche") animation_index = 0;
        else if (dir==="droite") animation_index = 1;
        else if (dir==="haut") animation_index = 3;
        else if (dir==="bas") animation_index = 2;
     

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

				tickCount = 0;
				
                // If the current frame index is in range
                if (frame_index < numberOfFrames - 1) {	
                    // Go to the next frame
                    frame_index += 1;
                } else {
                    frame_index = 0;
                }
            }
        };


     that.render = function (x,y) {
		
		  // Clear the canvas
		  //ctx.clearRect(0, 0, canvas.width, canvas.height);

		  // Draw the animation
		  //console.log(that.animation_index);
		  //console.log(frame_index);
		  that.context.drawImage(
		    that.image,
		    frame_index * that.width/4,
			animation_index * that.height/4,
		    that.width /4,
		    that.height/4,
		    x,
		    y,
		    that.width/4 ,
		    that.height/4);

		};
		


     

    return that;
}

function mainLoop(){
	//console.log("entréé mainLoop");
	if(dir_x!= player.x ){
		player.update(dir_x,dir_y,"x");
		player.render();
		if(dir_x === player.x) isXDone = true;
		//setTimeout(function(){ requestAnimationFrame(mainLoop); },1000/60);
	}if(dir_y!= player.y && isXDone){
		player.update(dir_x,dir_y,"y");
		player.render();
		//setTimeout(function(){ requestAnimationFrame(mainLoop); },1000/60);
	}
	setTimeout(function(){ requestAnimationFrame(mainLoop); },100/60);
}






