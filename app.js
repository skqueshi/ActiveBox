$(function() {

        /*fixed header*/
    
    let intro = $("#intro");
    let header = $("#header");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    
    checkScroll(scrollPos, introH)
    
    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        
        checkScroll(scrollPos, introH);
    });
    
    function checkScroll(scrollPos, introH) {
         if( scrollPos > introH ) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }
    
    
    /* Smooth scroll */
    
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        
        nav.removeClass("show");
        
        $("html, body").animate({
           scrollTop: elementOffset - 90
        }, 1000);
    });
    
    
    /*Nav Toggle*/
    navToggle.on("click", function(event) {
        event.preventDefault();
        
        nav.toggleClass("show")
    });
    
});


        /* Reviews */
    let slider = $("#reviewsSlider");
    slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
			
