<?php
	$moleculeToAdd = $_REQUEST['moleculeToAdd'];
?>


//ROTATION -----------------------------------------------------------------------
/*
var angle = 0;

function incrementAngle() {
	angle +=2.77777777777;
	if(angle > 360) {
	    angle = 0;
	}
}

function rotation(){
	var length = 4;
	var rad = angle * Math.PI/180;
	var x = [], y= [];
	for (var i = 20; i > 1; i--){
		x.push(20+2*length*Math.cos(rad)/i);
		y.push(10+2*length*Math.sin(rad)/i);
	}
	var RChange = document.getElementById("rotate");
	RChange.innerHTML = "<p style='position:absolute; color:red; top:"+y[0]+"rem; left:"+x[0]+"rem;'>.</p>";
	RChange.innerHTML += "<p style='position:absolute; color:red; top:"+10+"rem; left:"+20+"rem;'>.</p>";
	for (var j = 1; j < 19; j++){
		RChange.innerHTML += "<p style='position:absolute; color:red; top:"+y[j]+"rem; left:"+x[j]+"rem;'>.</p>";
	}
}

//TIMER -----------------------------------------------------------------------
// window.setInterval(timeLeft(time), 1000);
// window.setInterval(spinning(), 1000);

function spinning(){
	var a = window.setInterval(rotation, 1);
	var b = window.setInterval(incrementAngle, 1);
	var time = parseInt(document.getElementById("number").value);
	document.getElementById("timer").innerHTML = time;
	time = time - 1;
	var s = setInterval(function(){
	document.getElementById("timer").innerHTML = time; 
	if (time == 0) {
		clearInterval(s); clearInterval(a); clearInterval(b);
		setTimeout(function(){document.getElementById("timer").innerHTML = ""; document.getElementById("rotate").innerHTML = "";}, 1000);
		}
	time = time - 1;
	}, 
	1000);
}

*/