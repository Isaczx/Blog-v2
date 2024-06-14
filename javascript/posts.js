document.addEventListener("DOMContentLoaded", () => {
    const posts = document.querySelectorAll(".post");

    posts.forEach(post => {
        const linkAnimado = post.querySelector(".animated-link");

        post.addEventListener("mouseenter", () => {
            linkAnimado.classList.add("hover");
            linkAnimado.style.color = "red";
        });

        post.addEventListener("mouseleave", () => {
            linkAnimado.classList.remove("hover");
            linkAnimado.style.color = "";
        });
    });
});
