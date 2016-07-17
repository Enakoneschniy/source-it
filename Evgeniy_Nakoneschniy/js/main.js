$(function(){
	//first task
	$.fn.equalHeigth = function(){
		var blocks = $(this);
		var maxHeight = blocks.eq(0).height();

		blocks.each(function(){
			maxHeight = ($(this).height() > maxHeight) ? $(this).height() : maxHeight; 
		});

		blocks.height(maxHeight);
	};

	$('.box').equalHeigth();

	$('.block').equalHeigth();

	//second task
	$('.list').each(function(){
		
		$(this).find('li:first').css('color', 'red');
	});

	//third task
	$('body').on('click', '.btn-clean', function(e){
		e.preventDefault();
		$(this).parents('form').trigger('reset');
	});

	//fourth task
	$('.list').each(function(){
		
		$(this).find('li').each(function (index, value) {
			var str = $(value).html();
			if((index + 1) % 2 == 0){
				$(value).html(str.replace(/([a-z ]*) ([0-9]+)/i, '$2 $1'));
			}
		});
	});

	//fifth task	
	$('body').on('click', '.list li', function(){
		$(this).removeClass('active').addClass('active').siblings().removeClass('active');
	});
});
