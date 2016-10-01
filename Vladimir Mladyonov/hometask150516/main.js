/* Есть функция buildFun, которая возвращает массив состоящий из функций. В нее можно передать один аргумент
который отвечает за длину массива. Т.е. если я передам в функцию 10 - то функция вернет массив из 10 функций.
Ниже эта функция описана. */

// Target function
function buildFun(n){

	var res = [];

	var tempFunc = function(ind) {
		var i = ind;									//Local variable for to store current index
		return function(){
			console.log(i);
		}
	}

	for (var i = 0; i < n; i++){
		res.push(tempFunc(i));
	}
	return res;
}


/*Test expression

for(var i = 0; i< 5; i++) {
  buildFun(5)[i]();
}

*/