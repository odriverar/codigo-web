//** Una funcion es un conjunto de soluciones para poder realizar tareas */

function nombreDeLaFuncion(){
    // una vez declarada mi funcion, todo el codigo que haga  dentro de esta, solo se ejecutara cuando llame a la funcion
    // ! esto no se va a ejecutar
    console.log("Mi primera función");
};

//** Para poder llamar a una funcion solo necesito escribir su nombre junto a los parentesis */
//** Una vez que llame a la funcion ejecutara el codigo que tiene dentro. */
nombreDeLaFuncion();

//? una función es creada para poder reutilizar codigo
//? una de las misisones de una funcion es hacer un trabajo repititivo
//? al estar un trabajo en una función solo es necesario escribir el codigo una vez.
//? y luego llamar a la funcion para que la necesite

// TODO: Una función puede recibir paramtros (son variables que se le pasan a la funcion)
// TODO: estos parametros van dentro de los parentesis de la funcion

function sumar(numero1, numero2){
    //** numero1, numero2 son parametros de la function sumar
    //** con los parametros se puede hacer lo que se necesite */
    const suma = +numero1 + +numero2;
    console.log("Suma:", suma);
}

//! cuando se llama la funcion sumar, dbeemos pasarle numero1 y numero2
//! el orden en que se le pasa los parametros sera el orden en que los reciva 
sumar(50, 20);
sumar(10, 50);
sumar(100, 200);
sumar(31.5, 40.4);
sumar("Hola", 10)

// const num1 = +prompt("Ingrese numero 1");
// const num2 = +prompt("Ingrese numero 2");
// sumar(num1, num2);


function sumar1(numero1, numero2){
    // Primero se convierte los parametros a numeros
    const convertNumero1 = +numero1;
    const convertNumero2 = +numero2;

    const suma = convertNumero1 + convertNumero2;

    // si la suma es nan debo imprimir un mensaje de erro
    //! isNaN(Parametro) me permite saber si es un NaN

    if (isNaN(suma)) {
        console.error("Error: No se puede sumar");
        //? que es un return 
        //** return es una palabra reservada que nos permite regresar un valor y ademas indica el final de la funcion */
        return;
    }

    console.log("Suma:", suma);
}

sumar1(50, 20);
sumar1(10, 50);
sumar1(100, 200);
sumar1(31.5, 40.4);
sumar1("Hola", 10);
sumar1("Hola2", 10);
sumar1("10", 10);


//? que es un return 
//** return es una palabra reservada que nos permite regresar un valor y ademas indica el final de la funcion */
function sumar3(numero1, numero2){
    const suma = +numero1 + +numero2;

    if(isNaN(suma)){
        return "Error: No se puede sumar";
    }
    return suma;
}

console.log(sumar3(50, 20));
console.log(sumar3(10, 50));
console.log(sumar3(100, 200));
console.log(sumar3(31.5, 40.4));
console.log(sumar3("Hola", 10));
console.log(sumar3("Hola2", 10));
console.log(sumar3("10", 10));


//* operador ternario
//* es un if else pero que solo sirve cuando quiero una linea 

//! la estructura de un operador ternario es la siguiente

// TODO: condicion ? true (si es true ejecuta la linea) : false (si es falso ejecuta esta linea)

function sumar4(numero1, numero2){
    // const suma = +numero1 + numero2;

    return isNaN(+numero1 + numero2) ? "Error: no se puede sumar" : +numero1 + numero2;
}

console.log(sumar4(50, 20));
console.log(sumar4(10, 50));
console.log(sumar4(100, 200));
console.log(sumar4(31.5, 40.4));
console.log(sumar4("Hola", 10));
console.log(sumar4("Hola2", 10));
console.log(sumar4("40", 10));


// TODO: Function de expresion
//! Es tener una funcion dentro de una variable
//! tambien conocido como function anonima

const resta = function(numero1, numero2){
    const resta = +numero1 - +numero2;

    return isNaN(resta) ? "Error: no se puede restar" : resta;
};

console.log("Resta:", resta(10, 20));


// Ejemplo 2
const multiplicacion = function(numero1, numero2){
    const calMultiplicacion = +numero1 * +numero2;

    return isNaN(calMultiplicacion) ? "Error: no se puede multiplicar" : calMultiplicacion;
};

console.log("Multiplicación:", multiplicacion(10, 20));

// ** Arrow function ==> funciones flecha
//** es una funcion parecida a la funcion anonima o de expresion, sin embargo no hace falta usar la palbra function para declarar */
//! Importante, una funcion fecha no puede usar ```this````
//** DIferencia entre una function y un arrow function */
//? como declaramos un arrow function

const division = (numero1, numero2) => {
    if (numero2 === 0) {
        return "No se puede dividir entre 0"
    }

    const calDivision = +numero1 / +numero2;

    return isNaN(calDivision) ? "Error: no se puede dividir" : calDivision;
};


console.log("División:", division(20, 0));
console.log("División:", division(20, 2));

//? Caso 1, cuando nuestro arrow function solo recibe un parametro; no necesita parentesis
const saludar = (nombre, apellido) => {
    //Como imprimir de forma mas elegante
    // return "Hola mi nombre es " + nombre + " y mi apellido es " + apellido;
    return `Hola mi nombre es ${nombre} y mi apellido es ${apellido}`;
};

console.log(saludar("David", "Rivera"));

//? cuando un arrow function no recibe parametros no hace falta poner parentesis

const functionSinParametros = _ => {
    return "Hola mundo..."
};

console.log(functionSinParametros());

//? Vamos a ver arrow function inline
//? este tipo de function se usa cuando quiero ejecutar una linea de codigo
//? cuando usamos este tipo de function el return esta implicito
const hello = () => "Hola Mundo... in one line";
console.log(hello());


// Sabemos que cuando declaramos una variable ese nombre ya no se puede usar
var numeroGlobal = 10;

const calcularEsMayor =  () => {
    const edad = 18;

    const nombre = "David";

    console.log("numeroGlobal", numeroGlobal);
    console.log(edad);
}

function ejemplo () {
    console.log("numeroGlobal", numeroGlobal);
};


//? Recomendaciones
//? Los nombres de las funciones deben ser verbos, pq siempre realizan una acción
//? ejemplo 
function sumar(){};
function calcularResta(){};
function actualizarNombre(){};

//? tratar de no pasar mas de tres parametros a una function 
//** Recuerden que los parametros de una funcion pueden ser de cualquier tipo */
//** pueden aceptar arrays */

const alumnosTecsup = ["Erick", "Karina", "Patricia", "Kjaris", "Bruno"];

function listarAlumnos(alumnos) {
    console.log("Alumnos Tecsup", alumnos)
}

listarAlumnos(alumnosTecsup);


// function validarSiEsNumero(numero, tipo) {
//     return isNaN(numero) ? `Mensaje de error: no se puede ${tipo}`: numero;
// }

// const sumar1 = function(numero1, numero2){
//     const suma = +numero1 - +numero2;

//     validarSiEsNumero(suma, "sumar");
// };

// const restar = function(numero1, numero2){
//     const resta = +numero1 - +numero2;

//     validarSiEsNumero(resta, "restar");
// };

// const multiplicar = function(numero1, numero2){
//     const calMultiplicacion = +numero1 * +numero2;

//     validarSiEsNumero(calMultiplicacion, "multiplicar");
// };

// const dividir = (numero1, numero2) => {
//     if (numero2 === 0) {
//         return "No se puede dividir entre 0"
//     }

//     const calDivision = +numero1 / +numero2;

//     validarSiEsNumero(calDivision, "dividir");
// };


// console.log(sumar(10, 10));