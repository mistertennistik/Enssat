var intervalID;
var ctx;
var canvas;
var l ;
var h ;
var tabAbs;
var y ;
var cptDep; // compteur avant départ
var cptEspace;
var nbDebloque; // Nombre de carrés pouvant se lancer
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

 	tabAbs = new Array(10).fill(0);
 	nbDebloque = 1;

 	console.log(tabAbs);
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

	if(cptEspace>220){ // on clear l'intervalle quand tous les carrés on traversés
		window.clearInterval(intervalID);
	}
	cptEspace++;
	if(cptEspace%10==0){ // on 'déboque' un carré tous les multiples de 10 ie toutes les secondes ici
		nbDebloque ++;
	}
	

	for(i=0;i<nbDebloque;i++){
		ctx.clearRect(tabAbs[i], y, l, h);
		tabAbs[i]+=10;
		ctx.fillRect(tabAbs[i],y,l,h);
	}
	
 }
