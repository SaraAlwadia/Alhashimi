$(document).ready(function() {

    $('#mail-btn').on('click', function(e) {
        $('#phone-btn').removeClass("active-btn");
        $('#mail-btn').addClass("active-btn");
        $('#email-login').fadeIn();
        $('#phone-login').fadeOut();
    });


    $('#phone-btn').on('click', function(e) {
        $('#phone-btn').addClass("active-btn");
        $('#mail-btn').removeClass("active-btn");
        $('#email-login').fadeOut();
        $('#phone-login').fadeIn();
    });
});
