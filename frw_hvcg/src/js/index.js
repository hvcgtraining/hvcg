$(document).ready(function() {
    $('.scroll-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 600);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() <= 200) {
            $('.scroll-top').css('opacity', 0);
        }
        else {
            $('.scroll-top').css('opacity', 1);
        }
    })
});

// $(".slide-slick").slick({
//     infinite: true,
//     arrows: false,
//     dots: true,
//     arrows: false,
//     slidesToShow: 4,
//     slidesToScroll: 3,
//     speed: 2000,
//     responsive: [
//         {
//             breakpoint: 1000,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// });

$('.slide-slick').owlCarousel({
    loop:true,
    margin: 20,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})