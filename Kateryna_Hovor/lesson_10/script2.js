/**
 * Created by kate on 22/05/16.
 */

//https://learn.javascript.ru/closures-usage#сумма-через-замыкание
//Сумма через замыкание

//1) sum(a)(b);
function sum(a) {
    this.a = a;
    return function (b) {
        return this.a+b;
    }
}

//2)sum(a)(b)(c) object;
function sum2(a){
    if(!!!sum2.rez)sum.rez= 0;
    sum2.rez+=a;
    console.log(sum.rez)
    return sum2;
}

//3 sum(a)(b)(c)...closure

function sum3(x) {
    debugger
    var  res = x;
    return function a(b){
        res += b;
       // console.log(summa);
        return a;
    };

};


//3) Функция - строковый буфер

function makeBuffer() {
    debugger
    "use strict";
    var output = '';
     function buffer(str) {
       return arguments.length==0?output : output+=str;
    }

    buffer.clean = function () {
        output='';
    }

    return buffer;
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
alert( buffer() ); // Замыкания Использовать Нужно!
buffer.clean();

alert( buffer() ); // ""

// получить текущее значение


