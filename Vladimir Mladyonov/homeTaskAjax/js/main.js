$(function(){
	$('.ajax-block').on('click', 'a', function(e){
		e.preventDefault();
		var dataType = $(this).attr('class');

    //xhrCall(dataType);
    ajaxCall(dataType);
  })
});

function ajaxCall(item){
	var fileName = '';
	switch (item) {
		case 'list':
		fileName = 'list.html';
		break;
		case 'table':
		fileName = 'table.xml';
		break;
		case 'text':
		fileName = 'text.txt';
		break;
		case 'error':
		fileName = 'asdfasdf.txt';
		break;	
		default:
		fileName = 'asdfasdf.txt';
	}
	$.ajax({
		url: "templates/" + fileName,
		context: $('.ajax-block'),
		dataType: 'html',
		beforeSend: function( xhr ) {
			alert('Все еще не отправлено')
		},
		statusCode: {
			404: function() {
				alert( "page not found" );
			}
		},
		success: function(data){
			$('#'+item).append(data);
		}
	});
  /*.done(function( data ) {
      $('#'+item).append(data); 
    });*/
  }

  function ajaxSend(){
  	var dataId = $('.ajax-block > div > div').attr("id");
  	var request = $.ajax({
  		url: "script.php",
  		method: "POST",
  		data: { id : dataId },
  		dataType: "html"
  	});
  	request.done(function( msg ) {
  		$( "#log" ).html( msg );
  	});
  	request.fail(function( jqXHR, textStatus ) {
  		alert( "Request failed: " + textStatus );
  	});
  }

  function xhrCall(item) {
  	var xhr,
  	data,
  	element = document.getElementById(item);
  	if (window.XMLHttpRequest) {
  		xhr = new XMLHttpRequest();
  	} else if (window.ActiveXObject) {
  		xhr = new ActiveXObject("Microsoft.XMLHTTP");
  	}

  	if (item === 'list') {
  		xhr.open('GET', "templates/list.html", true);
  		xhr.send(null);
  	}
  	if (item === 'table') {
  		xhr.open('GET', "templates/table.xml", true);
  		xhr.send(null);
  	}
  	if (item === 'text') {
  		xhr.open('GET', "templates/text.txt", true);
  		xhr.send(null);
  	}
  	if (item === 'error') {
  		xhr.open('GET', "templates/asdfasdf.txt", true);
  		xhr.send(null);
  	}

  	xhr.onreadystatechange = function() {
  		if(xhr.readyState == 4) {
  			if (xhr.status == 200) {
  				element.innerHTML = xhr.response;
  			} else {
  				document.getElementById('error').innerHTML = "Error code " + xhr.status;
  			}
  		}
  	};
  }