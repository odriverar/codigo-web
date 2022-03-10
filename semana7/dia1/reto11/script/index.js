// const URL = "https://6226bedf2dfa5240180c3e36.mockapi.io/fiction_movies";
// const URL = "https://62281ff09fd6174ca81b97f8.mockapi.io/api/v1/movies";

// const getMovies = async () => {
//   try {
//     const response = await fetch(URL);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// ? Haremos una funcion que se encargue de argupar las peliculas segun el gender.
const groupMovies = async () => {
  /**
   *  * Podemos crear tres arreglos
   *    ! Arreglo 1 para las peliculas de marvel
   *    ! Arreglo 2 para las peliculas DC
   *    ! Arreglo 3 para las peliculas ramdon
   */

  const marvelMovies = [];
  const dcMovies = [];
  const ramdonMovies = [];

  // Vamos a obtener el arreglo de peliculas desde la funcion getMovies

  const movies = await getMovies();

  movies.forEach((movie) => {
    const { gender } = movie;
    if (gender === "Marvel") {
      marvelMovies.push(movie);
    } else if (gender === "DC") {
      dcMovies.push(movie);
    } else {
      ramdonMovies.push(movie);
    }
  });

  renderMovies(marvelMovies, "Marvel");
  renderMovies(dcMovies, "DC");

  renderMovies(ramdonMovies, "Ramdon");
};

const containerMovies = document.querySelector("#container-videos");

const renderMovies = (arregloPeliculas, titulo) => {
  const html = `
                    <div class="col-md-12 mt-3">
                        <h4 class="gender-movie">${arregloPeliculas.length > 0 ? titulo : ""
    }</h4>
                        <div class="row">
                            ${arregloPeliculas.map(
      (pelicula) =>
        `<div class="col-md-3">
                                <video onmouseover="this.play()" onmouseout="this.pause()" controls muted
                                    poster=${pelicula.wallpaper}
                                    class="video"
                                    src=${pelicula.video_link}></video>
                                <h5 class="title">${pelicula.name}</h5>
                                <p class="subtitle">${pelicula.director}</p>
                            </div>`
    )}
                        </div>
                    </div>
    `;

  containerMovies.innerHTML += html.replaceAll(",", "");
};

groupMovies();

// ? y otra funcion que se encargue de renderizar.
