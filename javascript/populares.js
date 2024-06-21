const items = document.querySelectorAll(".popular-item");
const ranks = document.querySelectorAll(".classificação");

items.forEach((item, index) => {
    const rank = ranks[index];

    // Quando o mouse entra no item, o rank correspondente fica visível
    item.addEventListener("mouseenter", () => {
        rank.style.display = "block";
    });

    // Quando o mouse sai do item, o rank correspondente fica invisível
    item.addEventListener("mouseleave", () => {
        rank.style.display = "none";
    });
});
