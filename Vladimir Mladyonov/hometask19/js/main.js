function goto(level,button) {
  var minLevel = 0;	//set lower floor
  var maxLevel = 3;	//set upper floor
  var motion = 0;

  // Check type of input arguments. 'level' must be number and 'button' - string
  if (typeof(level) == 'number' && typeof(button) == 'string') {
  	var key = Number(button);

  	if (level != key && level <= maxLevel && level >= minLevel && key <= maxLevel && key >= minLevel) {
  		motion = key - level;
  	}

  }
  return motion;
}

function sum() {
	var sum = 0;
	if (arguments.length >= 2) {
		for (var i = 0; i < arguments.length; i++) {
			sum += arguments[i];
		}
		return sum;
	}
	return arguments.length ? arguments[0] : 0;
}

function double(array) {
	var result = [];
	if (Array.isArray(array) && array.length) {
		for (var i = 0; i < array.length; i++) {
			result.push(array[i] * 2);
		}
	}
	return result;
}

function pluck(objs, name) {
	var result = [];
	if (Array.isArray(objs) && objs.length) {
		for (var i = 0; i < objs.length; i++) {
			for (var key in objs[i]) {
				if (key === name) {
					result.push(objs[i][key]);
				}
			}
		}
	}
	return result;
}
