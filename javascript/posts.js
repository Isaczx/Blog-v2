document.addEventListener("DOMContentLoaded", () => {
    const posts = document.querySelectorAll(".post");

    posts.forEach(post => {
        const linkAnimado = post.querySelector(".animated-link");

        post.addEventListener("mouseenter", () => {
            linkAnimado.classList.add("hover");
            linkAnimado.style.color = "#F56D91";
        });

        post.addEventListener("mouseleave", () => {
            linkAnimado.classList.remove("hover");
            linkAnimado.style.color = "";
        });

        post.addEventListener("click", ()=>{
            window.location.href = "pages/receita.html"
        })
    });
});
