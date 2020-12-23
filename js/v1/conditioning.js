$('.data-check').waitUntilExists(function (){
   var dataCheck = $(this).data("test");
    if(dataCheck == ''){
        $(this).remove();
    }
});

$('.data-remove').waitUntilExists(function () {
	$('.data-remove:empty').remove();
});
