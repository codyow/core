$('.data-check').waitUntilExists(function (){
   var dataCheck = $(this).data("test");
    if(dataCheck == ''){
        $(this).remove();
    }
});

$('.data-remove').waitUntilExists(function () {
	$('.data-remove:empty').remove();
});

$('.data-message').waitUntilExists(function (){
   var dataCheck = $(this).data("test");
    if(dataCheck != ''){
        $(this).show();
    }
});

$('.data-compare').waitUntilExists(function (){
	var dataCheck = $(this).data("test");
	var dataCompare = $(this).data("compare");
	if(dataCheck != dataCompare){
		$(this).remove();
	}
});
