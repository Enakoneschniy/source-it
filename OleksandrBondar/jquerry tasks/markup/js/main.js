//1.1
/*function setEqualHeight(){
$('.box, .block').css('height', '300px')
}
$(document).ready(function() {
	setEqualHeight();
});*/

//1.2
function setEqualHeight(columns){
var tallestcolumn = 0;
columns.each(
	function(){
		currentHeight = $(this).height();
		if(currentHeight > tallestcolumn){
			tallestcolumn = currentHeight;
		}
	}
	);
columns.height(tallestcolumn);
}
$(document).ready(function() {
	setEqualHeight($(".container > div"));
});

//2
function firstLiColor(firstli) {
	 $('.list li:first-child').css('color', 'red');
}
$(document).ready(function () {
	 firstLiColor($('.list li:first-child'))
});

//3
function cleanForm () {
	 $('.btn-clean').click(function() {
	 	 $('#form')[0].reset();
	 })
}
$(document).ready(function() {
	 cleanForm ()
})

//4
function evenLi() {
	var even = $('.list li:odd')
	for (var i = 0; i < list.length; i++) {
		list[i]
	};
}
$(document).ready(function() {
	 evenLi()
})

//5
function addedClass(actLi) {
	actLi.click(function(e){
		e.preventDefault();
		actLi.removeClass('active');
		$(this).addClass('active');
	})
}
$(document).ready(function(){
	addedClass($('.list li'));
});