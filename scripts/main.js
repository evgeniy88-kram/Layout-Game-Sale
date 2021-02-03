;(function($){
    $(function (){
        // Toggle mobile-menu
        $('header label').on('click', function () {
            $('nav').toggleClass('nav__list');
        });
        //Hide toggle-menu
        $('nav a').on('click', function (){
            $('nav').toggleClass('nav__list');
            $('#hamburger').prop('checked', false);
        });
        //
        //Slick-slider
        // $('.games__container__content').slick({
        //     autoplay:true,
        //     autoplaySpeed: 5000,
        //     arrows:false,
        //     dots: false,
        //     slidesToShow: 4,
        //     slidesToScroll: 1
        // });
        // //
        //smooth scrolling
        $("body").on('click', '[href*="#"]', function(e){
            let fixed_offset = 100;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
            e.preventDefault();
        });
        //
    });
})(jQuery);

