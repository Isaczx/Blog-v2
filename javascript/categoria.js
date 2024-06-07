const imgs = document.querySelectorAll(".categoriaItem img");
const categoriaItems = document.querySelectorAll(".categoriaItem");

categoriaItems.forEach((categoriaItem, index) => {
            const img = imgs[index];

            categoriaItem.addEventListener("mouseenter", () => {
                img.style.transform = "rotate(15deg)";
            });

            categoriaItem.addEventListener("mouseleave", () => {
                img.style.transform = "rotate(0deg)";
            });
        });

