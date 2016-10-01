//1
function setEqualHeight(columns){
	var maxHeight = 0;
	columns.each(
		function(){
			currentHeight = $(this).height();
			if (currentHeight > maxHeight) {
				maxHeight = currentHeight;
			}
		});
	columns.height(maxHeight);
}
$(document).ready(function(){
	setEqualHeight($('.container div'));
});
//2
function setFirstLiColor(firstLi){
	firstLi.css('color', 'red');
}
$(document).ready(function(){
	setFirstLiColor($('.list li:first-child'));;
});
//3
function cleanMold() {
	$('.btn-clean').on('click', function(){
		$(this).closest('form')[0].reset();
	});
}
$(document).ready(function(){
	cleanMold();
});
//4
function addEven(ul){
	var addNum;
	var evenLi = $( "ul li:nth-child(even)");
	for (var i = 0; i < evenLi.length; i++){
		addNum = $(evenLi[i]).html().charAt(10);
		$(evenLi[i]).prepend(addNum);
	}
}
$(document).ready(function(){
	addEven($('.list'));
});
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