// ************************
//   № 1
// ************************
var heights = [];
$("div.box").each(function(indx){
	heights.push($(this).height());
});
var max = Math.max.apply(null, heights);
$("div.box").height(max);

heights = [];
$("div.block").each(function(indx){
	heights.push($(this).height());
});
max = Math.max.apply(null, heights);
$("div.block").height(max);

// ************************
//   № 2
// ************************
$("ul > li:first-child").css("color", "red");

// ************************
//   № 3
// ************************
$("button.btn-clean").bind("click", function(event){
	$("#form").find("input").not('[type="submit"]').each(function() {
		if($(this).val() != '') $(this).val('')})});

// ************************
//   № 4
// ************************
$(".list").each(function (index, value){
	$(this).find('li:odd').each(function (index, value){
		$(this).prepend($(this).text().slice(-1) + " ");
	});
});

// ************************
//   № 5
// ************************
$("ul").each(function (){
	$(this).each(function(){
		var ul = $(this);
		ul.find("li").on("click",function(){
			ul.find("li").removeClass("active"); 
			$(this).addClass("active"); 
		})
	})
});
