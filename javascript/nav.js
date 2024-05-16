const menu = document.querySelector(".hamburguer");
const listaMobile = document.querySelector("#conteudo-mobile");
console.log(menu);

menu.addEventListener("click" ,() =>{

    if (menu.id === "fechado") {
        menu.id = "aberto";
        listaMobile.style.display = "flex";
    }else if(menu.id === "aberto"){
        menu.id = "fechado";
        listaMobile.style.display = "none";
    }
})


window.addEventListener('scroll', function() {
    var menu = document.querySelector('#navegação');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Altere 100 para a posição desejada em que o menu deve se tornar fixo
        menu.classList.add('menu-fixed');
    } else {
        menu.classList.remove('menu-fixed');
    }
});
