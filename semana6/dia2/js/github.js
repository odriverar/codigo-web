/**
 * * API (Application Programming Interface)
 * * Es un servicio el cual puede proveer informacion o tambien puede crearla
 * * Para este caso vamos a usar el API de github la cual al pasarle un usuario
 * * esta nos devulve la informacion
 */

// * En js existe una funcion la cual se encarga de poder hacer una peticion a un URL
// TODO: fetch()
//* Es una funcion nativa de JS
// * Existen varios tipos de peticiones donde las principales son
// ? GET => Sirve para obtener informacion
// ? POST => Sirve para crear datos
// ? PUT => Sirve para actualizar datos
// ? DELETE => Sirve para eliminar

//* Funcion async
//* La funciones async fueron creadas para poder ejecutar algo y en caso la ejecucion de esto
//* demore mas de lo normal se espere para poder ejecutar el siguiente

//? https://api.github.com/users/WillyPAtino
//* HAY UN TIEMPO DE ESPERA el cual no sabemos cuanto es, ahora como la ejecucion de la peticion a la url
//* no es automatica debemos decirle a nuestra funcion que se espere un poquito antes de pasar
//* a la siguiente linea

//! Estructura de una funcion async
// al aumentar el async estamos convirtiendo nuestra funcion a un funcion async
// * async function obtenerDatos() {}

//* const obtenerDatosGit = async () => {};

//* Existe una palabra clave la cual le dira al codigo que se espere
// * await =>

const imageProfile = document.querySelector("#img-profile");

const githubName = document.querySelector("#github-name");
const githubBio = document.querySelector("#github-bio");
const githubUserName = document.querySelector("#github-username");
const githubJoined = document.querySelector("#github-joined");
const githubRepos = document.querySelector("#github-repos");
const githubFollowers = document.querySelector("#github-followers");
const githubFollowing = document.querySelector("#github-following");
const githubLocation = document.querySelector("#github-location");
const githubTwitter = document.querySelector("#github-twitter");
const githubUrl = document.querySelector("#github-url");
const githubBuild = document.querySelector("#github-build");


const githubActionSearch = document.querySelector("#github-action-search");
const githubInputSearch = document.querySelector("#github-search");

githubActionSearch.onclick = () => {
    const username = githubInputSearch.value;
    githubInputSearch.value = "";

      if (username === "") {
        Swal.fire({
          title: "Error",
          text: "Debe llenar el campo usuario",
          icon: "error",
        });
        return;
      }


    obtenerDatosGitHub(username);
}


// Vamos a dtectar el evento enter cuando estemos en el input

githubInputSearch.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
          obtenerDatosGitHub(event.target.value);
          event.target.value="";
        }
})


const obtenerDatosGitHub = async (username = "odriverar") => {
  //* En este ejemplo await esta haciendo lo siguiente
  //* Ejecuta fetch con la url y una vez que acabe la ejecucion de fetch recien haz el console.log
  const response = await fetch(`https://api.github.com/users/${username}`);
  //* es decir hasta que la ejecucion de fetch no termine no se ejecutura la siguiente linea
  //* ahora necesitamos leer la data que estamos solicitando
  //* para poder leer esta informacion debemos transformar el response a un JSON
  const data = await response.json();

  // data.message solo existe cuando el usuario no existe
  // y su valor es Not Found
  if (data.message === "Not Found") {
    Swal.fire({
      title: "Error",
      text: "No se encontro al usuario",
      icon: "error",
    });

    return;
  }

  setDataUser(data);
};

const formDate = (fecha) => {
    let yourDate = new Date(fecha);
    return yourDate.toISOString().split('T')[0];
}

const setDataUser = data => {
      imageProfile.src = data.avatar_url;
      githubName.innerHTML = data.name;
      githubBio.innerHTML = data.bio;
      githubUserName.innerHTML = `@${data.login}`;
      githubJoined.innerHTML = formDate(data.created_at);
      githubRepos.innerHTML = data.public_repos;
      githubFollowers.innerHTML = data.followers;
      githubFollowing.innerHTML = data.following;
      githubLocation.innerHTML = data.location;
      githubTwitter.innerHTML = data.twitter_username;
      githubUrl.innerHTML = data.html_url;
      githubBuild.innerHTML = `@${data.login}`;
}


//? Llamando a la function.

obtenerDatosGitHub();
