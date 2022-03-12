/**
 *  * Este archivo será l aprueba de como poder ejecutar un archivo JS de la consola / terminal
 *  ? Ahora vamos a ver como utilizar la libreria instalada date-format
 *  ! La forma antigua era usando require
 *  * const dateFormat = require("date-format");
 *  ? El nuevo standar es usando import
 */
// Luego de importar el format, podemos utilizarlo
import format from "date-format";
// Estamos importando express
import express from "express";

const fechaActual = new Date();

const fechaFormatead = format.asString("dd/MM/yyyy", fechaActual);

console.log(fechaFormatead);

// const num1 = 10;
// const num2 = 20

// const suma = num1 + num2;

// console.log("La suma es", suma);


/**
 *  * Para poder usar express debe ser inicializado
 *  * La forma en la cual vamos a inicializar express es llamado a su fucnion 
 */

const app = express();
//* Una vez inicializado podemos crear rutas en la cual queremos mostrar algo

//* En express podemos usar los metodos http para poder mostrar algo 
// ! En express cuando creamos una ruta esta tiene un arrow function el cual contiene un req: Request res: Response
// ? Request: Es la informacion que estamos obteniendo del cliente.
// ? Response: Lo que el servidor responde.
app.get("/", (req, res) => {
    // * Nuestro server tiene muchas formas de responder
    // ! Por ejemplo un API suele responder en formato  JSON y ademas brinda un status 
    // ? Status: 200, 201
    // ! Res tiene la propiedad de poder responder en ese formato JSON
    res.json({
        message: "Hola mundo",
        error: "No hay error",
    });
});

app.get("/movies", (req, res) => {
    res.json({
      data: [
        {
          id: 1,
          name: "Batman",
        },
        {
          id: 2,
          name: "Superman",
        },
        {
          id: 3,
          name: "Iron Man",
        },
      ],
    });
});

/**
 *  * Para poder acceder a las rutas de nuestro server debemos usar puertos
 *  * por ahora local
 *  TODOS: 1.- LOS PUERTOS SON PUERTAS DE UN DOMINIO O IP
 *  TODOS: 2.- El puerto mas usado en express es el port: 3000
 *  ? Para poder decirle a nuestri server que escuche en ese port debemos llamar la funcion listen.
 */

app.listen(3000, () => console.log("El server inicio"));

/**
 *  * Esto quiere decir que ahora podemos usar el port 300 de mi conputador
 *  * para entrar a ese port podemos usar dos formas
 *  TODOS: 1.- localhost => http://localhost:3000
 *  TODOS: 2.- Ip local => 127.0.0.1:3000
 */
