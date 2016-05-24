var multiplicationTableHolder = document.getElementById('multiplication-table');
var matrixHolder = document.getElementById('matrix');
var pascalTriangleHolder = document.getElementById('pascal-triangle');

matrixHolder.innerHTML =  render(matrix(10));
multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
pascalTriangleHolder.innerHTML = render(pascal(10));

function multiplicationTable(size) {
  var table = new Array(size);
  var m;
  for (var i = 0; i < table.length; i++) {
    table[i] = [size];
    m = 2;
    for (var j = 0; j < size; j++) {
      table[i][j] = (i +1) * (m - 1);
      m++;
    }
  }
  return table;
}
//**********************************************
//**********************************************
function matrix(size) {
  var arrMatrix = new Array(size);
  var n = 0;
  var m = arrMatrix.length;
  for (var i = 0; i < arrMatrix.length; i++) {
   arrMatrix[i] = [size];
   var arr = [];
   for (var j = 0; j < size; j++) {
     if (i === j) arr[j] = 1
      else if (i + j === arrMatrix.length - 1) arr[j] = 2;
      else if ((i < 4)&&(n < j)&&(j < m)) arr[j] = 3;
      else if ((j > 5)&&(i < arrMatrix.length)) arr[j] = 4;
      else if ((i > 5)&&(m < j)&&(j < n)) arr[j] = 5;
      else arr[j] = 6;
  }
    arrMatrix[i] = arr;
    n++;
    m--;
}
return arrMatrix;
}
//**********************************************
//*********************************************
function pascal(size) {
  var triangle = [[1]], tier;
  for (var j = 0; j < size-1; j++) {
    tier = [1];
    for (var k = 1; k < triangle[j].length; k++) {
      tier[k] = triangle[j][k] + triangle[j][k-1];
    }
    tier.push(1);
    triangle.push(tier);
  }
  return triangle;
}


function render (array) {
  var rowsQty = array.length;
  var result = [];
  for (var i = 0; i < rowsQty; i++) {
    var row = ['<tr><td>', array[i].join('</td><td>'), '</td></tr>'].join('');
    result.push(row);
  }
  return result.join('');
}
// В итоге сгенерировать двумерный массив 