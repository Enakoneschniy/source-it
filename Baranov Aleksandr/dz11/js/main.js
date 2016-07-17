(function(){
    function bubbleSort(data) {
        var arr = data.slice()
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {
                if(arr[j] > arr[j + 1]) {
                    var tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
        return arr;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function sortHandler(){
        var arr = [];
        var i;
        var arrText = document.createElement('p');
        var sortText = document.createElement('p');
        for(i = 0; i < 10; i++){
            arr[i] = getRandomInt(1, 100);
        }
        arrText.innerHTML = 'Array: ' + arr.join(' ');
        document.getElementById('sort').appendChild(arrText);
        sortText.innerHTML = 'Sorted array: ' + bubbleSort(arr).join(' ');
        document.getElementById('sort').appendChild(sortText);
    }

    function recursiveList () {
        //@todo отобразить все элементы массива массивов в виде вложенных списков соблюдая вложенность
		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
        //
        //Работа с нодами
        // Li
        var arr = [1,2,[3,4,[6,7,8],9],10,11];
        var arrText = document.createElement('p');
        function recursive(data) {
            var newlist = document.createElement("ul"), item;
            for (var i = 0; i < data.length; i++) {
                if (typeof data[i] == "object") 
                    item = recursive(data[i]);
                else {
                    item = document.createElement("li");
                    item.appendChild(document.createTextNode(data[i]))
                }
                newlist.appendChild(item)
            }
            return newlist;
        };

        arrText.innerHTML = 'Nested list: ';
        document.getElementById('list').appendChild(arrText);
        document.getElementById('list').appendChild(recursive(arr));
    }

        function recursiveHeadings () {
            // function recursiveHeadings (data, weight) {
            //@todo отобразить все элементы массива массивов в заголовков разного порядка в зависимости от уровня вложенности
    		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
            var arr = [1,2,[3,4,[6,7,8],9],10,11];
            var fragment = document.createDocumentFragment();
            var arrText = document.createElement('p');
            var h , n = 1;
            function recursive(data) {

                for (var i = 0; i < data.length; i++) {
                  
                 if (typeof data[i] != "object") {
                    h = document.createElement('h' + n);
                    h.appendChild(document.createTextNode(data[i])) 
                    fragment.appendChild(h);
                }
                else {
                    n++;
                    recursive(data[i]);
                    n--;
                }
            } 
            return fragment;
        }
        arrText.innerHTML = 'Headings: ';
        document.getElementById('headings').appendChild(arrText);
        document.getElementById('headings').appendChild(recursive(arr));
    }

    function simpleValidation() {
        //@todo при сабмите формы проверять поля на пустотое значение. 
		//При ошибке подсвечивать красным соответствующее поле.
		//Если оба поля заполнены, вывести сообщение об удачной отправке формы
        // Главное проверить что что то есть не важно что и выделить не прошедшую валидацию
        
        var btn = document.getElementsByTagName('button')[0];
        var input1 = document.getElementsByTagName('input')[0];
        var input2 = document.getElementsByTagName('input')[1];
        var label1 = document.getElementsByTagName('label')[0].innerHTML;
        var label2 = document.getElementsByTagName('label')[1].innerHTML;
        btn.onclick = function(){
            // alert(label1);
            if (((input1.value == "")||(input1.value.trim() == ""))&&((input2.value == "")||(input2.value.trim() == ""))){
                input1.style.background = input2.style.background = 'red';
                alert("Внимание! Поля " + label1 + " и " + label2 + " не заполнены.");
            } 
            else if ((input1.value == "")||(input1.value.trim() == "")){
                input1.style.background = 'red';
                input2.style.background = 'white';
                alert("Внимание! Поле " + label1  + " не заполнено.");
            }
            else if ((input2.value == "")||(input2.value.trim() == "")){
                input2.style.background = 'red';
                input1.style.background = 'white';
                alert("Внимание! Поле " + label2  + " не заполнено.");
            }
            else {
                input1.style.background = input2.style.background = 'white';
                alert("ОК! Форма отправлена.");
            }
        }
    }

	//вызывать функции здесь!
    sortHandler();
    recursiveList ();
    recursiveHeadings ();
    simpleValidation();
})();