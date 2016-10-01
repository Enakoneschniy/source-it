
function goto(level,button){

	if (typeof (level) == 'number' && level >= 0 && level <= 3 &&
	    typeof (button) == 'string' && button >= 0 && button <= 3 ) {
       return button - level;
	} 
		return 0;
	}

function sum() {
	var sum = 0;
	for (var i = 0; i < arguments.length; i++){
		sum += arguments[i]; 
	}
	return sum;
}
function double(array) {
	var newArr = [];
	for (var i = 0; i < array.length; i++){
		newArr.push(array[i]*2);
	}
	return newArr;
}
function pluck(objs, name) {
	var newArr = [];
	if (Array.isArray(objs)){
		for (var i = 0; i < objs.length; i++) {
			for (var key in objs[i]){
				if (key == name) {
					newArr.push(objs[i][key]);
				}
			}
		}
	} else {
		for (var key in objs) {
			newArr.push(objs[key]);
		}
	}
	return newArr; 
}
