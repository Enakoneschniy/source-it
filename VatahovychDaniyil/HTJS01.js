
function arrGenerator(n) {
	var randomArray = [];
		for (var i = 0; i < n; i++) 
		randomArray.push(Math.floor(Math.random() * 100));
	return randomArray;
}

var myArrGenerator = [1, 'text', 42, '23', 85];
function arrCount(myArrGenerator, s) {
	var result = [];
	var l = myArrGenerator.length;
	for (var i = 0; i < l; i += s)
		result.push(myArrGenerator[i]);
		return result;
}

