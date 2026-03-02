// 1. Seleccionamos los elementos
const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("cambiarBtn");

// 2. Escuchamos el evento click
boton.addEventListener("click", function() {

    // 3. Cambiamos el texto del párrafo
    mensaje.textContent = "¡El mensaje ha sido cambiado con JavaScript! 🚀";

    // 4. Cambiamos el texto del botón
    boton.textContent = "Mensaje cambiado";
});
