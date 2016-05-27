function arrGenerator(n) {
var arr = [];
for (var i = 0; i < n; i++)
	arr.push(Math.floor(Math.random() * 100));
return arr;
}

arrGenerator(11);