var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 4,
    perMove: 1,
  } );
  
  splide.mount();


var carrousel = document.querySelector(".splide");
var setas = document.querySelector(".splide__arrows");
    
carrousel.addEventListener("mouseenter", () =>{
  setas.style.opacity  = "1";
})

carrousel.addEventListener("mouseleave", () =>{
  setas.style.opacity  = "0";
    

})

    

