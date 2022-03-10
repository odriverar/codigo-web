// Obtener el valor de los inputs
const btnCrear = document.querySelector("#btn-crear");
const inputs = document.querySelectorAll("input");
const selectGender = document.querySelector("#select-gender");
// const URL = "https://6226bedf2dfa5240180c3e36.mockapi.io/fiction_movies";
// const URL = "https://62281ff09fd6174ca81b97f8.mockapi.io/api/v1/movies";

let valueGender = "";

selectGender.onchange = function (event) {
    valueGender = event.target.value;
    selectGender.style.border = "1px solid #ccc";
};

btnCrear.onclick = async function (event) {
    // Obtener el valor de los inputs
    event.preventDefault();
    // ahora debemos validar que los inputs y el select esten llenos.

    const values = {};

    //Vamos a crear una variable que sea true y si en el forEach hay algun campo vacio esta pasa a ser false

    let validacionInputs = true;

    inputs.forEach((input) => {
        input.style.border = "1px solid #ccc";
        if (input.value === "") {
            validacionInputs = false;
            input.style.border = "1px solid #f01";
        }
        values[input.name] = input.value;
        // console.log(input.value)
    });

    if (valueGender === "") {
        validacionInputs = false;
        selectGender.style.border = "1px solid #f01";
    }

    if (!validacionInputs) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Debe completar los campos",
        });
        return;
    }

    // console.log(values)
    // console.log(valueGender);

    // objeto que sera enviado al API para cerar una nueva pelicula
    const movie = {
        name: values.movie_name,
        director: values.movie_director,
        wallpaper: values.movie_photo,
        gender: valueGender,
        video_link: values.movie_video,
    };

    // Ahora vamos a ejecutar una peticion con el motodo POST porque vamos a crear algo
    // Sabemos que por default el fetch es de metodo GET
    // ahora para cambiarlos a un POST necesitamos pasarle un objeto indicando su METODO
    // al decirle que method ahora es POST automaticamente podremos pasarle un body
    // body: Es el objeto que vamos a enviar al servidor para que pueda ser creado
    // body solo recibe strings

    /**
     *  * headers:{} son la cabecera de una peticion, debemos indicarle que la informacion que vamos a enviar debe ser de formato JSON
     *  ! Obligatorio para un PUT, POST y DELETE
     */

    // Recuerden que es recomendable tener un tryyCartch cuando hagamos una solicitud.
    // try {
    //     const response = await fetch(URL, {
    //         method: "POST",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(movie),
    //     });

    //     const data = await response.json();

    //     Swal.fire({
    //         icon: "success",
    //         title: "",
    //         text: "Se creo la pelicula"
    //     })

    //     // inputs.forEach((input) => {
    //     //     input.value = "";
    //     // });

    //     document.querySelector("form").reset();


    //     console.log(data)
    // } catch (error) {
    //     Swal.fire({
    //         icon: "error",
    //         title: "Error",
    //         text: error.message,
    //     })
    // }

    await storeMovie(movie);
};
