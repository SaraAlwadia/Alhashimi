$(document).ready(function() {

    // Add 1 or minus 1 from counter
    $('.minus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('#qnt');
        var value = parseInt($input.val());

        if (value > 1) {
            value = value - 1;
            $(this).parent().removeClass('min-counter');
        } else {
            value = 1
            $(this).parent().addClass('min-counter');
            $(this).addClass('min-btn');  
        }
        $input.val(value);
        // if (value == 1) {
        //     $(this).parent().addClass('min-counter');
        //     $(this).addClass('min-btn');            
        // } else {
        //     $(this).parent().removeClass('min-counter');
        // }
    });

        $('.parshae').on('click', function(e) {
            e.preventDefault();
            $(this).parent().parent().addClass('active-pur');
        });
        
    /******************************************************************************/
        $('.minus-btn').click(function() {
            if($(this).hasClass('min-btn')) {
                $(this).closest('.item').removeClass('active-pur');
                $(this).removeClass('min-btn');
            }
        });
    /******************************************************************************/

    $('.plus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('#qnt');
        var value = parseInt($input.val());
        $(this).parent().removeClass('min-counter');
        $('.minus-btn').removeClass('min-btn');

        if (value < 100) {
            value = value + 1;
        } else {
            value = 100;
        }
        $input.val(value);

        $input.val(value);
        // document.getElementById("qnt").style.transform = translateY("-20px");
    });

    $('#display-more').on('click', function(e) {
        $('.less-rmve').removeClass("less");
        $('#display-more').addClass("less");
    });

    $('#display-less').on('click', function(e) {
        $('.less-rmve').addClass("less");
        $('#display-more').removeClass("less");
    });

    var MianImg = document.getElementById("main-img");
    var smallImg = document.getElementsByClassName("small-img");

    smallImg[0].onclick = function() {
        MianImg.src = smallImg[0].src;
    }
    smallImg[1].onclick = function() {
        MianImg.src = smallImg[1].src;
    }
    smallImg[2].onclick = function() {
        MianImg.src = smallImg[2].src;
    }
    smallImg[3].onclick = function() {
        MianImg.src = smallImg[3].src;
    }
    });


    $('.del-package').on('click', function() {
        $(this).parent().remove();
    });

    $('#submit-qty').on('click', function() {
        $('#pop-cart').show();
        $(this).hide();
        $('#choosen').show();
        $('.package-contents').show();
        $('.video-banner').show();
    });
let button = document.getElementById('submit-qty');
let div = document.getElementById('pop-cart');

button.addEventListener('click' , function(){
    div.style.bottom = '0px';
})