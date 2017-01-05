//CONTINUE FROM "Magnesium Acetate	Mg(C2H3O2)2" !!! !!! 
//https://www.quia.com/jg/125193list.html
var jsonFile;
function detectBrowser(){
	var browser = {chrome: false, ie:false, opera: false, safari: false};
	if (navigator.userAgent.indexOf('Chrome/') != -1) browser.chrome = true;
	if (navigator.userAgent.indexOf('MSIE/') != -1 || (!!document.documentMode == true )) browser.ie = true;
	if ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf('OPR/') != -1 || navigator.userAgent.indexOf("Opera") != -1 ) browser.opera = true;
	if (navigator.userAgent.indexOf('Safari/') != -1) browser.safari = true;
	if (browser.chrome == false && browser.ie == false && browser.opera == false && browser.safari == false) return "unknown browser";
	return browser;
	//Safari: safari only
	//Chrome: chrome || chrome & safari
	//Opera: opera || opera & chrome || opera & chrome & safari
	//IE: ie || ie & safari (?)
} //This function returns true for browsers that apply. 
$.ajax({
	url: 'data.json',
	dataType: 'json',
	async: false,
	cache: false,
	success: function (data, status){
		jsonFile = data;
		// console.log(data);
		console.log(status);
	},
	error: function (xhr, textStatus, err){
		console.log(xhr);
		console.log(textStatus);
	}
});
function fixName(nameOfMolecule){
	var i = 1;
	var regex;
	if (nameOfMolecule.indexOf("^(") != -1){
		var superscript = nameOfMolecule.slice((nameOfMolecule.indexOf("^(")+2),(nameOfMolecule.lastIndexOf(")")));
		nameOfMolecule = nameOfMolecule.replace(superscript, "<sup>"+superscript+"</sup>");
		nameOfMolecule = nameOfMolecule.replace(/\^\(|\)(?=\(\d)|\)(?!.)/g,"");
		for (i; i < 10; i++){
			if (nameOfMolecule.indexOf(i) < nameOfMolecule.lastIndexOf("<")) {
				regex = new RegExp(i+"(?!\\+|\\-)", "g");
				if (nameOfMolecule.match(regex) != null){
					if (nameOfMolecule.match(regex).length > 1) {
						nameOfMolecule = nameOfMolecule.replace(regex, "<sub>"+i+"</sub>");
					} else nameOfMolecule = nameOfMolecule.replace(i, "<sub>"+i+"</sub>");
				}
			}
		}
	}
	else {
		for (i = 1; i < 10; i++){
			regex = new RegExp(i, "g"); 
			if (nameOfMolecule.match(regex) != null){
				if (nameOfMolecule.match(regex).length > 1) {
					nameOfMolecule = nameOfMolecule.replace(regex, "<sub>"+i+"</sub>");
				} else nameOfMolecule = nameOfMolecule.replace(i, "<sub>"+i+"</sub>");
			}
		}
	}
	return nameOfMolecule;
}
function printOut(){
	var propOnSite = Object.keys(jsonFile.onSite);
	var propToAdd = Object.keys(jsonFile.toAdd); 
	var onSite = '', toAdd = '';
	var j = 0;
	//First, onSite
	onSite += "<table><tr><th><pre class='molecule'>Molecule</pre></th><th class='onSite'><pre>Name</pre></th></tr>";
	for (x in jsonFile.onSite){
		onSite += "<tr>";
		onSite += "<td class='onSite'><pre class='molecule'>" + fixName(propOnSite[j]) + "</pre></td><td><pre>" + jsonFile.onSite[x] + "</pre></td>";
		onSite += "</tr>";
		j++;
	}
	onSite += "</table>";
	$("#onSite").html(onSite);
	//Second, toAdd
	toAdd += "<table><tr><th><pre class='molecule'>Molecule</pre></th><th class='toAdd'><pre>Name</pre></th></tr>"; 
	j = 0;
	for (y in jsonFile.toAdd){
		toAdd += "<tr>";
		var name = jsonFile.toAdd[y];
		if (name.indexOf("?IONIC") != -1) {
			name = name.replace("?IONIC","<b style='color:red;'>?IONIC<b>");
			toAdd += "<td class='toAdd'><pre class='molecule'>" + fixName(propToAdd[j]) + "</pre></td><td><pre>" + name + "</pre></td>";
		}
		else toAdd += "<td class='toAdd'><pre class='molecule'>" + fixName(propToAdd[j]) + "</pre></td><td><pre>" + jsonFile.toAdd[y] + "</pre></td>";
		toAdd += "</tr>";
		j++;
	}
	toAdd += "</table>";
	$("#toAdd").html(toAdd);
}
window.addEventListener("load", function(){
	var browsers = detectBrowser();
	if (browsers.safari == true && browsers.chrome == false && browsers.ie == false && browsers.opera == false) printOut();
	else if (browsers.ie == true) printOut();
	else if (browsers.chrome == true || browsers.opera == true) {
		printOut();
	} //All this code seems pointless now Haha. The purpose was because this didn't work locally. 
});
function keepVisible(){
	//Still working on this!
	var mainPre = document.getElementById("mainPre");
	var style = mainPre.style;
	top  = window.pageYOffset;
	console.log(top);
	if (top > 48) {
		style.position = "fixed";
	} else style.position = "relative";
}




