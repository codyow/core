$('.show-tips').waitUntilExists(function () {
	$(this).click(function () {
		$( ".tips-container" ).fadeToggle( "slow", function() {});
		if ($(this).find('span').text() == "Show Tips") {
			$(this).find('span').text("Hide Tips");
		} else {
			$(this).find('span').text("Show Tips");
		}
	});
});

$(function() {
    var tipcount = $('.conference-note').length;
	if (tipcount === 0) {
	    $(".show-tips").hide();
	}
});
