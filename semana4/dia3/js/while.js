//** while tambien sirve para poder hacer una accion un numero determinado de veces */
//** es decir es un bucle */

/**
 * * la estructura de while siempre va acompañado de un contador.
 *
 */

let contador = 0;
while (contador < 5) {
  console.log("Contador:", contador);
  //! no olvidar el contador en cada vuelta....
  contador++;
}

//* 1 ==> Escribir un programa que pida al usuario una palbra y le muestre por pamtalla 10 veces

const imprimirDiezVeces = (palabra) => {
  let contador = 0;

  while (contador < 10) {
    console.log(palabra);
    contador++;
  }
};

imprimirDiezVeces("Hola TECSUP");

//** Escribir un programa que imprima la tabla de multiplicar */

const imprimirTablaMultiplicar = (numero) => {
  let contador = 0;

  while (contador <= 10) {
    console.log(`${numero} x ${contador} = ${numero * contador}`);
    contador++;
  }
};

imprimirTablaMultiplicar(3);

//** escribir un programa que pida al usuario un numero entero positivo y muestre  */
//** en pantalla todos los numeros impares  */

const imprimirNumerosImpares = (numero) => {
  if (numero <= 0) {
    return "Ingrese un numero entero positivo";
  }

  let contador = 0;
  let resultado = "";

  while (contador <= numero) {
    if (contador % 2 !== 0) {
      if (contador === 0) {
          resultado += `${contador}`;
      } else {
          resultado += `, ${contador}`;
      }
    }
    contador++;
  }

  return resultado;
};

console.log(imprimirNumerosImpares(10));


const imprimirNumerosImparesFor = (numero) => {
    if (numero <= 0) {
        return "Ingrese un numero entero positivo";
    };

    let resultado = "";

    for (i = 0; i <= numero; i++) {
        if (i % 2 !== 0) {
            resultado += `${i}, `;
        };
    }

    return resultado;
}

console.log(imprimirNumerosImparesFor(10));


const hallarNumeroPrimo = (numero) => {
    if (numero % 1 !== 0) {
        return 'El numero es un decimal';
    }

    if (numero === 1) {
        return 'No es numero primo';
    }

    let contador = 0;
    let contadorDivisores = 0;
    while (contador <= numero ) {
        if (numero % contador === 0){
            contadorDivisores++;
        }
        contador++;
    }

    return contadorDivisores === 2 ? 'Si es un numero primo': 'No es un numero primo';
}

