(function () {

    function recursiveList(data) {
        var list = "<ul>";
        for (var i = 0, len = data.length; i < len; i++) {
            list += "<li>";
            if (Array.isArray(data[i])) {
                list += recursiveList(data[i]) + "</ul>";
            } else {
                list += data[i] + "</li>";
            }
        }
        //node.innerHTML = list;
        return list;
    }

    function recursiveList2(data) {
        //@todo отобразить все элементы массива массивов в виде вложенных списков соблюдая вложенность
        var parent = arguments[1] || document.getElementById('list2');
        var nodeUL = document.createElement('ul');
        for (var i = 0, len = data.length; i < len; i++) {
            var nodeLI = document.createElement('li');
            if (Array.isArray(data[i])) {
                recursiveList2(data[i], nodeLI);
            } else {
                nodeLI.innerText = data[i];
            }
            nodeUL.appendChild(nodeLI);
        }
        parent.appendChild(nodeUL);
    }


    function recursiveHeadings(data, weight) {
        //debugger
        var fragment = document.createDocumentFragment();
        //@todo отобразить все элементы массива массивов в заголовков разного порядка в зависимости от уровня вложенности
        for (var i = 0, len = data.length; i < len; i++) {
            if (Array.isArray(data[i])) {
                fragment.appendChild(recursiveHeadings(data[i], weight + 1));
            } else {
                var nodeH = document.createElement('h' + weight);
                nodeH.innerText = data[i];
                fragment.appendChild(nodeH);
            }
        }
        return fragment;
    }


    function simpleValidation(form) {
        //@todo при сабмите формы проверять поля на пустотое значение.\
        //При ошибке подсвечивать красным соответствующее поле.
        //Если оба поля заполнены, вывести сообщение об удачной отправке формы
        var submitButton = document.querySelector('button[type="submit"]');
        var inputs = form.querySelectorAll('input[type="text"]');
        var ERROR_CLASS = 'error';
        var everythingIsValid;

        for (var i = 0, len = inputs.length; i < len; i++) {
            inputs[i].addEventListener('keyup', validate, false);
            inputs[i].addEventListener('blur', validate, false);
            inputs[i].addEventListener('change', validate, false);
        }

        function updateSubmitButtonStatus() {
            everythingIsValid = [].every.call(inputs, function (validStatus) {
                return !validStatus.classList.contains(ERROR_CLASS) && validStatus.value;
            });
            submitButton.disabled = everythingIsValid ? false : true;
        }

        function validate(event) {
            var node = event.target;
            if (!node.value) {
                node.classList.add(ERROR_CLASS);
            } else {
                if (node.classList.contains(ERROR_CLASS)) {
                    node.classList.remove(ERROR_CLASS);
                }
            }
            updateSubmitButtonStatus();
        }

        form.addEventListener('submit', function () {
            if (!everythingIsValid) {
                submitButton.disabled = true;
                event.preventDefault();
            } else {
                alert('Form was send!');
            }
        });
    }


    var list = document.getElementById('list');
    // var list2 = document.getElementById('list2');
    var headings = document.getElementById('headings');
    var form = document.getElementById('form');


    list.innerHTML = recursiveList([1, 2, [3, 4, [6, 7, 8], 9], 10, 11]);
    recursiveList2([1, 2, [3, 4, [6, 7, 8], 9], 10, 11]);
    var node = recursiveHeadings([1, 2, [3, 4, [5, 6], 7], 8, 9], 1);
    headings.appendChild(node);
    simpleValidation(form);
    //вызывать функции здесь!
})();



