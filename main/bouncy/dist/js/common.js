;(function ($) {

    //PRELOADER START

    $(document).ready(function() {
        $('#loaderInner').fadeOut();
        $('#loader').delay(900).fadeOut("slow");
    });

    //PRELOADER END

    $( document ).ready(function() {

        // ISOTOPE START

    // init Isotope

        var $grid = $('.grid').isotope({
            itemSelector: '.element-item',
            masonry: {
                columnWidth: 40,
                isFitWidth: true
            }
        });

    // bind filter button click
        $('#filters').on( 'click', 'button', function() {
            var filterValue = $( this ).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

    // change is-checked class on buttons
        $('.button-group').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'button', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');
            });
        });

        // ISOTOPE END

        // SLIDER MODE START

        $('.b-teammate-slider').slick({
            arrows:false,
            dots: true,
            dotsClass: 'dots',
            infinite: true
        });

        $('.b-testimonials-slider').slick({
            arrows:false,
            dots: true,
            dotsClass: 'dots',
            infinite: true,
            autoplay:true,
            autoplaySpeed: 4000
        });

        // SLIDER MODE END

        // SLOW SCROLL START



        $('a[href^="#"]').bind('click.smoothscroll',function (e) {
            e.preventDefault();
            var target = this.hash,
                $target = $(target);

            $('html, body').stop().animate( {
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            } ).css('overflow', 'auto');;
            $('.sandwich-menu').fadeOut(1000);
            $('#sandwich,  #sandwich2').removeClass();
        } );




        // SLOW SCROLL END

        // GOOGLE MAPS START

        var mapDiv = $('#map')[0];
        var infoText = $('.map-info').html();
        var uluru = {lat: 49.5687001, lng: 34.5835126};
        var map = new google.maps.Map(mapDiv, {
            zoom: 16,
            center: uluru
        });

        var image = {
            url: "img/marker.png",
            scaledSize: new google.maps.Size(64, 64)
        };
        var beachMarker = new google.maps.Marker({
            position: uluru,
            map: map,
            icon: image
        });

        google.maps.event.addDomListener(window, 'resize', function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, 'resize');
            map.setCenter(center)
        });

        var infoWindow = new google.maps.InfoWindow({
            content: infoText
        });
        infoWindow.open(map, beachMarker);

        beachMarker.addListener('click', function () {
            infoWindow.open(map, beachMarker);
        });

        // GOOGLE MAPS END

    });

        // MOBILE MENU VISIBLE START

    $('#sandwich, #sandwich2').click(function () {
        $('#sandwich,  #sandwich2').toggleClass("active");
        if($('.sandwich-menu').is(':visible')){
            $('.sandwich-menu').fadeOut(600);
            $('body').css('overflow', 'auto');
            $('.sandwich-menu ul li').removeClass('fadeInUp animated');
            $('.sandwich-menu ul li').addClass('fadeOutDown animated');
        } else {
            $('.sandwich-menu ul li').removeClass('fadeOutDown animated');
            $('.sandwich-menu ul li').addClass('fadeInUp animated');
            $('.sandwich-menu').fadeIn(600);
            $('body').css('overflow', 'hidden');
        }
    });

    $(window).resize(function() {
        if($(window).width() > 768) {
            $('#sandwich,  #sandwich2').removeClass();
            $('.sandwich-menu').css('display', 'none');
            $('body').css('overflow', 'auto');
        }
    });

         // MOBILE MENU VISIBLE END


         // WAYPOINT ANIMATIONS START

         //Animate CSS + WayPoints javaScript Plugin
         //Example: $(".element").animated("zoomInUp", "zoomOutDown");

        $('.b-partition.first').animated('fadeInDown', 'fadeOutUp');
        $('.b-partition.second').animated('fadeInUp', 'fadeOutDown');
        $('.b-partition.third').animated('fadeInUp', 'fadeOutDown');
        $('.b-partition.fourth').animated('fadeInUp', 'fadeOutDown');

        $('.button-group').animated('fadeInUp', 'fadeOutDown');

        $('.header-banner h1').animated('fadeInDown', 'fadeOutUp');
        $('.header-banner .banner-desc').animated('fadeInUp', 'fadeOutDown');

        // WAYPOINT ANIMATIONS END


        // SANDWICH2 IN START

        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();

            $('#sandwich2')['fade' + (scrollTop > 700 ? 'In' : 'Out')](100);

        });

         // SANDWICH2 IN END

         // BTN BACK LIKE VK START

        $(document).ready(function() {

            var $bar = $('.left-controlbar');

            var threshold = 1500; //порог полной видимости кнопки при скроллинге

            $(window)
            /* функция, которая управляет видимостью кнопки "Вверх" в зависимости от положения полос прокрутки */
                .scroll(function() {
                    var new_opacity = ($(window).scrollTop() < threshold) ? $(window).scrollTop() / threshold : 1;
                    new_opacity ? $bar.show() : $bar.hide();
                    $bar.css({opacity: new_opacity});

                })
                .scroll()

        });

         // BTN BACK LIKE VK END


        //E-mail Ajax Send

        $("form.callback").submit(function() { //Change
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function() {
                $(th).find('.success').addClass('active--form').css('display', 'flex').hide().fadeIn();
                setTimeout(function() {
                    $(th).find('.success').removeClass('active--form').fadeOut();
                    th.trigger("reset");
                }, 3000);
            });
            return false;
        });


})(jQuery);