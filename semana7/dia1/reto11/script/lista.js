
const tableContainer = document.querySelector("#table-container");


// Boton para actualizar

const btnActualizar = document.querySelector("#btn-actualizar");


movieName = document.querySelector(".movie-name")
movieDirector = document.querySelector(".movie-director")
movieGender = document.querySelector(".movie-gender")
moviePhoto = document.querySelector(".movie-photo")
movieVideo = document.querySelector(".movie-video")

let idMovie = "";

const getDataFromMovie = async (movieId) => {
    idMovie = movieId;
    const movie = await getMovieDetail(movieId);

    movieName.value = movie.name;
    movieDirector.value = movie.director;
    movieGender.value = movie.gender;
    moviePhoto.value = movie.wallpaper;
    movieVideo.value = movie.video_link;
};

btnActualizar.onclick = async function () {
    // Primero debemos contruir nuestro objeto
    const movie = {
      name: movieName.value,
      director: movieDirector.value,
      wallpaper: moviePhoto.value,
      gender: movieGender.value,
      video_link: movieVideo.value,
    };

    

    await updateMovie(idMovie, movie);

    swal.fire({
        icon: "success",
        title: "Todo bien",
        text: "Se actualió la pelicula",
    });

    //Vamos a actualizar la pagina 
    window.location.reload();
}

const renderMovies = async () => {
    const movies = await getMovies();

    movies.map((movie) => {
        const html = `
                    <tr id='row_${movie.id}'>
                        <td>${movie.name}</td>
                        <td>${movie.director}</td>
                        <td>${movie.gender}</td>
                        <td><a target="_blank" href="${movie.video_link}">Ver video</a></td>
                        <td>
                            <div>
                                <button onclick="getDataFromMovie(${movie.id})" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalMovie">
                                    <i class="fa fa-edit"></i>
                                </button>
                                <button onclick="deleteMovies(${movie.id})" class="btn btn-danger">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
        `;
        tableContainer.innerHTML += html;
    })
};

// Vamos a crear una funcion que se encargue de eliminar las peliculas

const deleteMovies = async (id) => {

    const result = await Swal.fire({
        title: "Esta seguro(a)?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    });

    if (result) {
        await deleteItem(id);
        const row = document.querySelector(`#row_${id}`);
        row.remove();
    }
};


renderMovies();