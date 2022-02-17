//** Existen metodos (functions) que nos permiten leer arrays y objetos de una forma sencilla */
//** .map esta map es un bucle que sirve para poder leer arreglos y lo que se hace  */
//** especial es que este retorna un array */

const productos = [
    {
        name: "Laptop",
        price: 1500
    },
    {
        name: "Celular",
        price: 2300
    },
    {
        name: "Monitor",
        price: 1000
    },
];

productos.map((producto, index) =>{
    console.log('Producto', producto);
});

const nombres = ["Juan", "Pedro", "Maria", "Jose"];

nombres.map((nombre, index) => {
    console.log('Nombre', nombre);
})

const places = [
    {
        name: "Tecsup",
        location: "San Salvador"
    },
    {
        name: "Codigo Facilito",
        location: "Lima"
    },
    {
        name: "Platzy",
        location: "Bogota"
    },
];

places.map((place) => {
    console.log(place.name);
})


//* veamos el return en el map

const numeritos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const operacionProducto = numeritos.map((numerito) =>{
    //* el map tiene la propiedad de retornar valores en cada iteracion
    return numerito * 2;
})

console.log(operacionProducto);



// const productos = [
//     {
//         name: "Laptop",
//         price: 1500
//     },
//     {
//         name: "Celular",
//         price: 2300
//     },
//     {
//         name: "Monitor",
//         price: 1000
//     },
// ];

// TODOS: se quiere modificar el precio al doble

const preciosCyberWow = productos.map((producto) => {

    // return producto.price * 2
    return {
        name: `CyberWow ${producto.name}`,
        price: producto.price * 2,
    }
})

console.log(preciosCyberWow);


//* crear un array de numeros y luego hallemos el cubo del numero y guardarlo en una variable

const numerosCuadrados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = numerosCuadrados.map(numero => {
    // como es una sola linea se podria usar una function inline
    return Math.pow(numero, 3)
})

console.log(resultado)


const resultados2 = numerosCuadrados.map((numero) => Math.pow(numero, 3));

console.log(resultados2)


//* Escribir un programa que muestre por pantalla la tabl de multiplicar del 1 al 10

const imprimirTabla = (numero) => {
    // Esta instancia esta creando un array vacio de 10 elementos.
    const arrayDiez = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    arrayDiez.map((table, index) => {
        console.log("Producto", numero * (index + 1));
    })

    // console.log(arrayDiez)
}

imprimirTabla(9)
