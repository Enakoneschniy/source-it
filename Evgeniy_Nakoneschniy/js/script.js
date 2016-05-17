'use strict';

function buildFunc(n){
    let arFunctions = [];
    var makeFunc = function(index){
        return function (){
            console.log(index);
        };
    };

    for (let i = 0; i < n; i++){
      arFunctions.push(makeFunc(i));
    }

    return arFunctions;
}

let n = 10;
let arFunc = buildFunc(n);

for(let i = 0; i < n; i++){
    arFunc[i]();
}


