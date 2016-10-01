/**
 * Created by kate on 07/05/16.
 */

/**
 * 1. Написать фунцкию которая возвращает массив из сгенерированных значений,
 * в функцию передается параметр отвечающий за количество элементов
 * a)Что бы вернуть значение в конце функции надо использоать 'return что-то'
 * б)Для генерации чисел использовать генератор случайных чисел,
 * его надо писать самим, за основу можно взять Math.random
 **/

function arrGenerator(n) {
    var result = [];
    for (var i = 0; i < n; i++) {
        result.push(Math.floor(Math.random() * (100)))
    }
    return result;
}

console.log(arrGenerator(5));


/**
 * 2. Написать функцию, в которую передаеся массив и шаг, который указывает какие элемента массива вывести,
 * в итоге должен полуится новый массив с выведенными значениями в зависимости от указанного шага.
 * К примеру n - то шаг, если шаг равен 2 то надо вывести каждый второй элемент,
 * если шаг равен 1 - то получится тот же самый массив,
 * если шаг равен 3 - то каждый третий элемент и т.д.
 * Соотвесвенно шаг всегда должен быть больше 1, это надо учесть в опиании функции.
 **/


var myArr = [1, 'text', 42, '23', 85];

function arrCount(arr, n) {
    var result = [];
    if (n <= 0) {
        alert("Wrong step");
        return;
    }
    for (var i = 1; i < arr.length; i++) {
        if (i % n == 0)result.push(arr[i - 1]);
    }
    return result;
}


console.log(arrCount(myArr, 2));


/**
 * 3*. Написать функцию, которая получает объект, и если клю хранит простое значение
 * - в каждый ключ поставить значение равное его порядковому номеру,
 * массивы не меняем вообще, а если в значении другой объект - сам объект не заменяем,
 * но внутри него значения так же меняются, но только
 * ставится в начале номер порядковый из первого объекта. К примеру мы идем по объекту,
 * это четвертый ключ, но внутри объект из трех пар ключ-значение,
 * внутри мы получим: 4.1, 4.2, 4.3
 */
var obj = {
    name: "Brandon",
    pass: "arts124",
    group: {
        id: "BGroup",
        position: "BA",
        location: {
            state: "SC",
            city: "MB",
            index: "5123"
        }

    },

    info: {
        sex: "male",
        age: 44,
        married: true
    },

    from: "August 2010"
};


function changeObj(obj) {
    var i = 1;
    for (var key in obj) {
        if (Array.isArray(obj[key])){
          break;
        } else if (typeof (obj[key]) == 'object') {
            toNumeric(i, obj[key]);
        } else {
            obj[key] = "" + i;
        }
        i++;
    }
    
    function toNumeric(index, obj) {
        var j = 1;
        for (var key in obj) {
            if (typeof (obj[key]) == 'object') {
                toNumeric(i + "." + j, obj[key]);
            } else {
                obj[key] = index + "." + j;
                j++;
            }
        }
    }
}


changeObj(obj);
console.log(obj);
