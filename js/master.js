   $(function () {
       $('[data-toggle="tooltip"]').tooltip();
   });


   $(function () {
       $(document).on('click', 'a.page-scroll', function (event) {
           var $anchor = $(this);
           $('html, body').stop().animate({
               scrollTop: $($anchor.attr('href')).offset().top
           }, 1500, 'easeInOutExpo');
           event.preventDefault();
       });


       $(' #da-thumbs > li ').each(function () {
           $(this).hoverdir();
       });

   });

   (function ($) {
       $(function () {
           var scroll = $(document).scrollTop();
           var headerHeight = $('.page-header').outerHeight();

           $(window).scroll(function () {
               var scrolled = $(document).scrollTop();
               if (scrolled > headerHeight) {
                   $('.page-header').addClass('off-canvas');
               } else {
                   $('.page-header').removeClass('off-canvas');
               }

               if (scrolled > scroll) {
                   $('.page-header').removeClass('fixed');
               } else {
                   $('.page-header').addClass('fixed');
               }
               scroll = $(document).scrollTop();
           });
       });
   })(jQuery);

   window.sr = ScrollReveal();
   sr.reveal('.fromTop', {
       duration: 2000,
       origin: 'top'
   });
   sr.reveal('.fromLeft', {
       duration: 1500,
       origin: 'left',
       distance: '300px',
       viewFactor: 0.2
   });
   sr.reveal('.fromRight', {
       duration: 1500,
       origin: 'right',
       distance: '300px',
       viewFactor: 0.2
   });
   sr.reveal('.fromBot', {
       duration: 2000,
       origin: 'bottom'
   });