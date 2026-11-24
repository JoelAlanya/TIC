document.addEventListener("DOMContentLoaded", () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const elementos = document.querySelectorAll(
        "body > :not(script):not(style):not(link)"
    );

    elementos.forEach((elemento, indice) => {
        elemento.animate(
            [
                { opacity: 0, translate: "0 60px" },
                { opacity: 1, translate: "0 0" }
            ],
            {
                duration: 800,
                delay: indice * 100,
                easing: "ease-out",
                fill: "backwards"
            }
        );
    });

});
