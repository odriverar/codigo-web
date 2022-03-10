/**
 *  * Este archivo se va a encargar de gestionar mis servicios get, post, put or delete.
 */

const URL = "https://62281ff09fd6174ca81b97f8.mockapi.io/api/v1/movies";

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