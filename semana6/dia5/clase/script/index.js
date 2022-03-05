const optionMode = document.querySelector("#option-mode");
//
const body = document.querySelector("body");

optionMode.onchange = function(event) {
    // Se acuerdan de la destructuración de objetos?
    // esto obtiene el value desde la variable event.target
    // const value = event.target.value;
    //Nos ayuda a poder extraer los valores de un objeto y poder almacenarlos en una variable 

    //! estamos extrayendo value y name desde event.target

    // const {value, name} = event.target;
    const { value } = event.target;
    
    // console.log(value);
    
    // console.log(name);

    // aca debemos validar si el value es igual a dark entonces, al body debemos agregar el data-mode con el valor dark si no, le agregamos el valor light

    body.setAttribute("data-mode", value);
};

// la funcion matchMedia detecta en modo esta nuestro dispositivo
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  // dark mode
  body.setAttribute("data-mode", "dark");
} else {
  body.setAttribute("data-mode", "light");
}