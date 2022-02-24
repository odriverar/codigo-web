let nombre = [];

function obtenerValoresDelInput(event) {
  /**
   *  * event contiene muchos atributos del inpu, los atributos mas importantes que vamos a ver hoy es el value y el name
   *  ? value: será el contenido del input.
   *  ? name: Será el nombre que le asigne a mi input
   *
   *  TODO: event es un objeto y la propiedad que contiene el value y el name se llama "target"
   *  ! Accediendo a value
   */
  console.log(event.target.value);
  console.log(event.target.value);
  //** Si fuera un objeto cual seria el key */
  nombre.push({
    [event.target.name]: event.target.value,
  });
}

/**
 *  * Vamos a crear una table persona y cuando se registre con un boton podemos agregar a la tabla
 *  ? Vamos a validar el correo
 *  ! regex: es un conjunto de caracteres el cual me dice si un elemento es valido, ejemplo validar correo electronico.
 */

let validacionCorreo = false;
let validacionPassword = false;

function validarCorreo(event) {
  //* Sepa que este regex me va a servir para validar que el correo tenga un formato correcto.
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailError = document.querySelector("#email-error");

  //! si el regex es false entonces hacemos un display block al span, de lo contrario sera none
  if (!emailRegex.test(event.target.value)) {
    emailError.style.display = "block";
    validacionCorreo = false;
    validateInputNoVacios();
  } else {
    emailError.style.display = "none";
    validacionCorreo = true;
    validateInputNoVacios();
  }
}

function validarPassword(event) {
  const password = event.target.value.length;
  const passwordError = document.querySelector("#password-error");

  if (password <= 8) {
    passwordError.style.display = "block";
    validacionPassword = false;
    validateInputNoVacios();
  } else {
    passwordError.style.display = "none";
    validacionPassword = true;
    validateInputNoVacios();
  }
}

function validateInputNoVacios() {
  const inputs = Array.from(document.querySelectorAll("input"));
  const botonCrearUsuario = document.querySelector("#btn-crear-usuario");

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      deshabilitarBoton();
      return;
    }
  }
  if (validacionCorreo && validacionPassword) {
    habilitarBoton();
  } else {
    deshabilitarBoton();
  }
}

function deshabilitarBoton() {
  botonCrearUsuario.disabled = true;
  botonCrearUsuario.style.backgroundColor = "#ccc";
  botonCrearUsuario.style.color = "#f02";
}

function habilitarBoton() {
  botonCrearUsuario.disabled = false;
  botonCrearUsuario.style.backgroundColor = "rgb(204, 149, 255)";
  botonCrearUsuario.style.color = "#fff";
}

//* boton crear usuario
const botonCrearUsuario = document.querySelector("#btn-crear-usuario");

//* tengo que agregar un evento a mi boton
//* existe una proiedad llamada addEventListener

//! addEventListener, permite agregar un evento a mi html
//* Este array se encargara de acumular a los usuarios que se registran.
let usuarios = [];
botonCrearUsuario.addEventListener("click", function (event) {
  //necesito que l apagina no se recargue
  //* Para evitar que la pagina recargue, usaremos la funcion preventDefault, propiedad de event
  event.preventDefault();

  const inputs = document.querySelectorAll("input");
  const tableBody = document.querySelector("#table-body");

  // Paso 2, creo un tr
  const tr = document.createElement("tr");

  inputs.forEach((input) => {
    const td = document.createElement("td");
    const value = document.createTextNode(input.value);
    td.appendChild(value);
    tr.appendChild(td);
  });
  /**
   * ? Necesito obtener los valores de los inputs
   */
  tableBody.appendChild(tr);
});
