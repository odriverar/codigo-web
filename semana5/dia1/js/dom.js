/**
 *  * Existe dentro de JS el document, este atributo de JS me va a permitir obtener los elementos de HTML
 * 
 *  ! Obteniendo elementos en base a su "tag"
 *  ? tag === etiquetar
 * <h1></h1> tagname = h1
 * <input>   tagname = input
 * 
 * todos: getElementsByTagName -> 
 */

//? como tengo cuatro elementos con el tagname input, esto sera un array de inputs.

const inputs = document.getElementsByTagName("input");
//! Recordemos que input es un html collection, pero para poder ser iterado debe ser convertido a un array normal.
//! vamos a usar Array.from, para convertir este HTMLCollection a un array normal.
const newInputs = Array.from(inputs)
// un map a nuestro input

newInputs.map((newInput) => {
    console.log(newInput);
})

// console.log(inputs);
console.log(newInputs);



const form = document.getElementsByTagName("form");
// console.log(form);

const buttom = document.getElementsByTagName("button");
// console.log(buttom)

const divContet = document.getElementsByTagName("div");

console.log("divContet", divContet);

const newDivContent = Array.from(divContet);
console.log("newDivContent", newDivContent);

newDivContent.forEach((newDiv) => {
    console.log("newDiv", newDiv);
})

/**
 * * Otra forma de acceder a los elementos del DOM  es utilizando el ID
 *  TODO: Recuerden que podemos asignar un ID a cualquier elemtno de nuestro HTML
 */

//* esta variable solo sera dedicada para email

const inputEmail = document.getElementById("input_email");

console.log("===============================")
console.log(inputEmail);
console.log("===============================")

// de esta forma estoy accedienodo al value de mi input
inputEmail.style.backgroundColor = "#f01"
console.log("inputEmail", inputEmail.value);
console.log("inputEmail", inputEmail);
//usando puedo acceder directamente a las propiedades del input


const inputPassword = document.getElementById("input_password");
inputPassword.style.backgroundColor = "#000"
inputPassword.style.color = "#fff"
console.log("password", inputPassword.value);


/**
 * * vamos a obtener elementos por su class
 * ! en JS class se traduce a className
 */
const inputsName = document.getElementsByClassName("input_name")
console.log(inputsName);

const newInputsName = Array.from(inputsName);

newInputsName.forEach((input) => {
    console.log(input.value);
})

const button = document.getElementsByClassName("btn_registro")
console.log(button);
