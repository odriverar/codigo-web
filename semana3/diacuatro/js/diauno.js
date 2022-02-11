const numero1 = 10;
const numero2 = 20;

// recuerden el ; no importa

let resultado = 0;

resultado = numero1 + numero2;

// alert   : es una alerta en el navegador
// console.log : escribe un mensaje en la consola del navegador 
console.log("Resultado: " + numero1 + " + " + numero2 + " = " + resultado)
console.log("Resultado: ", numero1, " + ", numero2, " = ", resultado)

// Otra propiedad del console.log poder de darle un key a un valor
console.log("Resultado: ", resultado);


// Existe el console.error y consol.warn
// console.error --> para errores
// console.warn ---> para advertencias

console.error("Suma error", resultado);

resultado = numero1 - numero2;

console.warn("Advertencia:", resultado);

// Vamos hacer una calculadora con JS
// restricciones: debemos validar la división entre 0

//prompt: ventana emergente que pide un valor
const valor1 = prompt("Ingrese un valor 1");
const valor2 = prompt("Ingrese un valor 2");

console.log("Valor", valor1, valor2);

//necesito que el usuario ingrese el tipo de operación 
const operacion = prompt("Ingrese una operación, puede ser + - * /");

let resultadoCalculadora = 0;

// para poder hacer los calculos se debe convertir mi variable de string a number
// parseInt convierte de strigna number
// + : se coloca delante de la variable y esta se convierte en number 

if (operacion === "+") {
    resultadoCalculadora = +valor1 + +valor2;
} else if (operacion === "-") {
    resultadoCalculadora = +valor1 - +valor2;
} else if (operacion === "*") {
    resultadoCalculadora = +valor1 * +valor2;
} else if (operacion === "/") {
    if (+valor2 !== 0){
        resultadoCalculadora = +valor1 / +valor2;
    } else {
        resultadoCalculadora = "";
        console.error("El divisor debe ser distinto a 0");
    }
} else {
    resultadoCalculadora = "";
    console.error("Operación no valida");
};

if (resultadoCalculadora !== "") {
console.log("Resultado: ", resultadoCalculadora);
};

//algortimo para detectar si un numero es par o impar
const numeroMultiplo = 10;

// la forma en la que puedo saber si un numero es par es usando el %
// operacion qu ebrinda el residuo

if (numeroMultiplo % 2 === 0) {
    console.log("Numero par", numeroMultiplo);
};

if (numeroMultiplo % 3 === 0) {
    console.log("Numero multiplpo de 3", numeroMultiplo)
};

// que pida dos numeros usando promp y que imprima el numero mayor

const valor12 = +prompt("Ingrese un numero 1")
const valor13 = +prompt("Ingrese un numero 2")

if (valor12 > valor13) {
    console.log("El numero mayor es:", valor12)
} else if (valor12 === valor13) {
    console.log("ambos son iguales")
} else {
    console.log("El numero mayor es:", valor13)
}

// como usar los peradores and y or 
// and ---> &&
// or  ---> ||
// *** Esto podemos usarlo en los if

const edadMayor = 18;
const nombreMayor = "Juan";
//  !! se usa oara concatenar condiciones 
// !! Pueden poner una cantidad ilimitada de condiciones

if (edadMayor === 18 && nombreMayor === "Juan"){
    console.log ("El usuario es Juan y tiene 18 años")
}

if (edadMayor === 18 || nombreMayor === "Juan"){
    console.log ("El usuario es Juan o tiene 18 años")
}

// ** tratemos de usar mucho el else
