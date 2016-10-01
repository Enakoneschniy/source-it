/* Task 1.
Function generate n-size array of random integer numbers. */
function arrGenerator(n) {
	if (n < 1 || (typeof n) != "number") {
		window.alert('Wrong size of array!\nThe N must be integer greater than zero');
		return false;
	}else{
		var resArray = [];
		for (var i = 0; i < n; i++) {
			resArray.push(getRandom(100));
		}
		return resArray;
	}
}
// Accessory function which return random number in range (0...base) or 0 if base=0 or it undefined
function getRandom(base) {
	if (base) {
		return Math.floor(Math.random() * (base + 1));
	}
	return 0;
}

/* Task 2.
Extract each n-th members from array */
function arrCount(arr, n) {
	if (!Array.isArray(arr) || arr.length < 1) {
		window.alert('Wrong "arr" parameter!\nIt must be non empty array.');
		return false;
	}
	if ((typeof n) != "number" || n < 1 || n > arr.length) {
		window.alert('Wrong step!\nThe N must be integer greater than zero\nand less or equal than array length.');
		return false;
	}
	var resArray = [];
	for (var i = n - 1; i < arr.length; i += n) {
		resArray.push(arr[i]);
	}
	return resArray;
}

/* Task 3.
Function for modification of object's members */
var preIndex = ""; //Additional variable for storing current index
function changeObj(obj) {
	if ((typeof obj) != "object" || obj == null) {
		console.log('Wrong incoming parameter! Try again.');
		return false;
	}
	
	var index = 0;
	for (var key in obj) {
		++index;
		if (typeof obj[key] != "object") {
			obj[key] = preIndex + index;
		}else{
			if (Array.isArray(obj[key]) || obj[key] == null) continue;
			preIndex = (index + '.');
			changeObj(obj[key]);
		}
	}
	if (preIndex.length >= 2) {
		preIndex = preIndex.substr(0, (preIndex.length - 2));
	}
	return true;
}