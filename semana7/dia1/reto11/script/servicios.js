/**
 *  * Este archivo se va a encargar de gestionar mis servicios get, post, put or delete.
 */

// const URL = "https://62281ff09fd6174ca81b97f8.mockapi.io/api/v1/movies";
// const URL = "https://622ab10c14ccb950d222baf9.mockapi.io/api/v1/movies";

const URL = "http://localhost:3000/movies";

// ! funcion para listar las peliculas.

const getMovies = async () => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
};

const storeMovie = async (movie) => {
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movie),
        });

        const data = await response.json();

        Swal.fire({
            icon: "success",
            title: "",
            text: "Se creo la pelicula",
        });

        document.querySelector("form").reset();

        console.log(data);
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: error.message,
        });
    }
}

// Sera para poder obtener el detalle de una pelicula
const getMovieDetail = async (id) => {
  try {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message,
    });
  }
};

// Para poder actualizar las peliculas
// recibe el id para buscar que pelicula actualizar
// recibe que es el objeto con la informacion que actualizara
const updateMovie = async (id, movie) => {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message,
    });
  }
};

const deleteItem = async (id) => {
    try {
        const response = await fetch(`${URL}/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        await response.json();
        Swal.fire({
            icon: "success",
            title: "",
            text: "Registro eliminado"
        })
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: error.message,
        });
    }
};