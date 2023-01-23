$(document).ready(function() {

    $('#credit').click(function() {
        $('#credit-card').fadeIn();
    });
    $('#mada').click(function() {
        $('#credit-card').fadeOut();
    });
    $('#cash').click(function() {
        $('#credit-card').fadeOut();
    });

    $('#city-select').click(function() {
        $('#cities').toggle();
    });
    $('#country-select').click(function() {
        $('#countries').toggle();
    });

    $('.country-select').click(function() {
        $('.countries').addClass("toggle-active");
    });

    $('.city-select').click(function() {
        $('.cities').addClass("toggle-active");
    });

    $(document).on('click', function(e) {
        if (!$(".country-select").is(e.target) && !$(".country-select").has(e.target).length && $('.countries').hasClass('toggle-active')) {
            $('.countries').hide();
            $('.countries').removeClass("toggle-active");
        }
    });

    $(document).on('click', function(e) {
        if (!$(".city-select").is(e.target) && !$(".city-select").has(e.target).length && $('.cities').hasClass('toggle-active')) {
            $('.cities').hide();
            $('.cities').removeClass("toggle-active");
        }
    });

});