function gotoElevator(){
    //TODO:return a number, how much levels the elevator must go up or down
    // Переменная для замыкания в ней хранится этаж, если задавать только кнопку.
    var floor; 
    return function(level,button){ 
    	var number;
    	if (arguments.length === 2){
    		if ((level < 0) || (level > 3) || 
    			(button < 0) || (button > 3) || 
    			(level === undefined) || (button === undefined) ||
    			(level === button) ||
    			(typeof button === 'object') ||
    			(Array.isArray(level)))
    			{
    				number = 0;
    				console.log(number);
    				return number
    			}
    	floor = +button;	
    	number = button - level;
    	console.log(number);
    	return number;
    	}  
    	if ((level < 0) || (level > 3) || (level === undefined) || (typeof level === 'object'))
	    {
	    	number = 0;
	    	console.log(number);
	    	return number;
		}
		number = level - floor;
		console.log(number);
		return number;
	}		    		 
}

var tour = gotoElevator();
// tour(2, undefined);
// tour(0, '3');
// tour(3, '1');
// tour(3, {a: 1});
// tour([3,4], '1');
// tour(5, '3');
// tour(0, '3');
// tour('2');
tour(2, '3');
tour('0');

//*************************************************************************

function sum() {
    //TODO:return the sum of all arguments given.
    var summ = 0;
    for (var i = 0; i < arguments.length; i++) {
    	summ += arguments[i];
    }
    console.log(summ);
    return summ;
}

sum(2,3,10,45);
//*************************************************************************

function double(array) {
    //TODO: Return a new array with each value twice as large as the corresponding value in the passed in array.
    var doubleArray = [];
    for (var i = 0; i < array.length; i++){
    	doubleArray[i] = array[i] * 2;
    }
    console.log(doubleArray);
    return doubleArray;
}

double([2,4,1,88,35,1000]);
//************************************************************************

function pluck(objs, name) {
    //TODO: Returns an array containing the named property of each object
    var arr = [];
    for (var i = 0; i < objs.length; i++){
    	for (var key in objs[i]) {
    		if (key === name){
    			arr.push(objs[i][key]);
    		}	
    	}
    }
    console.log(arr);
    return arr;
}

pluck([{a: 1}, {a: 2, d: 33}, {r: 2, a: 100000}, {a: '2edw'}, {y: 2}], 'a')