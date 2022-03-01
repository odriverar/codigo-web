/**
 *  * JS tiene el poder de escribir en el DOM
 *  * asi como puede obtener los elementos, puedes
 *  * escribir, alterar, aumentar, etc... en el DOM
 */


/**
 *  *document.write(text), me permite escribir en el DOM, este texto se ubica debajo de la etiqueta script.
 */

document.write("Hello world..!");
document.write("Hello world two..!");
document.write("Hello world three..!")


/**
 *  * vamos a crear una lista usando JS
 *  * 1) Insertar una lista dentro del div#container-lits
 *  * 2) Insertar elementos dentro de mi lista li
 */

// const inputs = Array.from(document.querySelectorAll("input"));

// const containerList =  document.querySelector("#container-list");
// //? JS  tiene una funcion llamada createElement la cual permite crear elementos de html

// const ul =  document.createElement("ul");
// ul.className = "lista";


// inputs.map((input) => {
//     const li = document.createElement("li");
//     const contenido = document.createTextNode(input.value);
//     li.appendChild(contenido);
//     ul.appendChild(li);
//     containerList.appendChild(ul);
// })



// const li1 = document.createElement("li");
// const contenido = document.createTextNode("BMW M4");
// // * Ahora debemos agregar el contenido a li1 y luego agregar li1 a ul
// // * en JS existe la funcion appendChild, el cual permite agregar un elemento a otro.

// li1.appendChild(contenido);

// console.log(li1);

// ul.appendChild(li1);
// console.log(ul);

// containerList.appendChild(ul);



//* Reto: Quiero crear una lista con los datos que tengo en los inputs

const inputs = Array.from(document.querySelectorAll("input"));
//obtener a mi contenedor
const contenedor = document.querySelector("#container-list");
// Vamos a crear un ul desde JS
const ul = document.createElement("ul");
// Ahora debo llenar la lista, para eso debo convertir mi NodeList a un Array
inputs.map((input) => {
    // en la iteración debo crear cada elemento de mi lista.
    const li = document.createElement("li");
    // crear el valor del li, que es el input.value
    const elementText = document.createTextNode(input.value);
    li.appendChild(elementText);
    ul.appendChild(li);
    contenedor.appendChild(ul);

})

console.log(inputs);


//
const body = document.body;
body.style.backgroundColor = "yellow";
body.style.fontFamily = "Helvetica"

//puedo acceder al head


const head = document.head;

document.title = 'Hello JS'


// ! podemos decir que en JS todos son objetos.