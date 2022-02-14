// quiero un arreglo de 10 personas
const personas1 = ["Juan", "Pepe", "Luis", "Pablo", "Karina", "Alexandra", "Miguel", "Luis", "Marcos", "Jose"];
const personas2 = ["carlos","jose", "maria", "lisbet", "roberto", "liseth", "alexa", "anderson", "linder"]
const personas3 = ["ana","maria","jose","paul","ruben","lia","carlos","oto","rosa","julia"]
const personas4 = ["Erick", "Karina", "Patricia", "kjaris", "Bruno","Pepe","Juanito","pepito","Pedro" ,"Carlos"];

console.log("Personas1", personas1.length);
console.log("Personas2", personas2.length);
console.log("Personas3", personas3.length);
console.log("Personas4", personas4.length);

personas1[6] = "Juanito";

// let valores = [10, 10.5, true, "Hola", 0.5];
// const valores = [true, "hola", 100, 3.69, "false"];
const tipo = [100, "Pepe", true, 50.1, "5"];
const lista = ["juan", true, 10.5, "hola mundo", 5];
const valores = [1];


function obtenerSegundoValor(listaDeValores){
    // nos falto validar si la posicion existe
    // una forma seria ver si es undefined entonces retorna un error
    // if (valores[1] === undefined){
    //     return "Error: Posición no encontrada"
    // }
    // return valores[1];

    return listaDeValores[1] === undefined ? "Error: Posición no encontrada" : listaDeValores[1];
}

console.log(obtenerSegundoValor(tipo));
console.log(obtenerSegundoValor(lista));
console.log(obtenerSegundoValor(valores));

//? UNDEFINED 
//** Hace referencia a una variable vacia, ejemplo: cuando declaramos una variable y no le asignamos un valor esta por default es UNDEFINED */
let nombre;
console.log("Nombre:", nombre);

// new array
//** Los array vacios son variables los mmismos que inician vacios y en base a algo se pueden llenar */
// let carros = new Array();

//! la nueva forma es la siguiente:
let carrosNuevos = [];

// Quiero llenar un array desde una funcion 
// vamos a crear una function la cual se encargue
const llenarCarrosNuevos = (nuevoValor) => {
    //** Existe una funcion de JS llamada push(parametro) la cual recibe un valor y lo coloca al final del arreglo

    //** Añade nuevo valor al array carrosNuevos */
    //! push solo funciona si la variable es un arreglo */
    carrosNuevos.push(nuevoValor);
};

llenarCarrosNuevos("Mercedes GLA");
llenarCarrosNuevos("BMW M4");
llenarCarrosNuevos("tesla");
llenarCarrosNuevos("Ford");
llenarCarrosNuevos("Toyota");
llenarCarrosNuevos(["Tico", "Maverik 62", "Mitsubishi"])

console.log(carrosNuevos);

//! hagamos una function que me diga si un numero es par o impar
const saberSiEsParOImpar = (numero) => {
    return numero % 2 === 0 ? "Es par" : "Es impar";
};

console.log(saberSiEsParOImpar(5));