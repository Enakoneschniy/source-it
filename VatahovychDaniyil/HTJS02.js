function buildFun(n){

  var res = [];
  for (var i = 0; i < n; i++){
    var resFun = function num() {
       console.log(num.i);
        };
        resFun.i = i;
        res.push(resFun);
        }
    
 
  return res;
}