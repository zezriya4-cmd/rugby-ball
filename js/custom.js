$('.banner-section .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    items:1,
    autoplayTimeout:3000,
    animateIn: 'animate__fadeIn',
    animateOut: 'animate__fadeOut',
  
})



        document.addEventListener(
                "DOMContentLoaded", () => {
                    new Mmenu( "nav#menu", {
                       "offCanvas": {
                          "position": "right-front"
                       },
                       "theme": "light"
                    });
                }
            );

      

