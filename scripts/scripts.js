var myVar = window.setInterval(myTimer, 1000);
function myTimer() {
    var d = new Date();
   	document.getElementById("time").innerHTML = d.toLocaleTimeString();
}
//The function above is just to keep track of the time.
/*
function generateRightViewbox(){
	Test window, 
}
*/
//The function above is to generate the right viewbox.

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

//--------------------------------------------------------------------------------------------------
//Below here are all the specific functions working in the background.
//These need to be implemented for different browsers and different screen sizes.
//But I want to make use of frameworks as little as possible, so this might be a bit complicated.

function dot(location){
	var newLoc = recognizeLineDirection(location);
	var x = newLoc[0], y = newLoc[1];
	var append = "<circle cx='"+x+"' cy='"+y+"' r='2' stroke='black' stroke-width='1' fill='black' />";
	document.getElementById("drawn").innerHTML += append;
}

function element(element, location){ //This location works in REMS!!!
	var newLoc = recognizeLineDirection(location);
	var x = newLoc[0], y = newLoc[1];
	var append = "<span style='position: absolute; font-family: helvetica !important; font-size: 2rem; left:"+x+"rem; top: "+y+"rem;'>"+element+"</span>";
	document.getElementById("drawingSpace").innerHTML += append;
}

function line(direction){
	var newDir = recognizeLineDirection(direction);
	var x1 = newDir[0], y1 = newDir[1], x2 = newDir[2], y2 = newDir[3];
	var append = "<line x1='"+x1+"' y1='"+y1+"' x2='"+x2+"' y2='"+y2+"' stroke-width='0.5' stroke='black'/>";
	document.getElementById("drawn").innerHTML += append;
}

function lineDash(direction){
	var newDir = recognizeLineDirection(direction);
	var x1 = newDir[0], y1 = newDir[1], x2 = newDir[2], y2 = newDir[3];
	var append = "<line stroke-dasharray='3, 3' x1='"+x1+"' y1='"+y1+"' x2='"+x2+"' y2='"+y2+"' stroke-width='0.5' stroke='black'/>";
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
}

//--------------------------------------------------------------------------------------------------
//This right here is going to be the main function
//This also needs to be fixed for different browsers and stuffs.

