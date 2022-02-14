// Una variable contine un datos a la vez
// ** Un arreglo es un conjunto de datos.
// ** La forma en que declaramos un arreglo es parecido a la de una variable.
// ** Sin embargo debemos colocar los corchetes [] despues del igual
// ** Ejemplo
// !! esto es un arreglo vacio para poder llenarlo debemos colocar los datos separados por una coma

// !! :eye: siempre empezara a contar los indices desde 0

let alumnos = ["Erick", "Karina", "Patricia", "Kjaris", "Bruno"];
console.log(alumnos);

//  ** Puede contener datos de distintos tipos
const variosTipo = [100, "Juana", true, 100.5];


const productos = ["Tablet", "Laptop", "Smartphone", "TV", "Radio"];


//** como acceder a un dato en especifico */
console.log(alumnos[2]);
console.log(alumnos[4]);

// ** Se pordra alterar un dato del array?
//!! voy a reasignar el valor del indice 0

alumnos[0] = "Pepe"
console.log("alumno reasignado", alumnos);

// ! asi como se puede reasignar un dato en especifico, tambien podemos crear datos
//** alumnos [4] es el ultimo dato del array */

alumnos[5] = "Erick";
console.log("Creando un nuevo elemento", alumnos);


alumnos[6] = "Joel";
console.log("Creando un nuevo elemento", alumnos);

//**como saber cuantos elementos tiene un array */
//** Los array tienen una funcion llamada length, el mismo que nos permite saber cuantos elementos tiene el array */

console.log("Cantidad de elemntos", alumnos.length);

// ! quiero agregar un elemento en la ultima posicion del array
alumnos[alumnos.length] = "Juan";
console.log("Creando un nuevo elemento", alumnos);

//** y si quiero obtener el ultimo elemento de mi array? */
console.log("ultimo elemento", alumnos[alumnos.length -1]);