

var canvas;
var carre;
var dir_x;
var dir_y;
var ctx;
var start;
var isXDone;
function init(){

	canvas = document.createElement('canvas');
	canvas.id = 'monCanvas';
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx = canvas.getContext("2d");
	ctx.fillStyle = "#FF0000";

	canvas.addEventListener("mousedown", function (event){
		console.log("IL A CLIQU2éééééééééééééééééééé");
		dir_x = event.clientX-25;
		console.log("x = "+dir_x);
		dir_y = event.clientY-75;
		console.log("y = " + dir_y);
		isXDone = false;
		//mainLoop();
		
	},true);
	document.getElementsByTagName('body')[0].appendChild(canvas);


	isXDone = false;
	dir_x =0;
	dir_y=0;
	carre = new Carre(0,0,50,50);
	carre.render();
	window.requestAnimationFrame(mainLoop);

}

function Carre(x, y,l,h){
	this.x = x;
	this.y=y;
	this.l=l;
	this.h=h;
	this.progress;

	this.render = function(step){
		//console.log("RENDER");
	

		//if(progress < 160){
			ctx.clearRect(0, 0, canvas.width, canvas.height);
 		 ctx.fillRect(this.x,this.y,this.l,this.h);
		
		 
	}

	this.update = function(nX,nY,dir){
		//console.log("ON UPDATE");
		if(dir === "x"){
			if(this.x>nX){
			this.x-=1;
			}else{
			this.x+=1;}
		}else{
			if(this.y>nY){
			this.y-=1;
			}else{
			this.y+=1;
			}
		}
}
}


function mainLoop(){
	//console.log("entréé mainLoop");
	if(dir_x!= carre.x ){
		carre.update(dir_x,dir_y,"x");
		carre.render();
		if(dir_x === carre.x) isXDone = true;
		//setTimeout(function(){ requestAnimationFrame(mainLoop); },1000/60);
	}if(dir_y!= carre.y && isXDone){
		carre.update(dir_x,dir_y,"y");
		carre.render();
		//setTimeout(function(){ requestAnimationFrame(mainLoop); },1000/60);
	}
	setTimeout(function(){ requestAnimationFrame(mainLoop); },10);
}






