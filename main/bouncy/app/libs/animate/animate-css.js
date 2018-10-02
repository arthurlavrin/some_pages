//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp", "zoomOutDown");



;(function ($) {


    $.fn.animated = function(inEffect, outEffect) {
        var jQueryObject = $(this);

        jQueryObject.css("opacity", "0").addClass("animated");


        jQueryObject.waypoint(function(direction) {
            if (direction === "down") {
                jQueryObject.removeClass(outEffect).addClass(inEffect).css("opacity", "1");
            } else {
                jQueryObject.removeClass(inEffect).addClass(outEffect).css("opacity", "1");
            };
        }, {
            offset: "80%"
        });

        jQueryObject.waypoint(function(direction) {
            if (direction === "down") {
                jQueryObject.removeClass(inEffect).addClass(outEffect).css("opacity", "1");
            } else {
                jQueryObject.removeClass(outEffect).addClass(inEffect).css("opacity", "1");
            };
        }, {
            offset: -$(window).height()
        });
    };

}(jQuery));