function displayMolecule(molecule) {
	var linksToLineStructures = "Links to line structures: <a href='https://en.wikipedia.org/wiki/Skeletal_formula'>Wikipedia</a>, <a href='http://chem.libretexts.org/Core/Organic_Chemistry/Fundamentals/Structure_of_Organic_Molecules'>Chemistry libretexts</a>, and <a href='http://catalog.flatworldknowledge.com/bookhub/reader/2547?e=gob-ch12_s04'> catalog flatworldknowledge</a>.";
	var linksToResonance = "Links to resonance strucutres: <a href='https://en.wikipedia.org/wiki/Resonance_(chemistry)'>Wikipedia</a>, <a href='http://www.chem.ucla.edu/~harding/tutorials/resonance/draw_res_str.html'>Chem.ucla</a>.";
	// defining variables to simplify the JavaScript
	var sDChange = document.getElementById("smallDisplay");
	var bDChange = document.getElementById("bigDisplay");
	var dSChange = document.getElementById("drawingSpace");
	var initialValueOfDS = "<svg viewbox ='0 0 500 200' id='drawn'></svg>";
	switch (molecule) {
		case "ch4": case "Ch4": case "cH4": case "CH4":{
					dSChange.innerHTML = initialValueOfDS;
					line("(205)(100)_(235)(100)"); line("(265)(100)_(295)(100)");
					line("(249)(55)_(249)(85)"); line("(249)(115)_(249)(145)");
					element("C", "(24.28)(8.85)");
					element("H", "(18.6)(8.85)"); element("H", "(30)(8.85)");
					element("H", "(24.22)(2.9)"); element("H", "(24.22)(14.7)");
					sDChange.innerHTML = "CH4, methane";
					bDChange.innerHTML = "";
				}
		break;
		case "CH3COOH": case "ch3cooh":{
					dSChange.innerHTML = initialValueOfDS;
					line("(224.019237886)(85)_(250)(100)"); line("(250)(100)_(275.980762114)(85)");
					line("(247.5)(100)_(247.5)(130)"); line("(252.5)(100)_(252.5)(130)");
					element("O", "(24.28)(13)"); element("OH", "(28)(7.3)");
					dot("(283.25)(71.5)"); dot("(291.25)(71.5)"); 
					dot("(283.25)(97)"); dot("(291.25)(97)"); 
					dot("(237.95)(146)"); dot("(242.95)(152)");
					dot("(261.95)(146)"); dot("(256.95)(152)");
					sDChange.innerHTML = "CH3COOH, acetic acid";
					bDChange.innerHTML = linksToLineStructures;
				}
		break;
		case "c2h3coo-": case "C2H3COO-": case "c2h3o2^-": case "c2h3o2^(-)": case "C2H3O2^-": case "C2H3O2^(-)": case "ch3coo-": case "CH3COO-":
		case "ch3coo^-": case "ch3coo^(-)": case "ch3COO^-": case "ch3COO^(-)": case "CH3cOO^-": case "CH3cOO^(-)": case "cH3COO^-": case "cH3COO^(-)": case "CH3COO^-":
		case "CH3COO^(-)": {
					dSChange.innerHTML = initialValueOfDS;
					line("(224.019237886)(85)_(250)(100)"); line("(250)(100)_(275.980762114)(85)");
					line("(247.5)(100)_(247.5)(130)"); line("(252.5)(100)_(252.5)(130)");
					element("O", "(24.28)(13)"); element("O", "(28)(7.3)");
					dot("(283.25)(71.5)"); dot("(291.25)(71.5)"); 
					dot("(283.25)(97)"); dot("(291.25)(97)"); 
					dot("(300)(80)"); dot("(300)(88)"); //Side next to O
					dot("(237.95)(146)"); dot("(242.95)(152)");
					dot("(261.95)(146)"); dot("(256.95)(152)");
					element("-", "(30)(5.6)");
					sDChange.innerHTML = "CH3COO^(-), acetate";
					bDChange.innerHTML = linksToLineStructures;
				}
		break;
		case "CO32-": case "cO3^2-": case "cO3^(2-)": case "CO3^2-": case "CO3^(2-)":{
					dSChange.innerHTML = initialValueOfDS;
					line("(205)(100)_(235)(100)"); line("(264)(100)_(294)(100)");
					line("(246.5)(115)_(246.5)(145)"); line("(251.5)(115)_(251.5)(145)");
					element("C", "(24.25)(8.85)"); 
					element("O", "(18.6)(8.85)"); element("O", "(29.9)(8.85)"); 
					element("O", "(24.16)(14.5)");
					dot("(189)(87)"); dot("(197)(87)"); dot("(303)(87)"); dot("(311)(87)"); //Horizontal Up on O's
					dot("(189)(113)"); dot("(197)(113)"); dot("(303)(113)"); dot("(311)(113)"); //Horizontal Down on O's
					dot("(180)(96)"); dot("(180)(104)"); dot("(319.5)(96)"); dot("(319.5)(104)"); //Vertical on O's
					dot("(263)(153)"); dot("(263)(161)"); //Vertical on Bottom O
					dot("(236)(153)"); dot("(236)(161)"); //Vertical on Bottom O
					element("-", "(20.42)(6.85)"); element("-", "(32.02)(6.85)"); 
					sDChange.innerHTML = "CO3^(2-), carbonate ion";
					bDChange.innerHTML = linksToResonance + "<br>" + about("resonance");
				}
		break;
		case "h2o": case "H2O":{
					dSChange.innerHTML = initialValueOfDS;
					line("(205)(100)_(235)(100)"); line("(265)(100)_(295)(100)");
					element("O", "(24.28)(8.85)");
					element("H", "(18.6)(8.85)"); element("H", "(30)(8.85)");
					dot("(246)(86)"); dot("(254)(86)"); dot("(246)(114)"); dot("(254)(114)");
					sDChange.innerHTML = "H2O, hydrogen dioxide";
					bDChange.innerHTML = "";
				}
		break;
		case "n2": case "N2":{
					dSChange.innerHTML = initialValueOfDS;
					line("(235)(105)_(265)(105)"); line("(235)(100)_(265)(100)"); line("(235)(95)_(265)(95)");
					element("N", "(21.6)(8.8)"); element("N", "(27.0)(8.8)");
					dot("(210)(96)"); dot("(210)(104)"); dot("(288.3)(96)"); dot("(288.3)(104)");
					sDChange.innerHTML = "N2, nitrogen molecule";
					dSChange.innerHTML = "";
				}
		break;
		case "nh3": case "Nh3": case "nH3": case "NH3":{
					dSChange.innerHTML = initialValueOfDS;
					line("(205)(83)_(235)(83)"); line("(265)(83)_(295)(83)"); line("(249)(98)_(249)(128)");
					element("N", "(24.35)(7.1)");
					element("H", "(18.6)(7.1)"); element("H", "(30)(7.1)"); element("H", "(24.2)(13)");
					dot("(246)(70)"); dot("(254)(70)");
					sDChange.innerHTML = "NH3, ammonia";
					bDChange.innerHTML = "";
				}
		break;
		case "nh4+1": case "NH4+1": case "nh4^+1": case "nh4^(+1)": case "nh4^+": case "nh4^(+)": case "nH4^+1": case "nH4^(+1)": case "nH4^+":
		case "nH4^(+)": case "Nh4^+1": case "Nh4^(+1)": case "Nh4^+": case "Nh4^(+)": case "NH4^+1": case "NH4^(+1)": case "NH4^+":
		case "NH4^(+)":{
					dSChange.innerHTML = initialValueOfDS;
					line("(205)(100)_(235)(100)"); line("(265)(100)_(295)(100)");
					line("(249)(55)_(249)(85)"); line("(249)(115)_(249)(145)");
					element("N", "(24.28)(8.85)");
					element("H", "(18.6)(8.85)"); element("H", "(30)(8.85)");
					element("H", "(24.22)(2.9)"); element("H", "(24.22)(14.7)");
					element("+", "(25.6)(7.4)");
					sDChange.innerHTML = "NH4^(+), ammonium";
					bDChange.innerHTML = "";
				}
		break;
		case "no2-": case "NO2-": case "No2^-": case "No2^(-)": case "nO2^-": case "nO2^(-)": case "no2^-": case "no2^(-)": case "NO2^-":
		case "NO2^(-)":{
					dSChange.innerHTML = initialValueOfDS;
					line("(205)(97.5)_(235)(97.5)"); line("(205)(102.5)_(235)(102.5)");
					line("(264)(100)_(294)(100)");
					element("N", "(24.25)(8.85)"); 
					element("O", "(18.6)(8.85)"); element("O", "(29.9)(8.85)"); 
					dot("(189)(87)"); dot("(197)(87)"); dot("(303)(87)"); dot("(311)(87)"); //Horizontal Up on O's
					dot("(189)(113)"); dot("(197)(113)"); dot("(303)(113)"); dot("(311)(113)"); //Horizontal Down on O's
					dot("(319.5)(96)"); dot("(319.5)(104)"); //Vertical on O's
					dot("(246)(114)"); dot("(254)(114)"); //Horizontal on Middle O
					element("-", "(32.02)(6.85)");
					sDChange.innerHTML = "NO2^(-), nitrite ion";
					bDChange.innerHTML = linksToResonance + "<br>" + about("resonance");
				}
		break;
		case "no3-": case "NO3-": case "nO3^-": case "nO3^(-)": case "no3^-": case "NO3^-": case "no3^(-)":
		case "NO3^(-)":{
					dSChange.innerHTML = initialValueOfDS;
					line("(205)(100)_(235)(100)"); line("(264)(100)_(294)(100)");
					line("(246.5)(115)_(246.5)(145)"); line("(251.5)(115)_(251.5)(145)");
					element("N", "(24.25)(8.85)"); 
					element("O", "(18.6)(8.85)"); element("O", "(29.9)(8.85)"); 
					element("O", "(24.16)(14.5)");
					dot("(189)(87)"); dot("(197)(87)"); dot("(303)(87)"); dot("(311)(87)"); //Horizontal Up on O's
					dot("(189)(113)"); dot("(197)(113)"); dot("(303)(113)"); dot("(311)(113)"); //Horizontal Down on O's
					dot("(180)(96)"); dot("(180)(104)"); dot("(319.5)(96)"); dot("(319.5)(104)"); //Vertical on O's
					dot("(263)(153)"); dot("(263)(161)"); //Vertical on Bottom O
					dot("(236)(153)"); dot("(236)(161)"); //Vertical on Bottom O
					element("-", "(20.42)(6.85)"); element("-", "(32.02)(6.85)"); element("+", "(25.4)(7.35)");
					sDChange.innerHTML = "NO3^(-), nitrate ion";
					bDChange.innerHTML = linksToResonance + "<br>" + about("resonance");
				}
		break;
		case "oh^-": case "oh^(-)": case "oH^-": case "oH^(-)": case "Oh^-": case "Oh^(-)": case "OH^-":
		case "OH^(-)":{
					dSChange.innerHTML = initialValueOfDS;
					line("(235)(100)_(265)(100)");
					element("O", "(21.6)(8.8)"); element("H", "(27.0)(8.8)");
					dot("(211)(96)"); dot("(211)(104)"); 
					dot("(219.65)(87)"); dot("(227.65)(87)"); 
					dot("(219.65)(112)"); dot("(227.65)(112)"); 
					element("-", "(23.3)(7.7)");
					sDChange.innerHTML = "OH^(-), hydroxide";
					bDChange.innerHTML = "";
				}
		break;
		case "pO4^-3": case "pO4^(-3)": case "pO4^3-": case "pO4^(3-)": case "PO4^-3": case "PO4^(-3)": case "PO4^3-": 
		case "PO4^(3-)":{
					dSChange.innerHTML = initialValueOfDS;
					line("(205)(100)_(235)(100)"); line("(265)(100)_(295)(100)");
					line("(250)(55)_(250)(85)"); 
					line("(246.5)(115)_(246.5)(145)"); line("(251.5)(115)_(251.5)(145)");
					element("P", "(24.4)(8.85)");
					element("O", "(18.6)(8.85)"); element("O", "(30)(8.85)");
					element("O", "(24.22)(3.0)"); element("O", "(24.16)(14.5)");
					dot("(246)(28)"); dot("(254)(28)");
					dot("(189)(87)"); dot("(197)(87)"); dot("(303)(87)"); dot("(311)(87)");
					dot("(189)(113)"); dot("(197)(113)"); dot("(303)(113)"); dot("(311)(113)");
					dot("(180)(96)"); dot("(180)(104)"); dot("(321)(96)"); dot("(321)(104)");
					dot("(263)(153)"); dot("(263)(161)"); dot("(263)(38)"); dot("(263)(46)");
					dot("(236)(153)"); dot("(236)(161)"); dot("(236)(38)"); dot("(236)(46)");
					element("-", "(20.42)(6.85)"); element("-", "(32.02)(6.85)"); element("-", "(26)(1.0)");
					sDChange.innerHTML = "PO4^(3-), phosphate";
					bDChange.innerHTML = "";
				}
		break;
		case "sCl2": case "scl2": case "SCl2":{
					dSChange.innerHTML = initialValueOfDS;
					line("(210)(100)_(240)(100)"); line("(265)(100)_(295)(100)");
					element("S", "(24.58)(8.85)");
					element("Cl", "(18.6)(8.85)"); element("Cl", "(30)(8.85)");
					dot("(248)(86)"); dot("(256)(86)"); //Top Middle
					dot("(248)(113)"); dot("(256)(113)"); //Bottom Middle
					dot("(192)(86)"); dot("(200)(86)"); dot("(305)(86)"); dot("(314)(86)"); //Top horizontal
					dot("(192)(113)"); dot("(200)(113)"); dot("(305)(113)"); dot("(314)(113)"); //Bottom horizontal
					dot("(180)(96)"); dot("(180)(104)"); dot("(324)(96)"); dot("(324)(104)"); //Vertical
					sDChange.innerHTML = "SCl2, sulfur dichloride";
					bDChange.innerHTML = "";
				}
		break;
		case "xef2": case "Xef2": case "XeF2": case "XEF2":{
					dSChange.innerHTML = initialValueOfDS;
					line("(205)(100)_(235)(100)"); line("(275)(100)_(305)(100)");
					element("Xe", "(24.28)(8.85)");
					element("F", "(18.6)(8.85)"); element("F", "(31)(8.85)");
					dot("(253)(86)"); dot("(261)(86)"); 
					dot("(238)(109)"); dot("(245)(114)"); dot("(263)(114)"); dot("(271)(109)");
					dot("(188)(86)"); dot("(196)(86)"); dot("(313)(86)"); dot("(321)(86)"); 
					dot("(188)(113)"); dot("(196)(113)"); dot("(313)(113)"); dot("(321)(113)"); 
					dot("(180)(96)"); dot("(180)(104)"); dot("(328)(96)"); dot("(328)(104)");
					sDChange.innerHTML = "XeF2, xenon difluoride";
					bDChange.innerHTML = "";
				}
		break;
		case "xeF3+": case "xeF3^+":case "xeF3^(+)":case "xef3+": case "xef3^+":case "xef3^(+)":case "Xef3+": case "Xef3^+":case "Xef3^(+)":case "XeF3+":case "XeF3^+":
		case "XeF3^(+)":{
					dSChange.innerHTML = initialValueOfDS;
					line("(205)(100)_(235)(100)"); line("(275)(100)_(305)(100)"); //Horizontal lines
					line("(255)(57)_(255)(87)");
					element("Xe", "(24.28)(8.85)");
					element("F", "(18.6)(8.85)"); element("F", "(31)(8.85)"); //Two F's side left and right
					element("F", "(24.92)(3.35)");
					dot("(238)(109)"); dot("(245)(114)"); dot("(263)(114)"); dot("(271)(109)"); //Under Xe, 2 lone-pairs
					dot("(188)(86)"); dot("(196)(86)"); dot("(313)(86)"); dot("(321)(86)"); //Horizontal top on 2 Fe on side
					dot("(188)(113)"); dot("(196)(113)"); dot("(313)(113)"); dot("(321)(113)"); //Horizontal bottom on 2 Fe on side
					dot("(180)(96)"); dot("(180)(104)"); dot("(328)(96)"); dot("(328)(104)"); //Vertical on 2 Fe on side
					dot("(242)(41)"); dot("(242)(49)"); dot("(268)(41)"); dot("(268)(49)"); //Vertical on top F
					dot("(252)(31)"); dot("(260)(31)"); //Horizontal on top F
					element("+", "(26.08)(7.35)");
					sDChange.innerHTML = "XeF3^(+), xenon trifluoride";
					bDChange.innerHTML = "";
				}

		break;
		case "xeo3": case "XEO3": case "Xeo3": case "XeO3":{
					dSChange.innerHTML = initialValueOfDS;
					line("(205)(97.5)_(235)(97.5)"); line("(266)(97.5)_(296)(97.5)");
					line("(205)(102.5)_(235)(102.5)"); line("(266)(102.5)_(296)(102.5)");
					line("(246.5)(115)_(246.5)(145)"); line("(251.5)(115)_(251.5)(145)");
					element("Xe", "(23.75)(8.85)"); 
					element("O", "(18.6)(8.85)"); element("O", "(29.9)(8.85)"); 
					element("O", "(24.16)(14.5)");
					dot("(189)(87)"); dot("(197)(87)"); dot("(303)(87)"); dot("(311)(87)"); //Horizontal Up on O's
					dot("(189)(113)"); dot("(197)(113)"); dot("(303)(113)"); dot("(311)(113)"); //Horizontal Down on O's
					dot("(263)(153)"); dot("(263)(161)"); //Vertical on Bottom O
					dot("(236)(153)"); dot("(236)(161)"); //Vertical on Bottom O
					dot("(246.5)(87.5)"); dot("(254.5)(87.5)"); //horizontal on middle O
					sDChange.innerHTML = "XeO3, xenon trioxide";
					bDChange.innerHTML = "";
				}
		break;
		default:{
					//initialValueOfDS = "<svg viewbox ='0 0 500 200' id='drawn'></svg>"
					dSChange.innerHTML = "<span style='position: absolute; font-size: 1.5rem; text-transform: uppercase; text-align: centered; left: 0rem; top: 6.5rem;'> The molecule entered is not saved in our library. Please make sure you have followed the guidelines for syntax, or submit this molecule on the submission on the right so that we can add it. Thanks.</span>";
					sDChange.innerHTML = "<span style='color:rgba(150,0,0,1); text-decoration: line-through;'>"+molecule+"</span>";
					bDChange.innerHTML = "";
				}
		break;
	}
	document.getElementById("enterMolecule").value = "";
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
