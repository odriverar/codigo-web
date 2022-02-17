//* Un bucle es una estructura repetitiva, es decir hacer algo muchas veces.

//* los bucles son usados para poder leer los arrays, porque un bucle me va a permitir
//* lee cada elemento independientemente.

// TODO: for, ==> para, y es el bucle mas antiguo y conocido, ejemplo:
for (let i = 0; i < 10; i++) {
  console.log("Iterador", i);
}

for (let i = 5; i < 20; i++) {
  console.log("Iterador 2", i);
}

for (let j = 10; j < 50; j++) {
  console.log("Iterador 3", j);
}

const alumnos = ["Pepe", "Juana", "Stephanie", "Carlos", "Luis"];

for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i]);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let j = 0; j < numeros.length; j++) {
  if (numeros[j] % 2 === 0) {
    console.log(numeros[j]);
  }
}

const laptops = [
  {
    marca: "Apple",
    nombre: "16.2 MacBook Pro with M1 Pro Chip (Late 2021, Space Gray)",
    vendedor: "bhphotovideo",
    precioNormal: 2699,
    caracteristicas: {
      procesador: "M1",
      discoDuro: "NO APLICA",
      discoDuroSolido: "1 TB",
    },
  },
  {
    marca: "Apple",
    nombre: "16.2 MacBook Pro with M1 Pro Chip (Late 2021, Space Gray)",
    vendedor: "bhphotovideo",
    precioNormal: 2449,
    caracteristicas: {
      procesador: "M1",
      discoDuro: "NO APLICA",
      discoDuroSolido: "512 GB",
    },
  },
  {
    marca: "Apple",
    nombre: "16.2 MacBook Pro with M1 MAX (Late 2021, Space Gray)",
    vendedor: "bhphotovideo",
    precioNormal: 4299,
    caracteristicas: {
      procesador: "M1",
      discoDuro: "NO APLICA",
      discoDuroSolido: "2 TB",
    },
  },
];

for (o = 0; o < laptops.length; o++) {
  console.log(laptops[o]);
}

//* Array de objetos de alumnos

const alumnos2 = [
  {
    nombre: "Pepe",
    edad: 21,
  },
  {
    nombre: "Juan",
    edad: 30,
  },
  {
    nombre: "Lucho",
    edad: 22,
  },
];

for (let obj = 0; obj < alumnos2.length; obj++){
    console.log(alumnos2[obj]);

    console.log(alumnos2[obj].nombre);

    console.log("_____________________________________________")

    if (alumnos2[obj].edad < 30) {
        console.log(alumnos2[obj]);
    };
};

const contarVocales = (frase) => {
    // saber cuanto mide la clase 
    console.log(frase.length);

    let contador = 0;

    for (let i = 0; i < frase.length; i++){
        const letra = frase[i].toUpperCase();

        if (letra ===  "A" || letra ===  "E" || letra ===  "I" || letra ===  "O" || letra ===  "U") {
            contador ++;
        }
    }

    console.log(`La frase tiene ${contador} vocales`);
}

contarVocales("Hola me llamo juan");


// 

// const hallarDivisores = (numero) => {
//     let divisores = [];
//     for (let i = 1; i <= numero; i++){
//         if (numero % i === 0) {
//             divisores.push(i);
//         }
//     }

//     return divisores;
// }

const hallarDivisores = (numero, divisores) => {
    // let divisores = [];
    for (let i = 1; i <= numero; i++){
        if (numero % i === 0) {
            divisores.push(i);
        }
    }
    return divisores;
}

const hallarDivisoresComunes = (numero1, numero2) => {
    // for (let i = 1; i <= numero1; i++){
    //     if (numero1 % i === 0) {
    //         console.log(i)
    //     }
    // }

    // for (let j = 1; j <= numero2; j++){
    //     if (numero2 % j === 0){
    //         console.log(j)
    //     }
    // }

    const divisores = [];
    const divisores1 = hallarDivisores(numero1, divisores);
    const divisores2 = hallarDivisores(numero2, divisores1);

    const arrayOrdenado = divisores2.sort();

    console.log(arrayOrdenado);

    for (let i = 0; i < arrayOrdenado.length; i++){
         if (arrayOrdenado[i] === arrayOrdenado[i + 1]){
             console.log("sol 01", arrayOrdenado[i]);
         }
    }
    // console.log("Divisores1", divisores1);
    // console.log("Divisores2", divisores2);

    // console.log("Divisores", divisores.sort());
}

hallarDivisoresComunes(12, 24)
