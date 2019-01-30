
var c = 10
var intervalID;
function incCompteur(){
	if(c===0){

		clearIntervall(intervalID);	
	}
	c--;
	document.getElementById("maDiv").innerHTML = c;

	console.log(c);

}


function init(){
	var div = document.createElement('div');
	div.id = 'maDiv';
	var newDiv = document.getElementById("maDiv"); 
  	div.innerHTML = c;
 	document.getElementsByTagName('body')[0].appendChild(div);
 intervalID = window.setInterval(incCompteur,1000);
}



