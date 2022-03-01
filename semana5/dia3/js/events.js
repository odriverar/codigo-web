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


const btnAlertaBotones = document.querySelector("#btn-alerta-botones");
btnAlertaBotones.onclick = function() {
    Swal.fire({
        title: "Alerta",
        text: "Texto de alerta",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: "Nel pastel",
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            showAlert("Confirmado", "Se confirmo la operación", "success");
            console.log("Marco la confirmación");
        }
        if (resultado.isDenied) {
            console.log ("Marco que nel pastel");
        }
        if (resultado.isDismissed) {
            console.log("Marco cancelar");
        } 
    })
}

const btnAlertaNotificacion = document.querySelector("#btn-alerta-notificacion");

//! 1000 equivale a un segundo
btnAlertaNotificacion.onclick = function() {
    Swal.fire({
        position: "top-end", // top, center, top-start, center-start, center-end, bottom, bottom-start, bottom-end
        icon: "success",
        title: "Notificación",
        showConfirmButton: false,
        timer: 3000,
    })
}

const urlMarvel =
  "https://e.rpp-noticias.io/normal/2022/01/05/464346_1198471.jpg";
const btnAlertaImagen = document.querySelector("#btn-alerta-imagen");

btnAlertaImagen.onclick = function() {
    Swal.fire({
      title: "Imagen",
      text: "Alerta con Imagen",
      imageUrl: urlMarvel,
      imageWidth: 400,
      imageHeight: 200,
    });
}

const btnAlertaCustom = document.querySelector("#btn-alerta-custom");

btnAlertaCustom.onclick = function() {
    Swal.fire({
      title: "Custom Alert",
      text: "Alerta Customizable",
      background: `url(${urlMarvel})`,
      color: "#fff",
      backdrop: `
        rgba(0, 0, 0, 0.3)
        url(https://i.gifer.com/origin/61/6170662f09220932f1c45887777f062e.gif)
        left top
        no-repeat`,
    });
}

const btnAlertaConInputs = document.querySelector("#btn-alerta-inputs");
btnAlertaConInputs.onclick = function() {
    Swal.fire({
        title: "Input para mail",
        input: "email",
        inputLabel: "Ingrese su correo",
        inputPlaceholder: "El correo debe ser valido",
    }).then(resultado => {
        //Obtengo el resultado de lo que escribio el usuario en el input
        console.log(resultado.value);
    })
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