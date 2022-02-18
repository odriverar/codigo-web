//* map => crea un nuevo array con los elementos del array original 
//* foreach => itera sobre cada elemnto del array 

const mascotas = [
    {nombre: "Pulga", edad: 2},
    {nombre: "Pug", edad: 12},
    {nombre: "Gatito", edad: 15},
    {nombre: "Perro", edad: 4},
    {nombre: "Araña", edad: 8},
    {nombre: "Burro", edad: 1},
    {nombre: "Conejo", edad: 5},
]

const mascotasEdadSumada = mascotas.map((mascota) => {
    return {
        nombre: mascota.nombre,
        edad: mascota.edad + 2,
    };
});

console.log(mascotasEdadSumada);

const nuevoArregloMascotas = [];


mascotas.forEach((mascota) => {
    nuevoArregloMascotas.push({
        nombre: mascota.nombre,
        edad: mascota.edad + 2,
    });
});

console.log("mascotasEdadSumada", nuevoArregloMascotas);

console.log("=========== Solución alterna ===========");
const nuevasMascotas = mascotas.map((mascota) => mascota.edad + 2);

console.log(nuevasMascotas);


// const mascotasMayores = mascotas.map((mascota, index) => {
//     if (mascota.edad < 5){
//         // hay un aopcion para eliminar elemntos de un array
        
//     }
//     return mascota;
// })

// console.log("Mascotas mayores", mascotasMayores);


//* quiero imprimir solo las mascotas mayore de 5 años
//* filter es un bucle hermano de map, porque filtra al igual que map y retorna un array

const mascotasMayores = mascotas.filter((mascota) => mascota.edad > 5);
console.log("mascotasMayores", mascotasMayores);

//! usando filter, se quiere filtrar a las mascotas que tengan edad par;

const mascotasEdadPar = mascotas.filter((mascota) => mascota.edad % 2 === 0);
console.log("mascotaEdadPar", mascotasEdadPar);


// const filtrandoMascotas = mascotas.filter((mascota, index) => {
//     if (mascota.edad > 5) {

//         return "Mascota mayor a 5";
//     } else {
//         return "Mascota menor a 5";
//     };
// });

// console.log(filtrandoMascotas);

const cursos = ["HTML", "CSS", "JS", "PHP", "Python"];

const cursosFiltrados = cursos.filter(curso => curso === "CSS" || curso === "JS");
console.log(cursosFiltrados);

const arregloCursos = [
    {
        nombre: "React JS",
        tec: "JS",
    },
    {
        nombre: "django",
        tec: "Python",
    },
    {
        nombre: "Angular",
        tec: "JS",
    },
    {
        nombre: "Flask",
        tec: "Python",
    },
    {
        nombre: "Laravel",
        tec: "PHP",
    },
]

const filtrarCursos = (tec) => {
    return arregloCursos.filter((curso) => curso.tec === tec);
}

console.log(filtrarCursos("JS"));
console.log(filtrarCursos("Python"));
console.log(filtrarCursos("PHP"));



const nombreDesderepaso = 'Nombre desde repaso'