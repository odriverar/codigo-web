const URL_STAR_WARS = "https://swapi.dev/api/people";
const URL_SW_IMAGES = "https://akabab.github.io/starwars-api/api/all.json";

const getDataFromStarWars = async () => {
    const response = await fetch(URL_STAR_WARS);
    const data = await response.json();
    // console.log(data.results);
    getImageFromStarWars(data.results);
}

const getImageFromStarWars = async (actors) => {
    const response = await fetch(URL_SW_IMAGES);
    const imagenes = await response.json();

    actors.map( (actor) => {
        const resultado = imagenes.filter((imagen) => imagen.name === actor.name);

        // console.log(actor.name, resultado[0].image);

        actor.imageFromAPI = resultado[0].image;
        // return {
        //     ...actor,
        //     [actor.image]: resultado.image,
        // };

    });

    console.log(actors);
};

getDataFromStarWars();