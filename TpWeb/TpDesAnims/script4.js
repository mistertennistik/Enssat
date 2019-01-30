var intervalID;
var ctx;
var canvas;
var l ;
var h ;
var x1 ;
var x2;
var x3;
var y ;
var cptDep;
var cptEspace;
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
 	x1=0;
 	x2  =0;
 	x3 =0;
 	y=0;

 	cptDep=4;
 	cptEspace=0;
 	intervalID = window.setInterval(function(){

 		if(cptDep===0){
 			window.clearInterval(intervalID);
 			startDrawing();
 		}else{
 			cptDep--;
 		}
 		
 	},1000);

}


function startDrawing(){
	intervalID = window.setInterval(redraw,100);

}

function redraw(){
	cptEspace++;
	if(cptEspace>=10){
		ctx.clearRect(x2, y, l, h);
		x2+=10;
		ctx.fillRect(x2,y,l,h);
		console.log("ici");
	}if(cptEspace>=19){
		ctx.clearRect(x3,y,l,h);
		x3+=10;
		ctx.fillRect(x3,y,l,h);
	}
	ctx.clearRect(x1, y, l, h);
	x1+=10;
	
	
  
  ctx.fillRect(x1,y,l,h);
 }
