/**
 * Created by kate on 16/05/16.
 */



function buildFun(n){

    var res = [];
    for (var i = 0; i < n; i++) {
        res.push(function () {
            return function () {
                console.log(22);
            }
        }(i))
    }
return res;
}

buildFun(5)[4]();

