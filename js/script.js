document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.carrusel-imagenes img');
    let indiceActual = 0;

    // Función para ocultar todas las imágenes excepto la primera
    function ocultarImagenes() {
        imagenes.forEach((img, indice) => {
            img.style.display = (indice === indiceActual) 
            ? 'block' 
            : 'none';
        });
    }

    // Inicialmente, ocultar todas las imágenes excepto la primera
    ocultarImagenes();

    // Función para cambiar a la siguiente imagen
    function cambiarImagen() {
        indiceActual = (indiceActual + 1) % imagenes.length; // Volver al inicio si es necesario
        ocultarImagenes();
    }

    // Cambiar imagen cada 5 segundos
    setInterval(cambiarImagen, 5000);


});
const a=[1,2,3,4,5,6,7,8,9,10]
console.log(a)