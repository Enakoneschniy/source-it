function goto(level, button) {
    //TODO:return a number, how much levels the elevator must go up or down
    var levels = [0, 1, 2, 3];
    var normalButton = parseInt(button);

    // Array.includes() -> Harmony (ECMAScript 7)

    /* if(levels.includes(normalButton) && levels.includes(level)){
     return normalButton - level;
     }*/

    if (levels.indexOf(normalButton) != -1 && levels.indexOf(level) != -1) {
        return normalButton - level;
    }
    return 0;
}


function sum() {
    //TODO:return the sum of all arguments given.
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += parseInt(arguments[i]);
    }
    return sum;
}

//only in ES6
function sum1() {

    return [].reduce.call(arguments, function (sum, current) {
        sum = sum || 0;
        return sum + parseInt(current);
    });
    // OR TRY THAT ONE

    /*var sum = 0;
     [].forEach.call(arguments, item => sum += parseInt(item));
     return sum;*/
}


function double(array) {
    //TODO: Return a new array with each value twice as large as the corresponding value in the passed in array.
    return array.map(i=>i * 2);
}


function pluck(objs, name) {
    //TODO: Returns an array containing the named property of each object
    var result = [];
    for (var i = 0; i < objs.length; i++) {
        if (objs[i].hasOwnProperty(name)) {
            result.push(objs[i][name]);
        }
    }
    return result;
}

//TESTING...

console.log('GOTO');

console.log(goto(2, '4'));
console.log(goto(4, '0'));
console.log(goto(3, undefined));
console.log(goto(undefined, '2'));
console.log(goto([], '2'));
console.log(goto(3, {}));


console.log('SUM');

console.log(sum(1, 2, 3))// => 6
console.log(sum(8, 2))// => 10
console.log(sum1(1, 2, 3, 4, 5)) // => 15

console.log('DOUBLE');

console.log(double([1, 2, 10, 57])); //=> should return [2,4,20,114]

console.log('PLUCK');

console.log(pluck([{a: 1}, {a: 2}], 'a')) // -> [1,2]*/
