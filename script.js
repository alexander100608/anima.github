// Espera a que el documento cargue completamente
document.addEventListener("DOMContentLoaded", () => {
    const liquidBox = document.querySelector(".box-liquid");
    const bounceBox = document.querySelector(".box-bounce");
    // Al hacer clic en la caja líquida, cambia el fondo aleatoriamente
    liquidBox.addEventListener("click", () => {
        const randomColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
        document.documentElement.style.setProperty("--background", randomColor);
    });

    // Al hacer clic en la caja que rebota, se pausa o reanuda la animación
    bounceBox.addEventListener("click", () => {
        bounceBox.classList.toggle("paused");
    });
});
