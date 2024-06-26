document.addEventListener("DOMContentLoaded", function() {
var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 4,
    perMove: 1,
    breakpoints: {
      2600: {
        perPage: 6,
      },
      1600: {
        perPage: 4,
      },
      1200: {
          perPage: 3,
      },
      768: {
          perPage: 2,
      },
      480: {
          perPage: 1,
      },
    }
  } );
  
  splide.mount();
  datas();
 
var carrousel = document.querySelector(".splide");
var setas = document.querySelector(".splide__arrows");
    
carrousel.addEventListener("mouseenter", () =>{
  setas.style.opacity  = "1";
});

carrousel.addEventListener("mouseleave", () =>{
  setas.style.opacity  = "0";
    

});

    

function datas() {
  // Seleciona todos os itens do carrossel
  var itens = document.querySelectorAll(".carrousel");

  // Itera sobre cada item do carrossel
  itens.forEach(function(item) {
      // Seleciona o elemento .titulo dentro do item atual
      var titulo = item.querySelector(".titulo");
      // Seleciona o elemento #data dentro do item atual
      var data = item.querySelector("#data");
      var borda = item.querySelector(".borda");

      // Adiciona evento de clique ao item atual
      item.addEventListener("mouseenter", () => {
          if (data) {
              data.style.display = "block";
              titulo.style.top = "65%";
              borda.style.width = "97%";
             
              borda.style.opacity = "1";
          }

          
      });

      item.addEventListener("mouseleave", () => {
        if (data) {
            data.style.display = "none";
            titulo.style.top = "70%";

            borda.style.opacity = "0";
            borda.style.width = "95%";
           
          
        }

        
    });
  });
}

// Chama a função após o carregamento do DOM
document.addEventListener("DOMContentLoaded", datas);




})