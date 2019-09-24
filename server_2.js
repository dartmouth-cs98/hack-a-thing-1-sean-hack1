const express = require('express');
const bodyParser = require('body-parser');
// const request = require('request');
const app = express()

const apiKey = 'cbc49976e5b60cda78186011be0e3e2c';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});

  // var ctx = document.getElementById("myChart").getContext('2d');
  // var myChart = new Chart(ctx, {
  //     type: 'line',
  //     data: {
  //         labels: ["Tokyo", "Mumbai", "Mexico City",  "Shanghai", "Sao Paulo",  "New York", "Karachi","Buenos Aires", "Delhi","Moscow"],
  //         datasets: [{
  //             label: 'Series 1', // Name the series
  //             data: [500, 50, 2424, 14040,  14141,  4111, 4544, 47, 5555, 6811], // Specify the data values array
  //             fill: false,
  //             borderColor: '#2196f3', // Add custom color border (Line)
  //             backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
  //             borderWidth: 1 // Specify bar border width
  //         }]},
  //     options: {
  //       responsive: true, // Instruct chart js to respond nicely.
  //       maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
  //     }
  // });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


