// Chat Popup
$( ".nav-menu > ul > li:last-child a" ).replaceWith( $( ".chat-pop" ) );

// Replace My Account with Login When Logged Out
if($('.nav-menu').text().indexOf("Log Out") === -1) {
    $("a:contains('My Account')").replaceWith('<a href="https://find-a-template.secure-platform.com/a/account/login">Login</a>');
}
