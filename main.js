var multiplicationTableHolder = document.getElementById('multiplication-table');
var matrixHolder = document.getElementById('matrix');
var pascalTriangleHolder = document.getElementById('pascal-triangle');

matrixHolder.innerHTML =  render(matrix(10));
multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
pascalTriangleHolder.innerHTML = render(pascal(10));

function multiplicationTable(size) {
  var table = [];
  var k = 1;
    for(var i = 0; i < size; i++){
      var sizeK = size * k; 
      var tableRow = [];
      for(var j = k; j <= sizeK; j +=k){
        tableRow.push(j);
      }
      table.push(tableRow);
      k++;
    }
  return table;
}

function matrix (size) {
  var matrix = [];
  for(var i = 1; i <= size; i++){
    var matrixRow = [];
    for(var j = 1; j <= size; j++){
      var value;
      if(i === j){
        value = 1;
      } else if(i + j < size + 1 && i < j){
        value = 3;
      } else if(i + j < size + 1 && i > j){
        value = 6;
      } else if(i + j > size + 1 && i > j){
        value = 5;
      } else if(i + j > size + 1 && i < j){
        value = 4;
      } else {
        value = 2;
      }
      matrixRow.push(value);
    }
    matrix.push(matrixRow);
  }
  return matrix;
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



