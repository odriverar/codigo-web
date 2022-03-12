// Este sera el archivo donde vamos a traba

import express from "express";
//* Ahora vamos a importa la variable movies
//? para importar una variable de otro archivo usamos import

import cors from "cors";
import { arrayMovies } from "./movies.js";

const app = express();
// Esto sirve para poder leer los json que envia el cliente
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
// Para poder crear nuestras rutas.
// Para este ejemplo vamos a cerar un archivo llamado movies.js
// donde guardaremos un array de objetos.

// Vamos a crear una ruta movies, para poder listar nuestras peliculas.

app.get("/movies", (req, res) => {
    res.json(arrayMovies);
});

// * Ahora realizaremos la funcion que busca una pelicula por ID
// ! Recuerden que debemos recibir un id y en base al ID buscar la pelicula.

app.get("/movies/:id", (req, res) => {
    //* La forma de obtener el valor es con request
    const id = req.params.id;
    const movie = arrayMovies.find((movie) => movie.id === +id);
    res.json(movie);
})

app.post("/movies", (req, res) => {
    // ? En donde se guarda la data enviada por el cliente
    // ! se guarda en req
    //  * La forma en la cual accedemos en la data que envie el cliente usando BODY es con request.body

    const data = req.body;
    const id = arrayMovies.length + 1;
    data.id = id;

    //? como agrego un elemento a mi array
    arrayMovies.push(data);
    res.json({
        message: "Todo bien",
    })
})

app.put("/movies/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const movieIndex = arrayMovies.findIndex((movie) => movie.id === +id);
    // Debemos agregar el id al data
    data.id = +id;
    // Debemos actualizar la informacion de nuestro elemento, y para ellos vamos a buscarlo por su indice.
    //! [...data] => sirve para copiar un elemento, es decir 
    arrayMovies[movieIndex] = data;
    res.json({
        message: "Todo bien",
    });
})

app.delete("/movies/:id", (req, res) => {
    const id = req.params.id;
    //* Retorna un array donde estamso fuiltrando los elementos que sean distinto a un id  
    arrayMovies.filter(movie => movie.id !== +id);

    res.json({
        message: "Todo bien",
    });
})


app.listen(3000, () => console.log("Servidor iniciado en http://localhost:3000"));