/* Mold spending breakdown */

new Chart(document.getElementById("moldSpending"), {
    type: 'pie',
    data: {
      labels: ["Medical bills, laundry, property replacement and student relocations", "Cleaning electronics", "Cleaning personal property", "Crimson Card credits", "Additional pay for some Teter students"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [237629,180473.26,180473.26,61412,33000,8000]

        }
      ]
    },
    options: {
      legend: {
        display: true,
        position: 'top'
      }
    }
});

/* Temperatures */

new Chart(document.getElementById("tempsChart"), {
  type: 'line',
  data: {
    labels: ['June','July','August','September'],
    datasets: [{ 
        data: [72,78,73,63],
        label: "2011",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [72,81,73,64],
        label: "2012",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [71,72,72,67],
        label: "2013",
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [73,70,73,63],
        label: "2014",
        borderColor: "#e8c3b9",
        fill: false
      }, { 
        data: [72,74,71,68],
        label: "2015",
        borderColor: "#c45850",
        fill: false
      }, { 
        data: [74,75,76,69],
        label: "2016",
        borderColor: "#173A3A",
        fill: false
      }, { 
        data: [73,75,71,68],
        label: "2017",
        borderColor: "#1C6BB5",
        fill: false
      }, { 
        data: [74,74,74,69],
        label: "2018",
        borderColor: "#C68DA7",
        fill: false
      }, { 
        data: [71,76,73,71],
        label: "2019",
        borderColor: "#706869",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: false,
      text: '',
      legend: {
        display: true,
        position: 'right'
      }
    }
  }
});