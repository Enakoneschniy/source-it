$(function(){
    lineHeight(150, '.box');
    lineHeight(200, '.block');
	firstItem('red');
	cleanAll();
	even();
	activeItem();
});

function lineHeight(height, elem){
	$(elem).height(height);
}

function firstItem(elemColor){
	var elem = $('.list li:first-child');
	for(var i = 0; i < elem.length; i++){
		elem[i].style.color = elemColor;
	}
}

function cleanAll(){
	$('.btn-clean').click(function(){
		$("input[type='text']").val('');
		$("input[type='password']").val('');
	})
}

function even(){
	var evenNumber = $('.list li:nth-child(even)');
	for(var i = 0; i < evenNumber.length; i++){
		$(evenNumber[i]).prepend(i + (i + 2) + ' ');
	}
}

function activeItem(){
	$("li").click(function() {
		$(this).closest( 'ul' ).children().removeClass('active');
		$(this).addClass('active');
	});
}




