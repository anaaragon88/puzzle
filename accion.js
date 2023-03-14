let cajas = document.querySelectorAll("#contenedor div");

cajas.forEach(cajita => {
    cajita.addEventListener("click", esconder)
});

function esconder() {
    this.style.opacity = 0;
}