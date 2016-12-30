var data = require('./data.json');
var index = []; 
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

sortByIndex(data);
console.log(data[index[1]]);