const menu = document.querySelector(".hamburguer");
const listaMobile = document.querySelector("#conteudo-mobile");
console.log(menu);

menu.addEventListener("click" ,() =>{

    if (menu.id === "fechado") {
        menu.id = "aberto";
        listaMobile.style.display = "flex";
        setTimeout(() => {
            listaMobile.style.opacity = "1";
        }, 25);
    }else{
        menu.id = "fechado";
        listaMobile.style.opacity = "0";
        setTimeout(() => {
            listaMobile.style.display = "none";
        }, 250);
    }
})


window.addEventListener('scroll', function() {
    var menu = document.querySelector('#navegação');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Altere 100 para a posição desejada em que o menu deve se tornar fixo
        menu.classList.add('menu-fixed');
        listaMobile.classList.add('menu-fixedL');
    } else {
        menu.classList.remove('menu-fixed');
        listaMobile.classList.remove('menu-fixedL');
    }
});
