$('.owl-carousel').owlCarousel({
    loop:true, /* loop infinito */
    margin:10, /* margem entre um cartaz e o outro */
    nav:true, /* para navegar */
    responsive:{
        0:{
            items:1
        }, /* quando a tela tiver quase 0px ficam mais de 1 item por vez */
        600:{
            items:3
        }, /* quando a tela tiver mais de 600px ficam mais de 3 itens */
        1000:{
            items:5
        } /* quando a tela tiver mais de 1000px ficam mais de 5 itens */
    } /* layout responsivo */
})