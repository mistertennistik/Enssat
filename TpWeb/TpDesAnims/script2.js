var intervalID;
var ctx;
var canvas;
var l ;
var h ;
var x ;
var y ;
function init(){
	canvas = document.createElement('canvas');
	canvas.id = 'monCanvas';
	canvas.width = 1300;
	canvas.height = 150; 
	l = 60;
	h = 60
	ctx = canvas.getContext("2d");
	ctx.fillStyle = "#FF0000";
 	document.getElementsByTagName('body')[0].appendChild(canvas);
 	x=0;
 	y=0;
 	intervalID = window.setInterval(redraw,100);

}




function redraw(){
	x+=10;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(x,y,l,h);
 }
