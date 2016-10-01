var multiplicationTableHolder = document.getElementById('multiplication-table');
var matrixHolder = document.getElementById('matrix');
var pascalTriangleHolder = document.getElementById('pascal-triangle');

matrixHolder.innerHTML =  render(matrix(10));
multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
pascalTriangleHolder.innerHTML = render(pascal(10));

function multiplicationTable(size) {
	var table = [];
	if (size && size >= 1) {
		for (var i = 0; i < size; i++) {
			var row = [];
			for (var j = 0; j < size; j++) {
				row.push((i + 1) * (j + 1));
			}
			table.push(row);
		}
	}
	return table;
}

function matrix (size) {
  var matrix = [];
  var row = [];
  var x = size - 1;
  if (size && size >= 1) {
    for (var i = 0; i < size; i++) {
      row = [];
      for (var j = 0; j < size; j++) {
        if (j == i) {                  //build main diagonal 
          row.push(1);
          continue;
        }
        if (x - i == j) {               //build secondary diagonal
          row.push(2);
          continue;
        }
        if ( j > i && (x - i) > j) {
          row.push(3);
          continue;
        }
        if (j > i && (x - i) < j) {
          row.push(4);
          continue;
        }
        if (j < i && (x - i) < j) {
          row.push(5);
          continue;
        }
        if (j < i && (x - i) > j) {
          row.push(6);
        }
      }
      matrix.push(row);
    }
  }
  return matrix;
}

function pascal (size) {
  var triangle = [];
  var row = [];
  if (size && size >= 1) {
    for (var i = 0; i < size; i++) {
      row = [];
      for (var j = 0; j < (i + 1); j++) {
        if (j == 0 || i == 0 || j == i) {
          row.push(1);
          continue;
        }
        row.push((triangle[(i - 1)][j]) + (triangle[(i -1)][(j - 1)]));
      }
      triangle.push(row);
    }
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