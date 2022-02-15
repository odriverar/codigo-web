//* Tipos de datos
/**
 *  * string
 *  * number
 *  * boolean
 *  * undefined
 */

//? ejemplos de string
const mensaje = "Hola";
var pepito = "Saludando";
let nombre = "Dario";

//? Ejemplos de number

const nombreNumber = +"nombre"
console.log("Tipo de variable", typeof nombreNumber);
//! ojo typeof solo sirve para decir que tipo de dato es

const edadMayor = 21;
let edad = 10;
const numero = 50;

//? Ejemplo de boolean
let estado = true;
let sexo = true;
let rpta = true;

//?
let componentes;
console.log("por si no me creen...", typeof componentes);

//? toString(): Esta funcion se va a encargar de transformar una variable a tipo string, ejemplo:
let dinerEnElBanco = 10;
console.log("Tipo de variable", typeof dinerEnElBanco);
// vamos a ver como transformar este number a string 
dinerEnElBanco.toString();
console.log("Tipo de variable", typeof dinerEnElBanco.toString());

//? Ejemplo
//? Cuando hacemos una peticion y queremos enviarle datos al servidor nos dice
//? que tipo de datos requiere
//? quiero crear un usuario
//? nombre, apellido, edad, celular
//? string, string, number, number
//* edad.toString()
//* celular.toString()

let alumnos = ["Luis", "Karen", "Pedro", "Raul"];
let notas = [20, 16, 18, 15]
let juegos = ["domino", "sapito", "cuerda", "startcraft"]


console.log(`${alumnos[1]} tiene ${notas[2]} en programación y juega ${juegos[1]}`)

//? Math, es una libreria de JS que nos permite realizar operaciones patematicas.
//? Math.pow se usa para poder elevar el numero a la potencia, recibe 2 parametros
//? Parametro1 = numero y  Parametro2 = potencia

let calcularCuadrado = (numero1, numero2) => {
    const cuadrado1 = Math.pow(+numero1, 2);
    const cuadrado2 = Math.pow(+numero2, 2);

    return `El cuadrado del primer numero es: ${cuadrado1} y el cuadrado del segundo numero es: ${cuadrado2}`;
}

console.log(calcularCuadrado(2, 8));


//?? Crear una funcion la cual pida el nombre, apellido y edad y retorne un mensaje de saludo

const retornarMensaje = (nombre, apellido, edad) => `Hola ${nombre} ${apellido}, tu edad es: ${edad} años`;
console.log(retornarMensaje("Davir", "Rivera", 30));

//? Crear un arrow function el mismo que debe retornar el area de un rectangulo 

const calcularAreaRectangulo = (base, altura) => `El area del rectangulo es ${+base * +altura}`

console.log(calcularAreaRectangulo(2, 8))


//? creemos una funcion que reciba la edad de la persona y retorne si es mayor

const esMayor = edad => {

    if (edad >= 18){
        return "Es mayor de edad";
    } else {
        return "Es menor de edad";
    }
}

const esMayor2 = edad => {
    return edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
}

//? crear una funcion que reciba un array y si el lenght del array es mayor a 5 entonces retorna "arreglo grande", si no retorna arreglo pequeño

const encontrarTamañoArray = lista => {
    return lista.length > 5 ? "Arreglo grande" : "Arreglo pequeño";
}

console.log(encontrarTamañoArray(["1", "2", "3", "4", "2", ""]))

