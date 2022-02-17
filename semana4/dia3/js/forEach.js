//** foreach tambien es un bucle */
//* Es como una mezcla del map y del for
//* pero a diferencia del map, este no retorna nada
//* Sirve para iterar un arreglo 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.forEach((numero, index) => {
    console.log(numero);
})


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

productos.forEach((producto, index) => {
    //dentro del foreach podemos hacer lo que querramos,
    console.log(producto);
})