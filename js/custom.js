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

    // Show Modal Window
    $('.js-show-modal').on('click', function (e) {
        e.preventDefault();
        var currentModal = $(this).attr('href');
        $('body').append('<div class="overlay" id="js-overlay"></div>').addClass('open-modal');
        $(currentModal).fadeIn(500);

       $('.js-modal-close, #js-overlay').on('click', function (e) {
            e.preventDefault();
            $('body').removeClass('open-modal');
            $(currentModal).fadeOut(500);
            $('#js-overlay').remove();
        });
    });

    /*// FAQ Accordion #1
    $(".js-faq-title").on("click", function(e) {

        e.preventDefault();
        var $this = $(this);

        if( !$this.hasClass("active") ) {
            $(".js-faq-content").slideUp();
            $(".js-faq-title").removeClass("active");
        }

        $this.toggleClass("active");
        $this.next().slideToggle();

    });*/
    // FAQ Accordion #2
    $(".js-faq-title").on("click", function(e) {

        e.preventDefault();
        var $this = $(this);
        var answerId = $this.attr('href');
        if( !$this.hasClass("active") ) {
            $(".js-faq-content").slideUp();
            $(".js-faq-title").removeClass("active");
        }

        $this.toggleClass("active");
        $(answerId).slideToggle();
    });

    // Popup Ticks
    $(".js-popup-hover").hover(function() {

        var $this = $(this),
            popupId = $this.attr("href");

        $(popupId).fadeIn();


    }, function() {

        $(".js-popup").fadeOut();
    });

    // Slick Slider http://kenwheeler.github.io/slick/

    $('#js-testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});
