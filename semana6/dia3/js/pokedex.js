/**
 * Logica para el pokedex
 */

const pokemonContainer = document.querySelector("#row-pokemons");
// html from modal
const pokemonName = document.querySelector("#pokemon-name");

const modalPokemon = document.querySelector("#modalContent");

// vamos a crear una funcion para obtener los datos
const obtenerPokemones = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const data = await response.json();

  setPokemonsInView(data.results);
};

// vamos a crear a una funcion la cual se encargue de poder pintar nuestros pokemones
const setPokemonsInView = (results) => {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

  results.map(async (result, index) => {
    // Por cada iteracion crea la variable html con el contendi de div que ocupa el
    // 25% porque usa col-md-3
    // dentro creo otro con la clase card y dentro del creo al card-body

    // cuando index = 0 + 1
    // index = 1 + 1
    // !aca usamos await porque getColorPokemon es una funcion async por
    // !por ende no se cuanto demore en reponder
    const bgColor = await getColorPokemon(index + 1, 1);
    const ftColor = bgColor === undefined ? "text-black" : "text-white";

    const html = `
      <div class="col-md-3 mt-3">
        <div class='card' style='background-color: ${bgColor};'>
          <img 
            class='card-img-top mt-5'
            width='100'
            height='100'
            src='${imgUrl}${index + 1}.svg'
          >
          <div class='card-body text-center'>
            <h6 class='text-title ${ftColor}'># ${index + 1} </h6>
            <h4 class='text-title'>${result.name}</h4>
          </div>
          <button class='btn btn-primary' onclick='obtenerDetallePokemon("${
            result.url
          }")' data-bs-toggle='modal' data-bs-target='#modalPokemon'>ver detalle</button>
        </div>
      </div>
    `;
    // despues de crear el html basico concatenamos el html el container
    pokemonContainer.innerHTML += html;
  });
};

// cuando debe ejecutarse?
const obtenerDetallePokemon = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("detalle", data);

  const colorFondo = await getColorPokemon(data.id, 2);

  console.log(colorFondo);

  modalPokemon.style.backgroundColor = colorFondo;

  pokemonName.innerHTML = data.name;
};

// llamamos a la funcion
obtenerPokemones();

const color = {
  red: "rgba(251, 125, 36, 0.5)",
  green: "rgba(155, 204, 80, 0.5)",
  blue: "rgba(69, 146, 196, 0.5)",
  brown: "rgba(165, 42, 42, 0.5)",
  purple: "rgba(128, 0, 128, 0.5)",
  pink: "rgba(255, 192, 203, 0.5)",
  yellow: "rgba(255, 255, 0, 0.5)",
  gray: "rgba(128, 128, 128, 0.5)",
};

const colorFondo = {
  red: "rgb(251, 125, 36)",
  green: "rgb(155, 204, 80)",
  blue: "rgb(69, 146, 196)",
  brown: "rgb(165, 42, 42)",
  purple: "rgb(128, 0, 128)",
  pink: "rgb(255, 192, 203)",
  yellow: "rgb(255, 255, 0)",
  white: "rgb(255, 255, 255)",
  gray: "rgb(128, 128, 128)",
};

const getColorPokemon = async (id, idColor) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );

  const data = await response.json();
  
  let resColor = color[data.color.name];
  // Problema el color que nos devuelve el API esta feo
  // para poder utilizar un color como alternativa
  // creamos un diccionario de color donde el key sera el color
  // que devuevla nuestro API

  // si data.color.name = red
  // buscar dentro del objeto color por el key
  // como el key es red esto retorna rgba(255, 48, 50, 0.7)
  // console.log(data.color.name);
  if (idColor === 2) {
    resColor = colorFondo[data.color.name];
  }
  return resColor;
};
