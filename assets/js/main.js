     
    // Carousel Slier
    $(".carousel-active").owlCarousel({
        items:5,
        margin:30,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive: {
        0: {
            items: 3
        },
        600: {
            items: 4
        },
        800: {
            items: 5
        },
        1000: {
            items: 5
        }
    }
    }); 

    $(".carousel-slider").owlCarousel({
        items:2,
        margin:30,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        800: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
    });

    $(".carousel-client").owlCarousel({
        items:1,
        margin:0,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items:1 
        }
    }
    });

      
     // wow
    new WOW().init();

    //one pagenave js
 $('#nav').onePageNav({
    filter: ':not(.external)'
});

$(function(){
        $('#nav').slicknav();
    });

jQuery(window).load(function () {

        /* Sticky Header */
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 20) {
                $('.header-fixed').addClass("sticky");
            } else {
                $('.header-fixed').removeClass("sticky");
            }
        });
        
        /* Preloader */
        $(".preloader").fadeOut()
    });

$(document).ready(function() {
  $('.video').magnificPopup({type:'video'});
});



