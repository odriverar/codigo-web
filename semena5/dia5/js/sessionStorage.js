const btnCrearSession = document.querySelector("#crear-session");
const btnObtenerSession = document.querySelector("#obtener-session");
const btnEliminarSession = document.querySelector("#eliminar-session");

btnCrearSession.onclick = function(event) {
    // Para poder crear una variable en session storage invocaremos a session
    // console.log(event);

    sessionStorage.setItem("variable_1", "Mi primera variable en session storage");
}

btnObtenerSession.onclick = function() {
    const variable = sessionStorage.getItem("variable_1");

    console.log(variable);
}

btnEliminarSession.onclick = function() {
    sessionStorage.removeItem("variable_1");
}