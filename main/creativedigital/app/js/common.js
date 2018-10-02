$(function() {

    $(document).ready(function() {
        $('img[src$=".svg"]').each(function() {
            var $img = jQuery(this);
            var imgURL = $img.attr('src');
            var attributes = $img.prop("attributes");

            $.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Remove any invalid XML tags
                $svg = $svg.removeAttr('xmlns:a');

                // Loop through IMG attributes and apply on SVG
                $.each(attributes, function() {
                    $svg.attr(this.name, this.value);
                });

                // Replace IMG with SVG
                $img.replaceWith($svg);
            }, 'xml');
        });
    });

    $(document).ready(function() {
        $('.showcase-slider').slick({
            prevArrow: $('.prev-arr'),
            nextArrow: $('.next-arr'),
            infinite: true,
            dots: true,
            dotsClass: 'dots',
            // autoplay:true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        prevArrow: false,
                        nextArrow: false
                    }
                }


            ]
        });
    });

    $(document).ready(function() {
        $('.b-team-slider').slick({
            prevArrow: $('.prev-arr__team'),
            nextArrow: $('.next-arr__team'),
            infinite: true,
            // autoplay:true,
            autoplaySpeed: 1000,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 992,
                    prevArrow: $('.prev-arr__team'),
                    nextArrow: $('.next-arr__team'),
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        prevArrow: false,
                        nextArrow: false,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true
                    }
                },
                {
                    breakpoint: 568,
                    settings: {
                        prevArrow: false,
                        nextArrow: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },

                // {
                //     breakpoint: 768,
                //     settings: {
                //         slidesToShow: 2,
                //         slidesToScroll: 1,
                //         infinite: true
                //     }
                // }

                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    });

    // GOOGLE MAPS START

    $(document).ready(function() {
        var mapDiv = $('#map')[0];
        var infoText = $('.map-info').html();
        var uluru = {lat: 49.5687001, lng: 34.5835126};
        var map = new google.maps.Map(mapDiv, {
            zoom: 16,
            center: uluru,
            fullscreenControl: false
        });

        var image = {
            url: "img/pin.svg",
            scaledSize: new google.maps.Size(46, 53)
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
    });

    // GOOGLE MAPS END

    $("#map_toggler").click(function() {

        $("#map").toggleClass("fullscreen");
        $("body").toggleClass("over");
        $(this).toggleClass('posi');
        $("#nav-icon1").toggleClass("ham-visibility");

    });


    // Check distance to top and display back-to-top.
    $( window ).scroll( function() {
        if ( $( this ).scrollTop() > 800 ) {
            $( '.back-to-top' ).addClass( 'show-back-to-top' );
        } else {
            $( '.back-to-top' ).removeClass( 'show-back-to-top' );
        }
    });

// Click event to scroll to top.
    $( '.back-to-top' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 0 }, 800 );
        return false;
    });


    $(document).ready(function() {
        $('.scroll').bind('click.smoothscroll',function (e) {
            e.preventDefault();
            var target = this.hash,
                $target = $(target);

            $('html, body').stop().animate( {
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            } );
        } );
    } );

    $(".b-move-out").click(function() {
        $(this).toggleClass("get-out");
    });

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





        $('#my-menu').mmenu({

            extensions: ['pagedim-black', {"(min-width: 650px)": ["widescreen"]}, "fx-menu-slide", "fx-panels-slide-up",  "fx-panels-slide-100" ],
            offCanvas: {
                "position": "right"
            },
            navbar: {
                title: '<img class="svg var-icons var-icons__white" src="img/logo.svg" alt="CreativeDesign"/>'
            }

        });


        var api = $('#my-menu').data('mmenu');

        api.bind('open:start', function () {
            $('#nav-icon1').addClass('open');
        }).bind('close:finish', function () {
            $('#nav-icon1').removeClass('open');
        });


        $("#nav-icon1").click(function() {
            api.close();
        });


        $( window ).scroll( function() {
            if ( $( this ).scrollTop() > 800 || $(window).width() < 992) {
                $( '#nav-icon1' ).css('visibility', 'visible');
            } else {
                $( '#nav-icon1' ).css('visibility', 'hidden');
            }
        });

    $(window).resize(function() {
        if($("body").prop("scrollWidth") < 992) {
            $( '#nav-icon1' ).css('visibility', 'visible');
        } else {
            $( '#nav-icon1' ).css('visibility', 'hidden');
        }
    });












});
