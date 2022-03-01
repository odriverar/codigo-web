/**
 * CHart de tipo bar
 */

const contenedorBarChart = document
    .querySelector("#bar-chart")
    .getContext("2d");

const barChart = new Chart(contenedorBarChart, {
  type: "bar",
  data: {
    labels: [
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
      "Domingo",
    ],
    datasets: [
      {
        label: "Numero de usuarios por dia",
        data: [20, 40, 10, 100, 50, 75, 200],
        borderWidth: 3,
        borderColor: "Red",
        backgroundColor: ["#BCDCF2", "#f01", "#ba1", "#dac", "#eda", "#a34", "rgba(0, 255, 275, 0.7)"],
      },
    ],
  },
});

const dataForChart = {
  labels: ["Computadoras", "Celulares", "Refrigeradoras", "Parlantes"],
  datasets: [
    {
      label: "PRODUCTOS ELECTRONICOS",
      data: [100, 230, 520, 267],
      backgroundColor: [
        "#BCDCF2",
        "#f01",
        "#dac",
        "rgba(0, 255, 275, 0.7)",
      ],
    },
  ],
};

const config = {
  type: "doughnut",
  data: dataForChart,
};

const contenedorDoughnutChart = document
    .querySelector("#doughnut-chart")
    .getContext("2d");

const doughnutChart = new Chart(contenedorDoughnutChart, config);

const configLine = {
  type: "line",
  data: dataForChart,
};

const contenedorLinealChart = document.querySelector("#lineal-chart").getContext("2d");

const linealChart = new Chart(contenedorLinealChart, configLine);


const containerBubblechart = document.querySelector("#bubble-chart").getContext("2d");

dataForChart.datasets[0].data = [
  {
    x: 20,
    y: 30,
    r: 15,
  },
  {
    x: 40,
    y: 10,
    r: 10,
  },
];

const configBubble = {
    type: "bubble",
    data: dataForChart,
};

const bubbleChart = new Chart(containerBubblechart, configBubble);



const containerPolarChart = document.querySelector("#polar-chart").getContext("2d");

dataForChart.datasets[0].data = [300, 149, 321, 278];

const configPolar = {
    type: "polarArea",
    data: dataForChart,
}

const polarChart = new Chart(containerPolarChart, configPolar);

const containerRadarChart = document.querySelector("#radar-chart").getContext("2d");



const configRadar = {
    type: "radar",
    data: dataForChart,
}

const radarChart = new Chart(containerRadarChart, configRadar);





const containerScatterChart = document.querySelector("#scatter-chart").getContext("2d");

dataForChart.datasets[0].data = [
  {
    x: -10,
    y: 0,
  },
  {
    x: 0,
    y: 10,
  },
  {
    x: 10,
    y: 5,
  },
  {
    x: 0.5,
    y: 5.5,
  },
];


const configScatter = {
    type: "scatter",
    data: dataForChart,
}

const scatterChart = new Chart(containerScatterChart, configScatter);