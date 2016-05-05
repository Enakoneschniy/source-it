
    'use strict';
    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function arrGenerator(n){
        let arResult = [];
        for (let i = 0; i < n; i++){
            arResult[i] = rand(-100, 100);
        }
        return arResult;
    }

    function arrCount(arr, n){
        if (n < 1){
            return false;
        }else if(n == 1){
            return arr;
        }
        var arResult = [];
        for(let i = 0; i < arr.length; i++){
            if(i % n === 0){
                arResult.push(arr[i]);
            }
        }
        return arResult.length > 0 ? arResult : false;

    }

    var myObj = {
        a: 2,
        b: 'text',
        c: '42',
        innerObj: {
            ia: 3,
            ib: 4,
            ic: 'test',
            foo:{
                q: "sdsd",
                w: 1,
                e: 444
            }
        },
        testArr: [1,3,'text']
    };

    function changeObj(object) {
        let iterator = arguments[1] === undefined ? 1 : arguments[1] + 0.1;
        iterator = +iterator.toFixed(1);
        let increment = arguments[2] === undefined ? 1 : +arguments[2];
        console.log(iterator);
        for(let prop in object){
            if(typeof object[prop] !== 'object') {
                object[prop] = iterator;
            }else if(object[prop] !== 'function' && !Array.isArray(object[prop])){
                changeObj(object[prop], iterator, 0.1);
            }
            iterator += +increment.toFixed(1);
            iterator = +iterator.toFixed(1);
        }
        return object;
    }


