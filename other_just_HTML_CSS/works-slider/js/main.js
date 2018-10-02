;(function () {

    $(document).ready(function(){
        $('.slider').slick({
            infinite: false,
            slidesToShow: 3,
            variableWidth: true,
            centerMode: true,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            centerPadding: '60px',

    });
    });



})();