const relacionados = document.querySelectorAll(".relacionados-item");
const relacionadosP = document.querySelectorAll(".relacionados-item p");



relacionados.forEach((relacionados, index) => {
    const relacionadosPp = relacionadosP[index];

    relacionados.addEventListener("mouseenter", () => {
        relacionadosPp.style.color = "#F56D91";
    });

    relacionados.addEventListener("mouseleave", () => {
        relacionadosPp.style.color = "";
    });
});