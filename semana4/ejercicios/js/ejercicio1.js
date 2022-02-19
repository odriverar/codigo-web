//? 01 Implementar un algoritmo que reciba dos argumentos y lo sume, el resultado se debera imprimir en pantalla.
const sumarNumeros = (numero1, numero2) => {
    if (isNaN(numero1) || isNaN(numero2)) {
        return "ERROR: Ingrese un numero";
    }
    return `La suma es: ${+numero1} + ${+numero2}`;
}
//? 02 Registrar el ingreso de notas de 4 examenes y calcular el promedio de estos

const calcularPromedio = (nota1, nota2, nota3, nota4) => {
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        return "ERROR: Ingrese una nota valida";
    };
    return `El promedio es: ${((+nota1 + +nota2 + +nota3 + +nota4) / 4)}`;
};

//? 03 Calcular el área de un rectángulo
const calcularAreaRectangulo = (base, altura) => {
    if (isNaN(base) || isNaN(altura)) {
        return "ERROR: Ingrese la base y la altura";
    };
    
    return `El área del rectángulo es: ${+base * +altura}`;
};

//? 04 Calcular el área de un triángulo
const calcularAreaTriangulo = (base, altura) => {
    if (isNaN(base) || isNaN(altura)) {
        return "ERROR: Ingrese la base y la altura";
    };
    return `El área del triángulo es: ${((+base * +altura) / 2)}`;
}

//? 05 Calcular el área de una circunferencia
const calcularAreaCirdunferencia = (radio) => {
    if (isNaN(radio)) {
        return "ERROR: Ingrese el radio de la circunferencia";
    };
    const pi = 3.1416
    return `La circunferencia es ${pi * Math.pow(radio, 2)}`
}

//? 06 Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre
const determinarSueldoSemanal = (horas, salario) => {
    if (isNaN(horas, salario)) {
        return "ERROR: Ingrese las horas y/o el salario";
    };
    return `El sueldo semanal es S/: ${horas * salario} nuevos soles,  de un total de ${horas} horas trabajadas`;
}

//? 07 Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. (1 pulgada = 0.0254 m).
const convertirPulgadasACentimentro = (metros) => {
    if (isNaN(metros)) {
        return "ERROR: Ingrese los metros";
    };
    const centimetroAPulgada = 0.0254;

    return `Cantidad de tela: ${metros * (1 / centimetroAPulgada)} pulgadas,y equevalen a ${metros} metros`;
    
}
//? 08 Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano.

//? 09 Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron 

//? 10 Se tiene el nombre y la edad de tres personas. Se desean saber el nombre y la edad de la persona de menor edad.

//? 11 Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo ,que permita determinar el bono que recibirá un trabajador

//? 12 Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10% anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el algoritmo y representan la solución, utilizando el ciclo apropiado.


console.log(convertirPulgadasACentimentro(200));