;(function ($) {

    $(document).ready(function(){

        // SLICK SLIDER (with custom progressing bar) START

        var time = 5;
        var $bar,
            $slick,
            isPause,
            tick,
            percentTime;

        $slick = $('.header-slider');
        $slick.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            speed: 2000,
            prevArrow: $('.prev'),
            nextArrow: $('.next')
         });

        $bar = $('.slider-progress .progress');

        $('.b-slider').on({
            mouseenter: function() {
                isPause = true;
            },
            mouseleave: function() {
                isPause = false;
            }
        });

        function startProgressbar() {
            resetProgressbar();
            percentTime = 0;
            isPause = false;
            tick = setInterval(interval, 10);
        }

        function interval() {
            if(isPause === false) {
                percentTime += 1 / (time+0.1);
                $bar.css({
                    width: percentTime+"%"
                });
                if(percentTime >= 100)
                {
                    $slick.slick('slickNext');
                    startProgressbar();
                }
            }
        }

        function resetProgressbar() {
            $bar.css({
                width: 0+'%'
            });
            clearTimeout(tick);
        }

        startProgressbar();

        // SLICK SLIDER ENDS

        // ISOTOPE START

        // init Isotope

        // init Isotope

            var $container = $('.grid.popup-gallery').isotope({
                itemSelector: '.element-item',
                masonry: {
                    isFitWidth: true
                }
            });


        // bind filter button click
        $('#filters').on( 'click', '.button-msn', function() {
            var filterValue = $( this ).attr('data-filter');
            $container.isotope({ filter: filterValue });
        });

        // change is-checked class on buttons
        $('.button-group').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', '.button-msn', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');
            });
        });

        //****************************
        // Isotope Load more button
        //****************************
        var initShow = 3; //number of items loaded on init & onclick load more button
        var counter = initShow; //counter for load more button
        var iso = $container.data('isotope'); // get Isotope instance

        loadMore(initShow); //execute function onload

        function loadMore(toShow) {
            $container.find(".hidden").removeClass("hidden");

            var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
                return item.element;
            });
            $(hiddenElems).addClass('hidden');
            $container.isotope('layout');

            //when no more to load, hide show more button
            if (hiddenElems.length === 0) {
                jQuery("#load-more").hide();
            } else {
                jQuery("#load-more").show();
            }

        }

        //when load more button clicked
        $("#load-more").click(function() {
            if ($('#filters').data('clicked')) {
                //when filter button clicked, set initial value for counter
                counter = initShow;
                $('#filters').data('clicked', false);
            } else {
                counter = counter;
            };

            counter = counter + initShow;

            loadMore(counter);
        });

        //when filter button clicked
        $("#filters").click(function() {
            $(this).data('clicked', true);

            loadMore(initShow);
        });


        // ISOTOPE END

    });



        // AUTO HEIGHT S

    $(window).on('resize', function() {

        var headerHeight = $('header').height();
        var sectionHeight = $('.b-header').height();

        $('.b-slider').css({'height': sectionHeight - headerHeight});

    }).trigger('resize');

        // AUTO HEIGHT E

    var hoverElem = $('.works-description');

    hoverElem.hover(function () {
        $('.work-line').addClass('slideInRight animated')
    });

    hoverElem.mouseleave(function () {
        $('.work-line').removeClass('slideInRight animated')
    });


    $('.element-item').each(function (i) {
        $(this).find('button').attr('href', '#work-' + i);
        $(this).find('.mfp-hide.white-popup').attr('id', 'work-' + i)
    });

    $(document).ready(function() {
        $('.popup-gallery').magnificPopup({
            delegate: 'button',
            type: 'inline',
            tLoading: 'Loading image #%curr%...',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            }
        });
    });




    var getSatisfiedClients = $(".satisfied-clients").attr( "data-used");


    var getCompletedProjects = $(".completed-projects").attr( "data-used");


    var getLikes = $(".likes").attr( "data-used");


    var getStartUps = $(".start-ups").attr( "data-used");




    $('.b-testimonials-slider').slick({
        arrows:false,
        dots: true,
        dotsClass: 'dots',
        infinite: true,
        autoplay:true,
        autoplaySpeed: 4000,
        slidesToShow: 1
    });





    $('.blog-item').each(function (i) {
        $(this).find('.b-pop').attr('href', '#blog-' + i);
        $(this).find('.mfp-hide.white-popup.white-popup__blog').attr('id', 'blog-' + i)
    });

    $(document).ready(function() {
        $('.b-pop').magnificPopup({
            type: 'inline'
        });
    });



    $('.blog-posts-slider').slick({
        arrows:false,
        dots: true,
        dotsClass: 'dots',
        infinite: true,
        // autoplay:true,
        autoplaySpeed: 4000,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



    $('.support-slider').slick({
        prevArrow: $('.prev-arr'),
        nextArrow: $('.next-arr'),
        infinite: true,
        autoplay:true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            }

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    // SLOW SCROLL START




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


    // SLOW SCROLL END

    //PRELOADER START

    $(document).ready(function() {
        $('#loaderInner').fadeOut(3000);
        $('#loader').delay(3000).fadeOut("slow");
    });

    //PRELOADER END


    // WAYPOINT ANIMATIONS START

    //Animate CSS + WayPoints javaScript Plugin
    //Example: $(".element").animated("zoomInUp", "zoomOutDown");
    $(document).ready(function() {
        $(".bg-wrapper.leftIn").animated("fadeInLeftBig", "fadeOutLeftBig");
        $(".bg-wrapper.rightIn").animated("fadeInRightBig", "fadeOutRightBig");
        $(".b-stuff .b-chapter").animated("fadeInDown", "fadeOutUp");
        $(".b-options .col-md-8").animated("zoomInLeft", "zoomOut");
    });






    // WAYPOINT ANIMATIONS END

    $(document).ready(function() {
        var sticky = new Waypoint.Sticky({
            element: $('.bottom-header')[0]
        });
    });


    $(document).ready(function() {
        $('#gauge-wrapper').viewportChecker({
            callbackFunction: function(elem, action){
                setTimeout(function(){
                    var satisfiedClients = $('#satisfied-clients');
                    satisfiedClients.html(getSatisfiedClients);
                }, 1000);
                setTimeout(function (){
                    var countOfStartUps = $('#start-ups');
                    countOfStartUps.html(getStartUps);
                }, 1000);
                setTimeout(function(){
                    var completedProjects = $('#completed-projects');
                    completedProjects.html(getCompletedProjects);
                }, 1000);
                setTimeout(function(){
                    var countOfLikes = $('#likes');
                    countOfLikes.html(getLikes);
                }, 1000);
                setTimeout(function(){
                    $(".GaugeMeter").gaugeMeter();
                }, 500);
            }
        });
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













})(jQuery);