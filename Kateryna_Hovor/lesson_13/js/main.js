$(function () {
    sameHeight(".box");
    sameHeight(".block");
    makeItRed(".list");
    cleanInput("input, #form");
    evenLi(".list");
    addActive(".list");
});

function sameHeight(selector) {
    var boxes = $(selector);
    var maxHeight = boxes.map(function () {
        return $(this).height()
    });
    boxes.height(Math.max.apply(this, maxHeight));
}

function makeItRed(selector) {
    var lists = $(selector);
    lists.each(function () {
        $(this).children('li:first').css('color', '#F00');
    })
}

function cleanInput(selector) {
    var inputs = $(selector);
    var button = $('.btn-clean');
    button.click(function () {
        inputs.each(function () {
            if ($(this).attr('type') == 'text' || $(this).attr('type') == 'password') {
                $(this).val('');
            }
        })
    })
}

function evenLi(selector) {
    var lists = $(selector);
    lists.each(function () {
        $(this).children('li:odd').each(function () {
            var value = ($(this).index() + 1) + ' ' + $(this).text().replace(/[^a-z]/g, '');
            $(this).text(value);
        });
    });
}

//on('click', 'li', function ()  with delegation
function addActive(selector) {
    var lists = $(selector);

    lists.on('click', 'li', function () {
        $(this).parent().children('li').removeClass('active');
        $(this).toggleClass('active');
    })
}

/**
 * 1)Высота блоков в одной строке должна быть одинаковой
 * 2)Первому элементу каждого списка назначить цвет текста красный
 * 3)Очистить поля формы от введенных данных по клику на Clean
 * 4)Во все четные элементы списка поставить порядковый номер перед текстом
 * 5)По клику на элемент списка назначать на него класс "active".
 * Одновременно этот класс может быть только на одном элементе в пределах одного списка.
 **/