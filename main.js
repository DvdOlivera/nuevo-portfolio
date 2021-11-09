const flechaDerecha = document.querySelector("#flecha-derecha");
const flechaIzquierda = document.querySelector("#flecha-izquierda");

flechaDerecha.addEventListener("click", scrollDerecha);
flechaIzquierda.addEventListener("click", scrollIzquierda);

function scrollDerecha() {
    document.querySelector("#contenedor-proyectos").scrollBy(20, 0);
};

function scrollIzquierda() {
    document.querySelector("#contenedor-proyectos").scrollBy(-20, 0);
};