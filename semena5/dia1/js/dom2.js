/**
 *  ! querySelector y querySelectorAll: es el hermano menor de getElementById, getElementByClassName, getElementByTagName
 * 
 *  * Ambas funciones me permite poder usar elementos de HTML en JS, 
 *  ? Ejemplo
 *  ! El querySelector solo devuleve un elemento
 * 
 */

// esto es con class
const inputName = document.querySelector(".input_name");
console.log(inputName.value);

// esto es con ID
const inputEmail = document.querySelector("#input_email");
console.log(inputEmail.value);

// esto con el TAGNAME
const form = document.querySelector("form");
console.log(form);


/**
 * * ***** querySelectorAll: Permite obtener mas de un elemento a la vez. .......
 */
//? esto retrona un NodeList y es compatible solo con forEach
const inputs = document.querySelectorAll("input");
console.log(inputs);


const arrayInputsText = [];
inputs.forEach((input) => {
    if (input.type === "text") {
        arrayInputsText.push(input);
    }
})

console.log(arrayInputsText);

const arrayConvertidoInputs = Array.from(inputs);
console.log(arrayConvertidoInputs);

const arrayConvertidoFilter = arrayConvertidoInputs.filter((input) => input.type === "text");

console.log(arrayConvertidoFilter);

