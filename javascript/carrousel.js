document.addEventListener("DOMContentLoaded", function() {
var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 4,
    perMove: 1,
    breakpoints: {
      1200: {
          perPage: 3,
      },
      768: {
          perPage: 3,
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

      // Adiciona evento de clique ao item atual
      item.addEventListener("mouseenter", () => {
          if (data) {
              data.style.display = "block";
              titulo.style.top = "65%";
              console.log("Item clicked");
          }

          
      });

      item.addEventListener("mouseleave", () => {
        if (data) {
            data.style.display = "none";
            titulo.style.top = "70%";
            console.log("Item clicked");
        }

        
    });
  });
}

// Chama a função após o carregamento do DOM
document.addEventListener("DOMContentLoaded", datas);




})