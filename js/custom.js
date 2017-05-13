$(function() {

    // Scroll To Any Block
    $('.js-get-started').on('click', function (e) {
       e.preventDefault();
       var plansOffset = $('#js-plans').offset().top;

       $('html, body').animate({
           scrollTop: plansOffset
       }, 700);
    });

    // Fixed Header when Scroll
    var headerH = $('#js-header').height();
    var navH = $('#js-nav-container').innerHeight();

    $(document).on('scroll', function () {
        var documentScroll = $(this).scrollTop();

        if (documentScroll >= headerH) {
            $('#js-nav-container').addClass('fixed');
            $('#js-header').css({
                'paddingTop': navH
            });
        } else {
            $('#js-nav-container').removeClass('fixed');
            $('#js-header').removeAttr('style');
        }
    });

    // Scroll Item Menu To Page Blocks
    $('#js-nav a').on('click', function (e) {
        e.preventDefault();

       var currentBlock = $(this).attr('href');
       var currentOffset = $(currentBlock).offset().top;

        $('html, body').animate({
            scrollTop: currentOffset - 20
        }, 700);
    });

});
