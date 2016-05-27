function buildFun(n) {

  
  var res = [];
  
  for (var j = 0; j < n; j++) {
    
    res.push(function() {
      
      console.log(i);
    
    })
  
  }
  
  return res

}



for (var i = 0; i < 5; i++) {
  
  buildFun(5)[i]();

}
