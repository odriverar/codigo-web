/**
 * * este va a funcionar solo para mis funciones
 */

//funcion para poder sumar dos numero 
const sumar = (numero1, numero2) => +numero1 + numero2;

const filtrarArray = (array, filtro) => {
    array.filtrar((elemento) => elemento === filtro);
}; 

const calcularAreaTriangulo = (base, altura) => {
    return (+base * +altura) / 2;
}

const calcularSalario = (salario, horas) => {
    let resultado = "Por favor ingrese valores numericos";
    let limite = 40;

    if (isNaN(salario) || isNaN(horas)){
        return resultado;
    }

    if (horas > limite) {
        resultado = `Solo se pagaran ${limite} horas semanales. Su salario es: ${salario * limite}`;
    } else if (horas > 0 && horas <= limite) {
        resultado = `Su salario es: ${salario * horas} `;
    }
    return resultado;
}

const numeroCapicua = (arrayNumeros) => {
    let contador = 1000;

    const numerosCapicua = [];
    while(contador <= 2999) {
        const numeros = contador.toString();

        const numerosSplit = numeros.split("");

        const parte1 = `${numerosSplit[0]}${numerosSplit[1]}`;
        const parte2 = `${numerosSplit[2]}${numerosSplit[3]}`;



        if (parte1 === parte2) {
            numerosCapicua.push(`${parte1}${parte2}`);
        }

        contador++;
    }
    console.log(numeroCapicua);
}


const contarVocales = (frase) => {
    let fraseArray = frase.toUpperCase().split("");

    const vocales = ["A", "E", "I", "O", "U"];

    let contador = 0;

    fraseArray.forEach((letra) => {
        if (vocales.includes(letra)) {
            contador++;
        }
    });
    return `La frase tiene ${contador} vocales`;
}
