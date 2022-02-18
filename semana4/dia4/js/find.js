//* find, es de la familia, find solo un dato;
//* find es parecido a filter, recordemos que filter retorna un array mientras que retorna el primer dato que se da en la condición.

const edades = [10, 11, 22, 32, 50, 34];

const mayores30 = edades.find((edad) => edad > 30);

//? recordemos que find solo retorna 1 dato
//? En este caso find esta buscando en el arreglo edad mayor a 30
//? el primer caso que cumple con esa condicion es 32, por ende al encontrar el primer dato la condicion find termina su ejecucion.
console.log(mayores30);

//* find y dilter necesitan una condición, de lo contrario solo iteran el objeto.
const finder = edades.find((edad, index) => console.log(edad));

const productos = [
  { nombre: "Laptop", categoria: "Computo" },
  { nombre: "Licuadora", categoria: "Electro" },
  { nombre: "All in one", categoria: "Computo" },
  { nombre: "Refrigeradora", categoria: "Electro" },
];

const filtro = productos.find((product) => product.categoria === "Computo");

console.log(filtro);

const alumnos = [
  ["Pepe", "Juan", "Luis", "Paco"],
  ["Patricia", "Leonardo", "Armando", "Karina"],
];

//? quiero un afuncion que reciba el nombre de un alumno y me diga si existe en la lista

// const buscarAlumno = (arrayAlumnos, nombre) => {
//     // const filterAlumnos = arrayAlumnos.filter((alumnos) => alumnos.find((alumno) => alumno = nombre));
//     // console.log(filterAlumnos);
// };

// buscarAlumno(alumnos, 'Patricia');

// const buscarAlumno = (arrayAlumnos, nombre) => {
//   let estaCompleto = false;

//   arrayAlumnos.forEach((alumnos) => {
//     if (!estaCompleto) {
//       const filtro = alumnos.find((alumno) => alumno === nombre);
//       if (filtro !== undefined) {
        
//         console.log("filtro", filtro);
//         return filtro;
//         estaCompleto = true;
//       }
//     }
//   });
// };

// console.log(buscarAlumno(alumnos, "Pepe"));

const buscarAlumno = (arrayAlumnos, nombre) => {
    // 
    let alumnoExiste = false;

    for (let i = 0; i < arrayAlumnos.length; i++) {
        const filtro = arrayAlumnos[i].find((alumno) => alumno === nombre);

        const num = arrayAlumnos[i].findIndex((alumno) => alumno === nombre);
        if (filtro) {
            // return true;
            // return arrayAlumnos[i];
            return num;
        }
    }
    return false
};

console.log(buscarAlumno(alumnos, "Patricia"));


const laptops = [
    {
      marca: "Lenovo",
      imagen: "https://logo.com",
      nombre: "Ide Centre AIO I3",
      vendedor: "Falabella",
      precioOferta: 1599,
      precioNormal: 3599,
      calificacion: 2,
      caracteristicas: {
        procesador: "i3",
        tarjetaDeVideo: "integrada",
        discoDuro: "1TB",
        discoDuroSolido: "no aplica",
      },
    },
    {
      marca: "Acer",
      imagen: "https://logo.com",
      nombre: "AN515 15.6",
      vendedor: "Falabella",
      precioOferta: 3399,
      precioNormal: 4999,
      calificacion: 5,
      caracteristicas: {
        procesador: "i5",
        tarjetaDeVideo: "GTX 1650",
        discoDuro: "No tiene",
        discoDuroSolido: "256gb",
      },
    },
    {
      marca: "Acer 2",
      imagen: "https://logo.com",
      nombre: "AN515 15.6",
      vendedor: "Falabella",
      precioOferta: 3399,
      precioNormal: 4999,
      calificacion: 5,
      caracteristicas: {
        procesador: "i3",
        tarjetaDeVideo: "GTX 1650",
        discoDuro: "No tiene",
        discoDuroSolido: "256gb",
      },
    },
    {
      marca: "Acer",
      imagen: "https://logo.com",
      nombre: "AN515 15.6",
      vendedor: "Falabella",
      precioOferta: 3399,
      precioNormal: 4999,
      calificacion: 5,
      caracteristicas: {
        procesador: "i7",
        tarjetaDeVideo: "GTX 1650",
        discoDuro: "No tiene",
        discoDuroSolido: "256gb",
      },
    },
  ];

  const filtrarLaptops = laptops.filter((laptop) => laptop.caracteristicas.procesador === 'i3' && laptop.precioOferta < 2000);

  console.log("Resultado", filtrarLaptops);


// foreach
//? crear un nuevo array basado en el array laptops y agregar una nuevo atributo, llamado vendido.
//! vendido === true | false


const arrayLaptops = [];
laptops.forEach((laptop, index) => {
    laptop.vendido = index % 2 === 0 ? true : false;
    arrayLaptops.push(laptop);
});

console.log(arrayLaptops);


/**
 * * For
 * * While
 * * map
 * * forEach
 * * filter
 * * find
 * * findIndex
 * 
 * ! revisar mas bucles
 * ? for in
 * ? for of
 * ? do while
 * ? flat
 * ? flatmap
 * ? every
 * ? object.entries
 */


console.log("Estoy en find", nombreDesderepaso);



