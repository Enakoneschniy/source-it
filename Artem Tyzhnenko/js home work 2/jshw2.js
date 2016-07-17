<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
var myArr = [1, 'text', 42, '23', 85];
var n=0;

function arrCount(myArr, n) {
	var res=[];
	var x;
		debugger
		if(n===0){
			console.log("Wrong step"); 
	}
			for (var i=n-1; i<5; i+=n){
				 if (n==1){
			x = myArr[i];
			res.push(x);
		}else if (n==2){
			x = myArr[i];
			res.push(x);
		}
	}
	return res;	
}
arrCount(myArr, n);
</script>
</body>
</html>