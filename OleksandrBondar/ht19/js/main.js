//1
function goto(level,button){
    if (typeof (level) !== 'number') {
    	return 0
    } else if (typeof (button) !== 'string') {
    	return 0
    } else if (level >= 0 && level <= 3 && button >=0 && button <=3) {
    	return button - level
    } else {
    	return 0
    }
}
goto (2, 3)

//2
function sum() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
    	result = result + arguments[i]
    };
    return result;
}
sum (6, 12, 3)

//3
function double() {
    var someNumbers = [1,2,10,57];
    for (var i = 0; i < someNumbers.length; i++) {
    	console.log(someNumbers[i]*2)
    };
}
double()

//4
function pluck(objs, name) {
    var objs = [{a:1}, {a:2}];
    for (var i = 0; i < objs.length; i++) {
    	console.log(objs[i].a)
    };
}
pluck([{a:1}, {a:2}], 'a')