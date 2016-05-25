// замыкания.

function buildFun(n){

    var res = [];
    for (var i = 0; i < n; i++){
        (function(i){
            res.push(function(){
                console.log(i);
            }
            )}
        )(i);
    }
    return res
}

for(var i = 0; i< 5; i++) {
    buildFun(5)[i]();
}