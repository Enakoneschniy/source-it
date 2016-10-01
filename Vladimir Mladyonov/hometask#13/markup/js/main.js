$(function() {
	//Task #1 	Set common height for all DIVs in row.
	var firstRaw = $(".box");
	var secondRaw = $(".block");

	arrangeRow(firstRaw);		
	arrangeRow(secondRaw);

	function arrangeRow(obj) {
		var maxHeight = 0;
		obj.each(function() {
			if ($(this).outerHeight() > maxHeight) {
				maxHeight = $(this).outerHeight();
			}
		})
		obj.css("height", (maxHeight + "px"));
	}

	//Task #2		Marking of each first items in list by red color.
	$("ul li:first-child").css("color", "red");

	//Task #3 	Clear form fields.
	$(".btn-clean").click(function(event) {
		$("input[type=text]").val("");
		$("input[type=password]").val("");
		event.preventDefault();
	})

	//Task #4 	Marking each even item in each lists.
	$("ul:eq(0) li").each(function(j) {
		var txt = "";
		if(j % 2) {
			txt = $(this).text();
			$(this).text((j + 1) + ". " + txt);
		}
	})
	$("ul:eq(1) li").each(function(j) {
		var txt = "";
		if(j % 2) {
			txt = $(this).text();
			$(this).text((j + 1) + ". " + txt);
		}
	})
	$("ul:eq(2) li").each(function(j) {
		var txt = "";
		if(j % 2) {
			txt = $(this).text();
			$(this).text((j + 1) + ". " + txt);
		}
	})
	
	
	//Task #5 	Setting active class.
	$("li").click(function() {
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	})

});