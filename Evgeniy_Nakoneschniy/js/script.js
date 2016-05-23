(function() {
    'use strict';

    function matrix(size){
        let m = [];

        for(let i = 0; i < size; i++){
            m[i] = [];
            for(let j = 0; j < size; j++){
                if(j > 0 && i > 0){
                    m[i][j] = (i + 1) * (j + 1);
                }else{
                    m[i][j] = i + j + 1;
                }
            }
        }
        return m;
    }

    function showMatrix(dom, matrix){
        let table = document.createElement('table');
        let size = matrix.length;

        for (let i = 0; i < size; i++){
            var tr = document.createElement('tr');
            for(let j = 0; j < size; j++){
                var td = document.createElement('td');
                td.innerHTML = matrix[i][j];
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        dom.appendChild(table);
    }
    let oneTask = document.getElementById('one-task');
    showMatrix(oneTask, matrix(10));

    function matrixTwo(size){
        let m = [];

        for(let i = 0; i < size; i++){
            m[i] = [];
            for(let j = 0; j < size; j++){
                if(i == j){
                    m[i][j] = 1;
                }else if(i + j === size - 1){
                    m[i][j] = 2;
                }else {
                    //над главной диагональю и над побочной диагональю
                    if(i < j && i + j < size - 1){
                        m[i][j] = 3;
                    }

                    //под главной диагональю и под побочной диагональю
                    if(i > j && i + j > size - 1){
                        m[i][j] = 5;
                    }

                    //под главной диагональю и над побочной диагональю
                    if(i > j && i + j < size - 1){
                        m[i][j] = 6;
                    }

                    //над главной диагональю и под побочной диагональю
                    if(i < j && i + j > size - 1){
                        m[i][j] = 4;
                    }
                }
            }
        }

        return m;
    }

    let twoTask = document.getElementById('two-task');
    showMatrix(twoTask, matrixTwo(10));

    function pascalTriangle(size){
        let m = [];
        for(let i = 0; i < size; i++){
            m[i] = [];
            for(let j = 0; j < size; j++){
                if( i == j){
                    m[i][j] = 1;
                }else if(j == 0){
                    m[i][j] = 1;
                }else{
                    if(i > 0 && j > 0){
                        m[i][j] = m[i - 1][j] + m[i - 1][j -1];
                    }else{
                        m[i][j] = 0;
                    }
                }
            }
        }
        return m;
    }

    function showTriangle(dom, matrix){
        let table = document.createElement('table');
        let size = matrix.length;

        for (let i = 0; i < size; i++){
            var tr = document.createElement('tr');
            for(let j = 0; j < size; j++){
                if(matrix[i][j] !== 0) {
                    var td = document.createElement('td');
                    td.innerHTML = matrix[i][j];
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        dom.appendChild(table);
    }

    let threeTask = document.getElementById('three-task');
    showTriangle(threeTask, pascalTriangle(10));

})();



