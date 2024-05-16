const menu = document.querySelector(".hamburguer");
console.log(menu);

menu.addEventListener("click" ,() =>{

    if (menu.id === "fechado") {
        menu.id = "aberto"
    }else if(menu.id === "aberto"){
        menu.id = "fechado"
    }
})