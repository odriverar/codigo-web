//* Obtener el valor de los botones

// const btn0 = document.querySelector("#btn-0");
// const btn1 = document.querySelector("#btn-1");
// const btn2 = document.querySelector("#btn-2");
// const btn3 = document.querySelector("#btn-3");
// const btn4 = document.querySelector("#btn-4");
// const btn5 = document.querySelector("#btn-5");
// const btn6 = document.querySelector("#btn-6");
// const btn7 = document.querySelector("#btn-7");
// const btn8 = document.querySelector("#btn-8");
// const btn9 = document.querySelector("#btn-9");

// const btnElement = document.querySelectorAll("button");



// btnElement.onclick = function(event) {
//     console.log(event);
// }

const arrayNumeros = [];

function getValueFromButton(event) {
    let value = event.getAttribute("data-value");
    value = value.split("-")[1];
    console.log(value);

    arrayNumeros.push(value);
}

function calcular() {
    
}