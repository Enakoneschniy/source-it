
    'use strict';
    /**
     *
     * @param min
     * @param max
     * @returns {*}
     */
    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     *
     * @param n
     * @returns {Array}
     */
    function arrGenerator(n){
        let arResult = [];
        for (let i = 0; i < n; i++){
            arResult.push(rand(-100, 100));
        }
        return arResult;
    }

    /**
     *
     * @param arr - {Array} - input array
     * @param n - {Number} - iterator
     * @returns {Array} or {false}
     */
    function arrCount(arr, n){
        if (n < 1){
            return false;
        }else if(n == 1){
            return arr;
        }
        var arResult = [];
        for(let i = n; i < arr.length; i += n){
                arResult.push(arr[i]);
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
            ic: 'test'
        },
        testArr: [1,3,'text']
    };

    /**
     *
     * @param object
     * @returns {Object}
     */
    var changeObj = function rec(object) {
        let iterator = arguments[1] || 1;
        let separator = arguments[2] || "";
        let flag = arguments[2];
        let it = 1;
        for(let prop in object){
            if(typeof object[prop] !== 'object' && typeof object[prop] !== 'function'){
                object[prop] = flag ? iterator + separator + it  : iterator.toString();
            }else if(typeof object[prop] === 'object' && !Array.isArray(object[prop])){
                rec(object[prop], iterator, '.', true);
            }
            iterator += flag ? 0 : 1;
            it += flag ? 1 : 0;
        }
        return object;
    };

