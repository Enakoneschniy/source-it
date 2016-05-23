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

function matrix (size) {
  var matrix = [];
  
  // @todo как генирировать х 0 1

  return matrix;
}

function pascal (size) {
  // @todo

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