/**
 *  * addEventListener
 *  ? La forma de JS moderno me permite agregar los eventos de una forma mas legible
 */

// const btnPrueba = document.getElementById("btn-prueba");
const btnPrueba = document.querySelector("#btn-prueba");
const btnPregunta = document.querySelector("#btn-pregunta");
const btnError = document.querySelector("#btn-error");
const btnWarning = document.querySelector("#btn-warning");
const btnSucces = document.querySelector("#btn-succes");
const btnInfo = document.querySelector("#btn-info");

//*** Esta forma de agregae eventos no funciona con los querySelector */

function showAlert(title, text, icon) {
    Swal.fire({
      title,
      text,
      icon,
      footer: "<a href='https://google.com'>Link footer</a>",
    });
}

btnPrueba.onclick = function(event) {
    console.log("Click desde boton")
    console.log(event);
    Swal.fire("Hola mundo");
}

btnPregunta.onclick = function(event) {
    Swal.fire("Alguna pregunta", "Aca el texto de la pregunta", "question");
}

btnError.onclick =function(event) {
    showAlert("Hubo un Error", "Email or Password erroneos", "error");
    // Swal.fire("Hubo un Error", "Email or Password erroneos", "error")
}

btnWarning.onclick = function(event) {
    Swal.fire("Peligro", "Aca el texto", "warning");
}

btnSucces.onclick = function(event) {
    Swal.fire("Success", "Aca el texto", "success");
}

btnInfo.onclick = function(event) {
    Swal.fire("Información", "Mensaje informativo de mi alerta", "info");
}


const paises = document.querySelector("#select-opciones");

// Vamos a  agregar el event onChange
//? onchange: Sirve para detectar un cambio
paises.onchange = function(event) {
    const {value, options} = event.target;

    console.log("Probamos el evento", value);
    const index = options.selectedIndex;
    console.log("Index", index);
    console.log("Texto", options[index].text)
}