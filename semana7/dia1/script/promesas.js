// Promesa sirve para poder ejecutar algo asyncrono 
// Cuando hacemos una peticion a una API esta tiene un tiempo de espera.
// Primera forma en la cual vamos a crear una promesa.
// La clase que se encarga de instanciar, se llama new promise

/**
 *  * resolve: Se encarga de retornar la respuesta cuando todo es correcto.
 *  * reject: Es el encargado de retornar respuesta cuando algo esta mal.
 *  ? Ambos son funciones que retornan algo
 *  ! Cuando creamos una promesa, esta no tiene return.
 */

const promesa = new Promise((resolve, reject) => {
    //  * Vamos a simular un tiempo de espera.
    setTimeout(() => {
        // Esta funcion va a esperar 3 segundos para poder retornar el resolve
        resolve("Todo bien amigos de Codigo...");
    }, 3000);
});

// Como hacemos para ejecutar la promesa
async function getDataFromPromesa() {
    const respuesta = await promesa;

    console.log(respuesta);
}

getDataFromPromesa();


/**
 *  * existe otra forma de poder leer otra promesa, esta forma existia del async await
 *  * .then() => entonces || luego
 *  ? .then(callback)
 *  ! un callback es una funcion que ejecuta algo en base a un resultado.
 */

promesa.then((respuesta) => {
    // cuando acabes de ejecutar la promesa obten su valor y guardalo en respuesta.
    console.log(respuesta)
})

/**
 *  ? Que pasaria si tenemos muchas peticiones anidadas.
 *  * Supongamos que tenemos 5 peticiones
 */

// async function peticiones () {
//     const primera = await fetch("primera");
//     const resPrimera = await primera.json(); 
//     const segunda = await fetch("segunda");
//     const resSegunda = await segunda.json();
//     const tercera = await fetch("tercera");
//     const restercera = await tercera.json();
//     const cuarta = await fetch("cuarta");
//     const rescuarta = await cuarta.json();
//     const quinta = await fetch("quinta");
//     const resquinta = await quinta.json();
// }

// peticiones.then(primera => {})
//     .then(Segunda => {})
//     .then(tercera => {})
//     .then(cuarto => {})
//     .then(quinta => {});

// Veamos una promesa con errores

const PromesaConError = (validacion) => {
    return new Promise((resolve, reject) => {
        if (validacion) {
            setTimeout(() => {
                resolve("La validación esta ok");
            }, 3000)
        } else {
            setTimeout(() => {
                reject(new Error("Error en la validacion"));
            }, 3000);
        }
    });
};

// Veamos como poder validar, usando el .then 

PromesaConError(false).then(respuesta => {
    console.log(respuesta);
    // Para poder detectar un erro, usamos el .catch()
    // si algo esta mal automaticamente, entra al .catch()
}).catch(error => {
    console.log(error.message);
});

const validacionAsync = async () => {
    // La forma en el cual podemos validar error en una funcion normal es con try catch
    try {
        // aca va a intentar obtener el resultrado de la peticion
        const respuesta = await PromesaConError(false);
        console.log("validacionAsync", respuesta);
    } catch (error) {
        console.log("validacionAsync", error.message);
    }
};

validacionAsync();

/**
 *  TODO: Recomendaciones:
 *      * Siempre que hagamos una peticion acompañeos de un try catch
 *  ? Ejemplo real
 */

// const getUserGitHub = async () => {
//     try {
//         const response = await fetch("");
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.log(error.message);
//     }
// }


/// Veamos un poco de lo que es un status code
/// Un status code es un numero que retorna una peticion
/// 200, 500, 401, 403, 404, 201, 512

/// Si una peticion nos devuelve un estado, que sea 
// * 200, 201 => Respuesta Ok.
// * 201 => ok; ademas significa que algo ha sido creado.
/// Si la url respponde un 500, 404, 512 => hay un error
// ? 404 => cuando no encuentra la URL, es decir la direccion no existe.
// ! 500 => Es el error que retorna cuando hay problema en el servidor.
// ! 512 => Es un error de espacio en el server.

/**
 *  * GET => Obtener datos (informacion)
 *  * POST => Enviar / Crear datos
 *  * PUT => Actualizar datos
 *  * DELETE => Borrar / Eliminar datos
 *  
 */