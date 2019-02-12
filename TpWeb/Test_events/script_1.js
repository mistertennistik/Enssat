var intervalID;
var ctx;
var canvas;
var l ;
var h ;
var x ;
var y ;


var c;

var carre = function Carre(x, y,l,h){
	var x = x;
	var y=y;
	var l=l;
	var h=h;

	this.render = ()=>{
		console.log("RENDER");
		  ctx.clearRect(0, 0, canvas.width, canvas.height);
 		 ctx.fillRect(x,y,l,h);
	}

	this.update = function(nX,nY,dir){
		if(dir === "x"){
			if(this.x>nX){
			this.x-=10;
			}else{
			this.x+=10;}
		}else{
			if(this.y>nY){
			this.y-=10;
			}else{
			this.y+=10;
			}
		}
}
}

function init(){
	canvas = document.createElement('canvas');
	canvas.id = 'monCanvas';
	canvas.width = 1300;
	canvas.height = 1000;
	


document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
console.log(charCode);
    var charStr = String.fromCharCode(charCode);

};

	window.addEventListener('keypress', (e)=>{
		console.log("test");
		console.log(e.code);
		if(e.isComposing || e.keyCode === 101){
			console.log("ici");
			up();
			
		}
		if(e.isComposing || e.keyCode === 115){
			console.log("ici");
			left();
			
		}
		if(e.isComposing || e.keyCode === 102){
			console.log("ici");
			right();
			
		}
		if(e.isComposing || e.keyCode === 100){
			console.log("ici");
			down();
			
		}
		
	});	

	l = 60;
	h = 60;
	
	ctx = canvas.getContext("2d");
	ctx.fillStyle = "#FF0000";
 	document.getElementsByTagName('body')[0].appendChild(canvas);
 	x=0;
 	y=0;

 	ctx.fillRect(x,y,l,h);

}




function left(){
	
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  x-=10;
  ctx.fillRect(x,y,l,h);
 }
 function right(){
	
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  x+=10;
  ctx.fillRect(x,y,l,h);
 }
 function down(){
	
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  y+=10;
  ctx.fillRect(x,y,l,h);
 }
 function up(){
	
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  y-=10;
  ctx.fillRect(x,y,l,h);
 }

