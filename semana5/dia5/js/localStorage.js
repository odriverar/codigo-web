const btnLogin = document.querySelector("#btn-login");

btnLogin.onclick = function (event) {
  event.preventDefault();

  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    // * Vamos a guardar el cooreo y el password en el localStorage
    //? localStorage.setItem (key, value)
    localStorage.setItem(input.name, input.value);
  });

  login();
};

/**
 *  * Vamos a obtener los datos del localStorage
 *  * La forma en como obtebemos los datos es usando
 *  ? localStorage.getItem(key)
 */

console.log(localStorage.getItem("email"));
console.log(localStorage.getItem("password"));

const email = localStorage.getItem("email");
const password = localStorage.getItem("password");

function login() {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  form.style.display = "none";
  UsuarioSection.style.display = "block";
  titleEmail.innerHTML = email;
  titlePassword.innerHTML = password;
}

const form = document.querySelector("#section-login");
const titleEmail = document.querySelector("#email");
const titlePassword = document.querySelector("#password");

const btnCerraSesion = document.querySelector("#cerrar-sesion");
const UsuarioSection = document.querySelector("#usuario-logged");

if (email !== null && password !== null && email !== "" && password !== "") {
  // el usuario ya esta logeado
  // Si el usuario esta logeado se debe ocular el form
  login();
} else {
  UsuarioSection.style.display = "none";
}

btnCerraSesion.onclick = function (event) {
  //* Vamos a eliminar las variables del localStorage
  //! localStorage.removeItem(key)

  localStorage.removeItem("email");
  localStorage.removeItem("password");

  // es mostrar el formulario y ocultar el mensaje del usuario

  form.style.display = "block";
  UsuarioSection.style.display = "none";
};
