$(function () {
    $('.main_slide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });


    $('.pro_slide').slick({
        arrows: false,
        slidesToShow: 4,
    });

    $('.mainProduct .arrows i:nth-child(1)').on('click', function () {
        $('.pro_slide').slick('slickPrev')
    });

    $('.mainProduct .arrows i:nth-child(2)').on('click', function () {
        $('.pro_slide').slick('slickNext')
    });

})