var data = require('./data.json');
var index = []; 
var elements = [];
function sortByIndex(obj){
	index = [];
	//I had the following code from http://stackoverflow.com/questions/4044845/retrieving-a-property-of-a-json-object-by-index (Answer by Daniel Vassallo)
	// build the index
	for (var x in obj) {
	   index.push(x);
	}
	// sort the index
	index.sort(function (a, b) {    
	   return a == b ? 0 : (a > b ? 1 : -1); 
	}); 
}
sortByIndex(data["onSite"]);
console.log(data["onSite"][index[1]]);

var elements = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Uub","Uut","Uuq","Uup","Uuh","Uus","Uuo"];
function generateCases(value, charge){
	/*
	check if lowercase letter is single ("Bx" is single), if yes, check if X is an element.
	At the end, remove all misleading cases.
	This is how I'd do it for case "HC3^(4-)" //I will not rewrite case
	HC34- hC34- Hc34- hc34- (duplicate all four)
	HC3^4- hC3^4- Hc3^4- hc3^4- (put that)
	HC3^(4-) hC3^(4-) Hc3^(4-) hc3^(4-) (put parenthesis)
	Copy all, and switch 4- to -4.
	*/
	return "Working on it";
}
function count(elm, molecule){
	/*
	This functions counts, in chemistry terms, the number of a specific element in a molecule 
	given that no parenthesis is used and that the molecule is not an ion (meaning that there is no charge). 
	DISCLAIMER: This just counts; it does not check if the molecule given is correct or not. The following 
	examples illustrate all of this.
	Ex: count("H","H2CoVTH5") returns 7. count("Co","H2CoVTH5") returns 1. count("C","CuCO4") returns 1.
	*/
	var result = ""; var twoLet = 0; if (elm.length >= 2) twoLet = 1; //elm stands for element
	if (molecule.indexOf(elm) !== -1){
		var regex = new RegExp(elm, "g"); var countEl = molecule.match(regex).length;
		if (countEl === 1){
			var index = molecule.indexOf(elm) + twoLet; var i = 1;
			if (index == molecule.length - 1) return 1;
			while (molecule[index+i].match(/[0-9]+/) !== null){
				result += molecule[index+i].match(/[0-9]+/)[0];
				i++;
				if (index+i == molecule.length) break;
			}
			if (result === "") return 1;
			return parseInt(result);
		} else {
			var indices = []; // console.log(countEl+" instances of "+elm);
			for(var i=0; i < molecule.length;i++) {
				if (twoLet == 0) {
					if (i < molecule.length - 1){
						if (molecule[i+1].match(/[1-9]/) !== null || molecule[i+1].match(/[A-Z]/) !== null) {
							if (molecule[i].match(regex) !== null) indices.push(i);
						}
					} else if (i == molecule.length - 1){
						if (molecule[i].match(regex) !== null) indices.push(i);
					}
				}
			    else if (molecule.substring(i,i+twoLet+1).match(regex) !== null) indices.push(i+twoLet);
			}
			result = 0;
			var temp; // console.log(indices);
			for (val in indices){
				i = 1;
				temp = "";
				while (molecule[indices[val]+i].match(/[0-9]+/) !== null){
					temp += molecule[indices[val]+i].match(/[0-9]+/)[0];
					i++; 
					if (indices[val]+i == molecule.length) break;
				}
				// if (temp == "")console.log("temp: 1"); else console.log("temp: "+temp);
				if (temp !== "") result += parseInt(temp); else result++;
			}
			return result;
		}
	} 
	else return 0;
}

