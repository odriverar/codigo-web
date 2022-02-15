//? un objeto es una entidad independiente, este tiene propiedades y atributos

//** Atributos de un carro*/
//! numero de puertas
//! color 
//! placa
//! motor
//! cilindro
//! HP

//? UN OBJETO ESTA COMPUESTO POR UN KEY (LLAVE) Y UN VALUE (VALOR)

//? Creemos un objeto carro

const carro = {
    color: "Azul",
    motor: 1.2,
    modelo: "GTR",
    marca: "Nissan",
    nuevo: true,
}

//? Objeto persona
const persona = {
    edad: 30,
    nombre: "Juanito",
    sexo: "Masculino",
    talla: 1.75,
    estadoCivil: "soltero",
    mayorDeEdad: true,
    donanteDeOrganos: true,
    dni: "78654356",
    tatuaje: true,
    nacionalidad: "Peruano"
};

console.log("Nombre", persona.nombre);
console.log("DNI", persona.dni);

persona.celular = "989898989";

console.log(persona);

//! segunda forma de agregar un elemento.
//? agregar la profecion de una persona
persona["profesion"] = "Ingeniero";

console.log("Profesion", persona.profesion);

//? Creando objetos de la forma antigua.
//? Instanciando a la clase object
//? La clase object en JS es una clase la cual permite que esta variable sea un objeto

const casa = new Object();
casa["color"] = "Rosada";
casa.pintura = "Negro"

console.log("Casa:", casa);

//! tercera forma de crear un objeto, sirve para poder definir los keys
const laptop = new Object(),
    modelo = "MacBook Pro",
    pero = 2.5,
    color = "gris",
    ram = "16 Gb",
    memoria = 512

laptop["tamano"] = "16";
laptop[color] = "Red";

console.log("Laptop", laptop);


// crear un p

const celular = {
    model: "Iphone 11",
    flexible: false,
    tamano: 6.1,
    gama: "Alta",
    color: "Gris",
    camaras: 2,
    precio: "$ 700"
}

celular.camaras = 4;
celular.memoria = "128 Gb";

console.log("Celular", celular);

// Crear una funcion la cual retorne el nombre la memoria y precio del objeto celular

const retornarDatos = celularObjeto => {
    return `El modelo es ${celularObjeto.model} y tiene ${celularObjeto.memoria} de espacio a tan solo ${celularObjeto.precio}`
};

console.log(retornarDatos(celular));

//? Destructuración de objetos

const mostrarDetalleCelular2 = (celularObjeto) => {
    const {modelo, memoria, precio} = celularObjeto;

    return `Èl modelo es ${modelo} y tiene ${memoria} de espacio a tan solo ${precio}`
}


console.log("Objeto celular 2", mostrarDetalleCelular2(celular));

const usuario = {
    nickName: "loquitoProgramador",
    email: "loqui@gmail.com",
    password: "********",
    carnetVacunacion: true,
    location: "Perú",
    level: "pro",
    edad: 18,
}

//? crear una funcion que valide el usuario es de Perú
//? si es de Perú imprima si nickName juanto a su nivel

const validarUsuario = usuarioValidar => {
    const {nickName, location, level} = usuarioValidar;
    if (location === "Perú") {
        return `Su usuario es ${nickName} y su nivel es ${level}`;
    } else {
        return `Oye tu ${nickName} no eres Peruano`;
    }
};

console.log(validarUsuario(usuario))


