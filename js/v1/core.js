// Chat Popup
$( ".nav-menu > ul > li:last-child a" ).replaceWith( $( ".chat-pop" ) );

// Replace My Account with Login When Logged Out
if($('.nav-menu').text().indexOf("Log Out") === -1) {
    $("a:contains('My Account')").replaceWith('<a href="/a/account/login">Login</a>');
}

// Asc/Desc
$(window).load(function () {
    var $gallerySort = $('.results-sort option');
    if ($gallerySort.length > 0) {
        // it exists so now alter the text
        $gallerySort.each((key, value) => {
            var $value = $(value); // cache your jQuery objects, it makes life easier, faster and cleaner
            $value.text(
                $value.text().replace('ASC', 'A-Z').replace('DESC', 'Z-A')
            );
        });
    }
});

// Wait Til Exist
$.fn.waitUntilExists = function(handler, shouldRunHandlerOnce, isChild) {
	  var found = 'found';
	  var $this = $(this.selector);
	  var $elements = $this.not(function() {
		  return $(this).data(found);
	  }).each(handler).data(found, true);

	  if (!isChild) {
		  (window.waitUntilExists_Intervals = window.waitUntilExists_Intervals || {})[this.selector] =
		  window.setInterval(function() {
			  $this.waitUntilExists(handler, shouldRunHandlerOnce, true);
		  }, 500);
	  } else if (shouldRunHandlerOnce && $elements.length) {
		  window.clearInterval(window.waitUntilExists_Intervals[this.selector]);
	  }

	  return $this;
  }
