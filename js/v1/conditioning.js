$('.data-check').waitUntilExists(function (){
   var dataCheck = $(this).data("test");
    if(dataCheck == ''){
        $(this).remove();
    }
});
