
    // Slider Widgets
/*  if ( jQuery('.testimonial-slider').length ) {
        jQuery('.testimonial-slider').each(function() {
            var widgetSlider = jQuery(this),
                widgetSliderContainer = widgetSlider.closest('.testimonial-slider-container');

            widgetSlider.owlCarousel({
                items: 1,
            
                nav: false,
                
                navRewind: false
            });
        });
    }
});
*/
jQuery(document).ready(function($){
    function merge_options(obj1,obj2){
        var obj3 = {};
        for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
        for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
        return obj3;
    }
    var classes = {
        themeClass: 'mtswpt-theme',
        baseClass: 'mtswpt-carousel',
        itemClass: 'mtswpt-item',
        navContainerClass: 'mtswpt-nav',
        itemClass: 'mtswpt-item',
        navClass: '[&#x27;mtswpt-prev&#x27;,&#x27;mtswpt-next&#x27;]',
        controlsClass: 'mtswpt-controls',
        dotClass: 'mtswpt-dot',
        dotsClass: 'mtswpt-dots',
        autoHeightClass: 'mtswpt-height'
    }
    if ($('.testimonial-carousel-grid').length) {
        $('.testimonial-carousel-grid').owlCarousel(merge_options({
            items:2,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        }, classes));
    }

    if ($('.testimonial-carousel-fullwidth').length) {
        $('.testimonial-carousel-fullwidth').owlCarousel(merge_options({
            items:1,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        }, classes));
    }

    if ($('.testimonial-fade-slider').length) {
        $('.testimonial-fade-slider').owlCarousel(merge_options({
            items:1,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            dots:false,
             animateOut: 'fadeOut',
            animateIn: 'fadeIn',
        }, classes));
    }

});

(function ( $ ) {
 
    $.fn.mts_stars_input = function() {
        return this.each(function() {
            var $el = $(this),
                $stars_bg = $el.find('.icon-bg'),   // group of single star elements
                $stars = $el.find('.mts-testimonial-star-input-stars'), // wrapper element
                current_rating = parseInt($stars.parent().data('current')) || 0;

            $stars_bg.hover(function() {
                $stars.css('width', (parseInt($(this).data('num'))-1)*20+'%');
            }, function() {
                $stars.css('width', (current_rating*20)+'%');
            }).click(function(event) {
                current_rating = $(this).data('num');
                $el.find('input').val(current_rating);
            });

        });
    };
 
}( jQuery ));

jQuery(document).ready(function($) {
    $('.mts-testimonial-stars-input').not('.mts-testimonial-stars-readonly').mts_stars_input();
});