var actualWidth, drawnHeight;
var countOfInstruction = 0, waiting = 0;
window.addEventListener("load", giveWidth);
window.addEventListener("load", giveHeight);
window.addEventListener("load", setWidth);
window.addEventListener("resize", giveWidth);
window.addEventListener("load", setHeight);

function giveWidth(){
	actualWidth = document.getElementById("drawingSpace").offsetWidth;
	// console.log(actualWidth); 
	if (theMolecule){
		displayMolecule(theMolecule);
	}
} //This function generates the right viewbox when an element is called on the input.
function giveHeight(){
	drawnHeight = document.getElementById("drawingSpace").offsetHeight;
	//blabla
}
function setWidth(){
	var units = (5/8)*actualWidth;
	document.getElementById("drawingSpace").innerHTML = "<svg viewbox ='0 0 "+units+" 200' id='drawn'></svg>";
}
function setHeight(){
	var accessIt = document.getElementById("smallDisplay");
	accessIt.innerHTML = "...Molecule...";
	var actualHeight = (accessIt.offsetHeight+30).toString()+"px";
	accessIt.innerHTML = "";
	accessIt.style.minHeight = actualHeight;
	accessIt.style.lineHeight = actualHeight;
}
function turnWordIntoHtmlElements(text,typeOfElements, name){
	var result = [];
	text = String(text); typeOfElements = String(typeOfElements); name = String(name);
	for (var i = 0; i < text.length; i++){
		var letter = "";
		letter += "<"+typeOfElements+" class='"+name+"'>"+text.charAt(i)+"</"+typeOfElements+">";
		result.push(letter);
	}
	var display = result.join("");
	return display;
}
function turnSentenceIntoHtmlElements(text, typeOfElements, name){
	var array = text.split(" ");
	var result = [];
	for (var i = 0; i < array.length; i++){
		var entering = turnWordIntoHtmlElements(array[i], typeOfElements, name);
		result.push(entering);
	}
	return result;
}
function instruction(){
	if (countOfInstruction <= 45){
		if (waiting % 3 == 0){
			var instruct = document.createElement("pre");
			instruct.setAttribute("id","instructions");
			instruct.appendChild(document.createTextNode(". . . Click here to clear content . . ."));
			// var identif = document.getElementById("instructions");
			document.getElementById("drawingSpace").appendChild(instruct);
			fade(instruct);
		}
		countOfInstruction++;
		waiting++;
	}
}
function fade(element) {
	//This function is taken from http://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.01){ //modified from 0.1 to 0.01
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.05; //modified from .01 to 0.05.
    }, 100); //modified from 50 to 100.
}
window.mobilecheck = function() { 
	//This function is taken from http://detectmobilebrowsers.com/ 
	// and fromhttp://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};
//--------------------------------------------------------------------------------------------------
//Below here are all the specific functions working in the background.
//These need to be implemented for different browsers and different screen sizes.
var twoLetSplit = 32, oneLetSplit = 25;
function element(element, newLoc){
	//This location works in px! This is where the top left corner of an uppercase letter would be.
	// var newLoc = recognizeLineDirection(location);
	var units = (8/5);
	var xCorrection = 0, yCorrection = 4.7;
	var x = (newLoc[0]*units) - (xCorrection*units), y = (newLoc[1]*units) - (yCorrection*units);
	if (element === "-"){
		var append = "<span style='position: absolute; color: rgba(255,50,50,0.9); font-size: 28px; left:"+(x)+"px; top: "+(y)+"px;'>"+element+"</span>";
	} else if (element === "+"){
		var append = "<span style='position: absolute; color: rgba(50,100,255,0.9); font-size: 28px; left:"+(x)+"px; top: "+(y)+"px;'>"+element+"</span>";
	}
	else var append = "<span style='position: absolute; font-size: 28px; left:"+(x)+"px; top: "+(y)+"px;'>"+element+"</span>";
	document.getElementById("drawingSpace").innerHTML += append;
}
function nElements(listOfElements, locations){
	var j = 0;
	for (var i = 0; i < listOfElements.length; i++){
		element(listOfElements[i], [locations[j],locations[j+1]]);
		j+=2;
	}
}
//------------------------------------------------------------------------------------------------------
//DOTS
function dot(location){
	var x = location[0], y = location[1];
	var append = "<circle cx='"+x+"' cy='"+y+"' r='1.25' stroke='black' stroke-width='1' fill='black' />";
	document.getElementById("drawn").innerHTML += append;
}
function twoVDots(locationArray) {
	var x = locationArray[0], y2 = locationArray[1] + 8;
	dot(locationArray);
	dot([x,y2]);
}
function twoHDots(locationArray) {
	var x2 = locationArray[0] + 8, y = locationArray[1];
	dot(locationArray);
	dot([x2,y]);
}
function twoTDots(locationArray, angle){
	var angle = angle*(Math.PI/180);
	var xChange = 8*Math.cos(angle);
	var yChange = 8*Math.sin(angle);
	var x = locationArray[0]+xChange, y = locationArray[1] + yChange;
	dot(locationArray);
	dot([x,y]);
}
function fourVDots(locationArray){
	twoHDots(locationArray);
	var v1 = locationArray[0];
	// if (twoLetters == true) var v2 = locationArray[1]+twoLetSplit;
	var v2 = locationArray[1]+oneLetSplit;
	var newLocation = [v1, v2];
	twoHDots(newLocation);
} //Here, the locationArray refers to the top left dot. HDots goes two H on top, two H on bottom.
function fourHDots(locationArray, twoLetters){
	twoVDots(locationArray);
	if (twoLetters == true) var v1 = locationArray[0]+twoLetSplit;
	else var v1 = locationArray[0]+oneLetSplit;
	var v2 = locationArray[1];
	var newLocation = [v1, v2];
	twoVDots(newLocation);
} //Here, the locationArray refers to the top left dot. VDots goes two V on top, two V on bottom.
function sixDots(locationArray, sideNone, twoLetters){ //locationArray is the location of the top left dot.
	//twoLetters is a boolean!
	switch (sideNone){
		case "top":
			fourHDots(locationArray, twoLetters);
			if (twoLetters == true) var change = twoLetSplit/2;
			else var change = oneLetSplit/2;
			var yChange = oneLetSplit/2;
			var x = locationArray[0], y = locationArray[1];
			x = x + change - 4; y = y + 4 + yChange;
			twoHDots([x,y]);
		break;
		case "bottom":
			fourHDots(locationArray, twoLetters);
			if (twoLetters == true) var change = twoLetSplit/2;
			else var change = oneLetSplit/2;
			var yChange = oneLetSplit/2;
			var x = locationArray[0], y = locationArray[1];
			x = x + change - 4; y = y + 4 - yChange;
			twoHDots([x,y]);
		break;
		case "right":
			fourVDots(locationArray);
			if (twoLetters == true) var change = twoLetSplit/2;
			else var change = oneLetSplit/2;
			var yChange = oneLetSplit/2;
			var x = locationArray[0], y = locationArray[1];
			x = x + 4 - change; y = y + yChange - 4;
			twoVDots([x,y]);
		break;
		case "left":
			fourVDots(locationArray);
			if (twoLetters == true) var change = twoLetSplit/2;
			else var change = oneLetSplit/2;
			var yChange = oneLetSplit/2;
			var x = locationArray[0], y = locationArray[1];
			x = x + 4 + change; y = y + yChange - 4;
			twoVDots([x,y]);
		break;
		default:
		break;
	}
}//Here, the location Array refers to the one it'd be on any of the four*Dots fxns.
//------------------------------------------------------------------------------------------------------
//LINES
function line(direction){
	// var newDir = recognizeLineDirection(direction);
	var x1 = direction[0], y1 = direction[1], x2 = direction[2], y2 = direction[3];
	var append = "<line x1='"+x1+"' y1='"+y1+"' x2='"+x2+"' y2='"+y2+"' stroke-width='0.5' stroke='black'/>";
	document.getElementById("drawn").innerHTML += append;
} // I might not use this function anymore, so I might get rid of it.
function lineDash(direction){
	// var newDir = recognizeLineDirection(direction);
	var x1 = direction[0], y1 = direction[1], x2 = direction[2], y2 = direction[3];
	var append = "<line stroke-dasharray='3, 3' x1='"+x1+"' y1='"+y1+"' x2='"+x2+"' y2='"+y2+"' stroke-width='0.5' stroke='black'/>";
	document.getElementById("drawn").innerHTML += append;
} // I might not use this function anymore, so I might get rid of it.
function nVLines(location, n){ //Vertical lines
	var x = parseInt(location[0]);
	var y = [parseInt(location[1])];
	var final = 2*n-2;
	for (var i = 0; i <= final; i++){
		if (i % 2 == 0){y.push(y[i]+30);}
		else {y.push(y[i]+35);} //one letter split = 35, two letters split = 45
	}
	var append = "";
	// console.log("Y:"+y); //THESE ARE TO BE REMOVED
	// console.log("MIDDLES Y:"+locateMiddles(y, true)); //THESE ARE TO BE REMOVED
	for (var j = 0; j <= final; j += 2){
		append += "<line x1='"+x+"' y1='"+y[j]+"' x2='"+x+"' y2='"+y[j+1]+"' stroke-width='0.5' stroke='black'/>";
	}
	// console.log("Length Y: "+(y[y.length - 1] - y[0]));
	// console.log("X-coord.:"+x);
	document.getElementById("drawn").innerHTML += append;
}
function nVLinesBonds(location, n, numberOfBonds){
	var xVal = location[0];
	switch (numberOfBonds){
		case 1:
			nVLines(location, n);
			break;
		case 2:
			location.shift();
			xVal -= 2.5;
			location.unshift(xVal);
			nVLines(location, n);
			location.shift();
			xVal += 5;
			location.unshift(xVal);
			nVLines(location, n);
			break;
		case 3:
			location.shift();
			xVal -= 4.0;
			location.unshift(xVal);
			nVLines(location, n);
			location.shift();
			xVal += 4.0;
			location.unshift(xVal);
			nVLines(location, n);
			location.shift();
			xVal += 4.0;
			location.unshift(xVal);
			nVLines(location, n);
			break;
		default:
			nVLines(location, n);
			break;
	}
}
function nHLines(location, n){ //Horizontal lines
	var x = [parseInt(location[0])];
	var y = parseInt(location[1]);
	var final = 2*n-2;
	for (var i = 0; i <= final; i++){
		if (i % 2 == 0){x.push(x[i]+30);}
		else {x.push(x[i]+35);}
	}
	var append = "";
	// console.log("X:"+x); //THESE ARE TO BE REMOVED
	// console.log("MIDDLES X:"+locateMiddles(x, true)); //THESE ARE TO BE REMOVED
	for (var j = 0; j <= final; j += 2){
		append += "<line x1='"+x[j]+"' y1='"+y+"' x2='"+x[j+1]+"' y2='"+y+"' stroke-width='0.5' stroke='black'/>";
	}
	// console.log("Length X:"+(x[x.length - 1] - x[0]));
	// console.log("Y-coord.:"+y);
	document.getElementById("drawn").innerHTML += append;
}
function nHLinesBonds(location, n, numberOfBonds){
	var yVal = location[1];
	switch (numberOfBonds){
		case 1:
			nHLines(location, n);
			break;
		case 2:
			location.pop();
			yVal -= 2.5;
			location.push(yVal);
			nHLines(location, n);
			location.pop();
			yVal += 5;
			location.push(yVal);
			nHLines(location, n);
			break;
		case 3:
			location.pop();
			yVal -= 4.0;
			location.push(yVal);
			nHLines(location, n);
			location.pop();
			yVal += 4.0;
			location.push(yVal);
			nHLines(location, n);
			location.pop();
			yVal += 4.0;
			location.push(yVal);
			nHLines(location, n);
			break;
		default:
			nHLines(location, n);
			break;
	}
}
function nLSLinesH(location,n,initial){  //Line structure lines horizontal oriented
	//The initial variables helps to know if we start left right or right left
	//initial is a boolean
	var x = [parseInt(location[0])];
	var y = [parseInt(location[1])];
	var xChange = 30*Math.cos(Math.PI/6);
	var yChange = 15;
	var final = n-1;
	for (var i = 0; i <= final; i++){
		x.push(x[i]+xChange);
		if (i % 2 == 0) y.push(y[i]+yChange);
		else y.push(y[i]-yChange);
	}
	if (initial == false){
		x.shift();
		y.shift();
		xLength = x.length;
		for (i = 0; i < xLength; i++){
			x[i] -= xChange;
		}
		if (n % 2 == true){
			x.push(x[x.length - 1]+xChange);
			y.push(y[y.length - 1]-yChange);
		} else {
			x.push(x[x.length - 1]+xChange);
			y.push(y[y.length - 1]+yChange);
		}
	}
	var append = "";
	console.log("X:"+x); //THESE ARE TO BE REMOVED
	console.log("MIDDLES X:"+locateMiddles(x, true)); //THESE ARE TO BE REMOVED
	console.log("Y:"+y); //THESE ARE TO BE REMOVED
	console.log("MIDDLES Y:"+locateMiddles(y, true)); //THESE ARE TO BE REMOVED
	for (var j = 0; j <= final; j += 1){
		append += "<line x1='"+x[j]+"' y1='"+y[j]+"' x2='"+x[j+1]+"' y2='"+y[j+1]+"' stroke-width='0.5' stroke='black'/>";
	}
	// console.log("x:["+x+"]"); console.log("y:["+y+"]");
	document.getElementById("drawn").innerHTML += append;
}
function nLSLinesV(location,n,initial){  //Line structure lines vertical oriented
	//The initial variables helps to know if we start down up or up down
	//initial is a boolean
	var x = [parseInt(location[0])];
	var y = [parseInt(location[1])];
	var xChange = 15; //X and Y are Changed in here! (from nLSLinesH)
	var yChange = 30*Math.cos(Math.PI/6); //X and Y are Changed in here! (from nLSLinesH)
	var final = n-1;
	for (var i = 0; i <= final; i++){
		y.push(y[i]+yChange);
		if (i % 2 == 0) x.push(x[i]+xChange);
		else x.push(x[i]-xChange);
	}
	if (initial == false){
		x.shift();
		y.shift();
		yLength = y.length;
		for (i = 0; i < yLength; i++){
			y[i] -= yChange;
		}
		if (n % 2 == true){
			x.push(x[x.length - 1]-xChange);
			y.push(y[y.length - 1]+yChange);
		} else {
			x.push(x[x.length - 1]+xChange);
			y.push(y[y.length - 1]+yChange);
		}
	}
	var append = "";
	console.log("X:"+x); //THESE ARE TO BE REMOVED
	console.log("MIDDLES X:"+locateMiddles(x, true)); //THESE ARE TO BE REMOVED
	console.log("Y:"+y); //THESE ARE TO BE REMOVED
	console.log("MIDDLES Y:"+locateMiddles(y, true)); //THESE ARE TO BE REMOVED
	for (var j = 0; j <= final; j += 1){
		append += "<line x1='"+x[j]+"' y1='"+y[j]+"' x2='"+x[j+1]+"' y2='"+y[j+1]+"' stroke-width='0.5' stroke='black'/>";
	}
	// console.log("x:["+x+"]"); console.log("y:["+y+"]");
	document.getElementById("drawn").innerHTML += append;
}
function recognizeLineDirection(direction){
	var array = [];
	array = direction.split(")");
	array.pop();
	for (var i=0; i < array.length; i++){
		array[i] = array[i].replace(')', '');
		array[i] = array[i].replace('(', '');
		array[i] = array[i].replace('_', '');
	}
	return array;
} //At some points, this will not be used anymore. We switching to arrays.
//------------------------------------------------------------------------------------------------------
//AID FUNCTIONS
function locateMiddles(array,oneVar){
	var result = [];
	if (oneVar == true){ //oneVar being true means that we only account for one variable, not both x and y
		if (array.length < 2) return console.log("Error...");
		var middle;
		for (var i=0; i < array.length - 1; i++){
			middle = (array[i]+array[i+1])/2;
			result.push(middle);
		}
	} else{
		if (array.length < 4) return console.log("Error...");
		var middleX, middleY;
		for (var i=0; i < array.length - 3; i+=2){
			middleX = (array[i]+array[i+2])/2;
			middleY = (array[i+1]+array[i+3])/2;
			result.push(middleX);
			result.push(middleY);
		}
	}
	return result;
	// console.log("WORKING ON IT");
} //THIS IS USED INSIDE FUNCTIONS
//--------------------------------------------------------------------------------------------------
//This right here is going to be the main function
//This also needs to be fixed for different browsers and stuffs.

var theMolecule;
function displayMolecule(molecule) {
	theMolecule = molecule;
	var linksToLineStructures = "Links to line structures: <a href='https://en.wikipedia.org/wiki/Skeletal_formula'>Wikipedia</a>, <a href='http://chem.libretexts.org/Core/Organic_Chemistry/Fundamentals/Structure_of_Organic_Molecules'>Chemistry libretexts</a>, and <a href='http://catalog.flatworldknowledge.com/bookhub/reader/2547?e=gob-ch12_s04'> catalog flatworldknowledge</a>.";
	var linksToResonance = "Links to resonance strucutres: <a href='https://en.wikipedia.org/wiki/Resonance_(chemistry)'>Wikipedia</a>, <a href='http://www.chem.ucla.edu/~harding/tutorials/resonance/draw_res_str.html'>Chem.ucla</a>.";
	// defining variables to simplify the JavaScript
	var sDChange = document.getElementById("smallDisplay");
	var bDChange = document.getElementById("bigDisplay");
	var dSChange = document.getElementById("drawingSpace");
	var height = (dSChange.offsetHeight)*(200/drawnHeight); //console.log(height);
	var units = (5/8)*actualWidth;
	var initialValueOfDS = "<svg viewbox ='0 0 "+units+" 200' id='drawn'></svg>";
	switch (molecule) {
		case "methane": case "ch4": case "Ch4": case "cH4": case "CH4":{
			dSChange.innerHTML = initialValueOfDS;
			var inX = (units/2)-47.5, inY = height/2;
			var inXEls = inX+47.5, inYEls = inY - 7;
			nHLines([inX,inY], 2);
			nVLines([inXEls,inY-48.5], 2);
			nElements(["H","C","H","H","H"],[inXEls-67,inYEls,inXEls-6,inYEls,inXEls+54,inYEls,inXEls-6,inYEls-60.5,inXEls-6,inYEls+62.5]);
			sDChange.innerHTML = "CH4, methane";
			bDChange.innerHTML = "";
			break;
		}
		case "CH3COOH": case "ch3cooh":{
			dSChange.innerHTML = initialValueOfDS;
			var inX = (units/2)-26.3, inY = height/2;
			var inXEls = inX+26.3, inYEls = inY - 7;
			nLSLinesH([inX,inY],2,false);
			nVLinesBonds([inXEls-0.65,inY-30],1,2);
			nElements(["O","OH"], [inXEls-6.6,inY-47,inXEls+28,inY+9.5]);
			fourHDots([inXEls-13.5,inY-47]);
			fourVDots([inXEls+29.5,inY+2.75]);
			sDChange.innerHTML = "CH3COOH, acetic acid";
			bDChange.innerHTML = linksToLineStructures;
			break;
		}
		case "c2h3coo-": case "C2H3COO-": case "c2h3o2^-": case "c2h3o2^(-)": case "C2H3O2^-": case "C2H3O2^(-)": case "ch3coo-": case "CH3COO-":
		case "ch3coo^-": case "ch3coo^(-)": case "ch3COO^-": case "ch3COO^(-)": case "CH3cOO^-": case "CH3cOO^(-)": case "cH3COO^-": case "cH3COO^(-)": case "CH3COO^-":
		case "CH3COO^(-)": {
			dSChange.innerHTML = initialValueOfDS;
			var inX = (units/2)-26.3, inY = height/2;
			var inXEls = inX+26.3, inYEls = inY - 7;
			nLSLinesH([inX,inY],2,false);
			nVLinesBonds([inXEls-0.65,inY-30],1,2);
			nElements(["O","O"], [inXEls-6.6,inY-47,inXEls+28,inY+9.5]);
			nElements(["-"], [inXEls+40,inY]);
			fourHDots([inXEls-13.5,inY-47]);
			sixDots([inXEls+29.5,inY+2.75],"left",false);
			sDChange.innerHTML = "CH3COO^(-), acetate";
			bDChange.innerHTML = linksToLineStructures;
			break;
		}
		case "CO32-": case "cO3^2-": case "cO3^(2-)": case "CO3^2-": case "CO3^(2-)":{
			dSChange.innerHTML = initialValueOfDS;
			var inX = (units/2)-47.5, inY = height/2;
			var inXEls = inX+47.5, inYEls = inY - 7;
			nHLines([inX,inY], 2);
			nVLinesBonds([inXEls+1,inY+15.5], 1, 2);
			nElements(["O","C","O","O"],[inXEls-67,inYEls,inXEls-6,inYEls,inXEls+54,inYEls,inXEls-6,inYEls+62.5]);
			nElements(["-","-"],[inXEls-53,inYEls-10,inXEls+67,inYEls-10]);
			fourHDots([inXEls-13.20,inYEls+64.5]);
			sixDots([inXEls-64.5,inYEls-7.15],"right",false);
			sixDots([inXEls+55.5,inYEls-7.15],"left",false);
			sDChange.innerHTML = "CO3^(2-), carbonate ion";
			bDChange.innerHTML = linksToResonance + "<br>" + about("resonance");
		}
		break;
		case "water": case "h2O": case "H2o": case "h2o": case "H2O":{
			dSChange.innerHTML = initialValueOfDS;
			var inX = (units/2)-47.5, inY = height/2;
			var inXEls = inX+47.5, inYEls = inY - 7;
			nHLines([inX,inY], 2);
			fourVDots([inXEls-4.20,inYEls-7.15]);
			nElements(["H","O","H"],[inXEls-67,inYEls,inXEls-6,inYEls,inXEls+54,inYEls]);
			sDChange.innerHTML = "H2O, hydrogen dioxide";
			bDChange.innerHTML = "";
		}
		break;
		case "n2": case "N2":{
			dSChange.innerHTML = initialValueOfDS;
			var inX = (units/2)-15, inY = height/2;
			var inXEls = inX-15, inYEls = inY - 7;
			nHLinesBonds([inX,inY], 1, 3);
			nElements(["N","N"],[inXEls,inYEls,inXEls+49,inYEls]);
			twoVDots([inXEls-4,inYEls+1.5]); twoVDots([inXEls+16+49,inYEls+1.5]);
			sDChange.innerHTML = "N2, nitrogen gas";
			bDChange.innerHTML = "";
		}
		break;
		case "nh3": case "Nh3": case "nH3": case "NH3":{
			dSChange.innerHTML = initialValueOfDS;
			var inX = (units/2)-47.5, inY = height/2;
			var inXEls = inX+47.5, inYEls = inY - 7;
			nHLines([inX,inY], 2);
			nVLines([inXEls-1,inY+15.5], 1);
			nElements(["H","N","H","H"],[inXEls-67,inYEls,inXEls-7,inYEls,inXEls+54,inYEls,inXEls-7,inYEls+62.5]);
			twoHDots([inXEls-5.5,inY-13.5]);
			sDChange.innerHTML = "NH3, ammonia";
			bDChange.innerHTML = "";
		}
		break;
		case "nh4+1": case "NH4+1": case "nh4^+1": case "nh4^(+1)": case "nh4^+": case "nh4^(+)": case "nH4^+1": case "nH4^(+1)": case "nH4^+":
		case "nH4^(+)": case "Nh4^+1": case "Nh4^(+1)": case "Nh4^+": case "Nh4^(+)": case "NH4^+1": case "NH4^(+1)": case "NH4^+":
		case "NH4^(+)":{
			dSChange.innerHTML = initialValueOfDS;
			var inX = (units/2)-47.5, inY = height/2;
			var inXEls = inX+47.5, inYEls = inY - 7;
			nHLines([inX,inY], 2);
			nVLines([inXEls,inY-48.5], 2);
			nElements(["H","N","H","H","H"],[inXEls-67,inYEls,inXEls-6,inYEls,inXEls+54,inYEls,inXEls-6,inYEls-60.5,inXEls-6,inYEls+62.5]);
			element("+",[inXEls+2,inYEls-10]);
			sDChange.innerHTML = "NH4^(+), ammonium ion";
			bDChange.innerHTML = "";
				}
		break;
		case "no2-": case "NO2-": case "No2^-": case "No2^(-)": case "nO2^-": case "nO2^(-)": case "no2^-": case "no2^(-)": case "NO2^-":
		case "NO2^(-)":{
			dSChange.innerHTML = initialValueOfDS;
			var inX = (units/2)-47.5, inY = height/2;
			var inXEls = inX+47.5, inYEls = inY - 7;
			nHLinesBonds([inX,inY], 1, 2);
			nHLines([inXEls+17.5,inY], 1);
			nElements(["O","N","O"],[inXEls-67,inYEls,inXEls-6,inYEls,inXEls+54,inYEls]);
			twoHDots([inXEls-5,inYEls-7.15]);
			fourVDots([inXEls-65.5,inYEls-7.15]);
			sixDots([inXEls+55.5,inYEls-7.15],"left",false);
			nElements(["-"],[inXEls+67,inYEls-10]);
			sDChange.innerHTML = "NO2^(-), nitrite ion";
			bDChange.innerHTML = linksToResonance + "<br>" + about("resonance");
		}
		break;
		case "no3-": case "NO3-": case "nO3^-": case "nO3^(-)": case "no3^-": case "NO3^-": case "no3^(-)":
		case "NO3^(-)":{
			dSChange.innerHTML = initialValueOfDS;
			var inX = (units/2)-47.5, inY = height/2;
			var inXEls = inX+47.5, inYEls = inY - 7;
			nHLinesBonds([inX,inY], 1, 2);
			nHLines([inXEls+17.5,inY], 1);
			nVLines([inXEls-1,inY+15.5], 1);
			nElements(["O","N","O","O"],[inXEls-67,inYEls,inXEls-6,inYEls,inXEls+54,inYEls,inXEls-6,inYEls+62.5]);
			fourVDots([inXEls-65.5,inYEls-7.15]);
			sixDots([inXEls+55.5,inYEls-7.15],"left",false);
			sixDots([inXEls-13,inYEls+64.5],"top",false);
			nElements(["-","-","+"],[inXEls+67,inYEls-10,inXEls+5,inYEls+53.5, inXEls+5,inYEls-10]);
			sDChange.innerHTML = "NO3^(-), nitrate ion";
			bDChange.innerHTML = linksToResonance + "<br>" + about("resonance");
		}
		break;
		case "oh-": case "OH-": case "oH-": case "Oh-": 
		case "oh^-": case "oh^(-)": case "oH^-": case "oH^(-)": case "Oh^-": case "Oh^(-)": case "OH^-":
		case "OH^(-)":{
			dSChange.innerHTML = initialValueOfDS;
			var inX = (units/2)-15, inY = height/2;
			var inXEls = inX-15, inYEls = inY - 7;
			nHLinesBonds([inX,inY], 1, 1);
			nElements(["O","H"],[inXEls,inYEls,inXEls+49,inYEls]);
			nElements(["-"],[inXEls+9,inYEls-8]);
			sixDots([inXEls+1,inYEls-6],"right", false);
			sDChange.innerHTML = "OH^(-), hydroxide";
			bDChange.innerHTML = "";
		}
		break;
		case "pO4^-3": case "pO4^(-3)": case "pO4^3-": case "pO4^(3-)": case "PO4^-3": case "PO4^(-3)": case "PO4^3-": 
		case "PO4^(3-)":{
			dSChange.innerHTML = initialValueOfDS;
			var inX = (units/2)-47.5, inY = height/2;
			var inXEls = inX+47.5, inYEls = inY - 7;
			nHLines([inX,inY], 2);
			nVLines([inXEls,inY-48.5], 1);
			nVLinesBonds([inXEls,inY+15.5], 1, 2);
			nElements(["O","P","O","O","O"],[inXEls-67,inYEls,inXEls-6,inYEls,inXEls+54,inYEls,inXEls-6,inYEls-60.5,inXEls-6,inYEls+62.5]);
			sixDots([inXEls-64.5,inYEls-7.15],"right",false);
			sixDots([inXEls+55.5,inYEls-7.15],"left",false);
			sixDots([inXEls-12.5,inYEls-59.15],"bottom",false);
			nElements(["-","-","-"],[inXEls-53,inYEls-10,inXEls+67,inYEls-10,inXEls+7,inYEls-70]);
			fourHDots([inXEls-12.5,inYEls+64.15]);
			sDChange.innerHTML = "PO4^(3-), phosphate ion";
			bDChange.innerHTML = "";
		}
		break;
		case "sCl2": case "scl2": case "SCl2":{
			dSChange.innerHTML = initialValueOfDS;
			var inX = (units/2)-47.5, inY = height/2;
			var inXEls = inX+47.5, inYEls = inY - 7;
			nHLines([inX,inY], 2);
			fourVDots([inXEls-4.20,inYEls-7.15]);
			nElements(["Cl","S","Cl"],[inXEls-71,inYEls,inXEls-6,inYEls,inXEls+54,inYEls]);
			sixDots([inXEls-64.5,inYEls-7.15],"right",true);
			sixDots([inXEls+61.5,inYEls-7.15],"left",true);
			sDChange.innerHTML = "SCl2, sulfur dichloride";
			bDChange.innerHTML = "";
		}
		break;
		case "xef2": case "Xef2": case "XeF2": case "XEF2":{
			dSChange.innerHTML = initialValueOfDS;
			var inX = (units/2)-47.5, inY = height/2;
			var inXEls = inX+47.5, inYEls = inY - 7;
			nHLines([inX,inY], 2);
			nElements(["F","Xe","F"],[inXEls-67,inYEls,inXEls-10,inYEls,inXEls+54,inYEls]);
			twoHDots([inXEls-4.20,inYEls-7.15]);
			sixDots([inXEls-64.5,inYEls-7.15],"right",false);
			sixDots([inXEls+55.5,inYEls-7.15],"left",false);
			twoTDots([inXEls-13,inYEls+13], 30); twoTDots([inXEls+6,inYEls+4+13], -30);
			sDChange.innerHTML = "XeF2, xenon difluoride";
			bDChange.innerHTML = "";
		}
		break;
		case "xeF3+": case "xeF3^+":case "xeF3^(+)":case "xef3+": case "xef3^+":case "xef3^(+)":case "Xef3+": case "Xef3^+":case "Xef3^(+)":case "XeF3+":case "XeF3^+":
		case "XeF3^(+)":{
			dSChange.innerHTML = initialValueOfDS;
			var inX = (units/2)-47.5, inY = height/2;
			var inXEls = inX+47.5, inYEls = inY - 7;
			nVLines([inXEls,inY-42.5], 1);
			nHLines([inX,inY], 2);
			nElements(["F","Xe","F","F"],[inXEls-67,inYEls,inXEls-10,inYEls,inXEls+54,inYEls,inXEls-6,inYEls-53]);
			sixDots([inXEls-64.5,inYEls-7.15],"right",false);
			sixDots([inXEls+55.5,inYEls-7.15],"left",false);
			sixDots([inXEls-12,inYEls-52],"bottom",false);
			twoTDots([inXEls-13,inYEls+13], 30); twoTDots([inXEls+6,inYEls+4+13], -30);
			nElements(["+"],[inXEls+5,inYEls-10]);
			sDChange.innerHTML = "XeF3^(+), xenon trifluoride";
			bDChange.innerHTML = "";
		}
		break;
		case "xeo3": case "XEO3": case "Xeo3": case "XeO3":{
			dSChange.innerHTML = initialValueOfDS;
			var inX = (units/2)-47.5, inY = height/2;
			var inXEls = inX+47.5, inYEls = inY - 7;
			nVLinesBonds([inXEls,inY-42.5], 1, 2);
			nHLinesBonds([inX,inY], 2, 2);
			nElements(["O","Xe","O","O"],[inXEls-67,inYEls,inXEls-10,inYEls,inXEls+54,inYEls,inXEls-6,inYEls-53]);
			fourVDots([inXEls-65.5,inYEls-7.15],"right");
			fourVDots([inXEls+55.5,inYEls-7.15],"left");
			fourHDots([inXEls-13,inYEls-52],"bottom");
			twoHDots([inXEls-4.0,inYEls+18.15]);
			// nElements(["+"],[inXEls+5,inYEls-10]);
			sDChange.innerHTML = "XeO3, xenon trioxide";
			bDChange.innerHTML = "";
		}
		break;
		case "":
		case " ":
			dSChange.innerHTML = "";
			sDChange.innerHTML = "";
			bDChange.innerHTML = "";
			theMolecule = "";
		break;
		default:{
					//initialValueOfDS = "<svg viewbox ='0 0 500 200' id='drawn'></svg>"
					dSChange.innerHTML = "<span style='position: absolute; font-size: 1.5rem; text-transform: uppercase; text-align: centered; left: 0rem; top: 6.5rem;'> The molecule entered is not saved in our library. Please make sure you have followed the guidelines for syntax, or submit this molecule on the submission on the right so that we can add it. Thanks.</span>";
					sDChange.innerHTML = "<span style='color:rgba(150,0,0,1); text-decoration: line-through;'>"+molecule+"</span>";
					bDChange.innerHTML = "";
				}
		break;
	}
	if (window.mobilecheck()){
		instruction();
	}
	document.getElementById("enterMolecule").value = "";
	var actualHeight = document.getElementById("smallDisplay").offsetWidth;
	document.getElementById("smallDisplay").style.height = actualHeight;
	// document.getElementById("drawingSpace").innerHTML = "<svg viewbox ='0 0 500 200' id='drawn'></svg>";
	// document.getElementById("smallDisplay").innerHTML = "NH4^(+)";
}

//----------------------------------------------------------------------------------------------------
//The following function will give a brief description of what the molecule is!

function about(molecule){
	var result = "";
	switch (molecule){
		case "CH4":
			result = "";
		break;
		case "CH3COOH":
			result = "";
		break;
		case "CH3COO^(-)":
			result = "";
		break;
		case "H2O":
			result = "";
		break;
		case "N2":
			result = "";
		break;
		case "NH3":
			result = "";
		break;
		case "NH4^(+)":
			result = "";
		break;
		case "NO2^(-)":
			result = "";
		break;
		case "NO3^(-)":
			result = "";
		break;
		case "OH^(-)":
			result = "";
		break;
		case "PO4^(3-)":
			result = "";
		break;
		case "SCl2":
			result = "";
		break;
		case "XeF2":
			result = "";
		break;
		case "XeF3^(+)":
			result = "";
		break;
		case "XeO3":
			result = "";
		break;
		// The following are other stuffs
		case "resonance":
			result = "This structure involves resonance, which happens by switching the double bonds in O to a different O and by fixing the formal charges.";
		break;
		default:
			result = "No facts about "+molecule.toUpperCase()+" yet.";
		break;
	}
	return result;
}
