<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
var res = [];
var rand;
var n = 5;
function arrGenerator(n){
	debugger
	
	for (var i=0; i<n; i++){
		rand=Math.floor(Math.random()*10);
		res.push(rand);
	  	}
	return res;
}
arrGenerator(n);
</script>
</body>
</html>