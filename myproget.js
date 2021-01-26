// JavaScript Document
var compteurImage=1;
var totalimage=10;

function slider(x){

	var image=document.getElementById('img');
	compteurImage=compteurImage + x;
	image.src="images/corona"compteurImage+".jpg";

	if(computeurImage>=totalimage)
	{
		computeurImage=1;

	}
	if (computeurImage<1){compteurImage=totalimage;}


 

}

function sliderAuto(){

	var image=document.getElementById('img');
	compteurImage=compteurImage + 1;
	image.src="images/corona"compteurImage+".jpg";

	if(computeurImage>=totalimage)
	{
		computeurImage=1;

	}
	if (computeurImage<1){compteurImage=totalimage;}

}

window.setInterval(sliderAuto,3000);

