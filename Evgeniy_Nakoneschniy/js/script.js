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

for(let i = 0; i < 5; i++){
    buildFunc(5)[i]();
}


