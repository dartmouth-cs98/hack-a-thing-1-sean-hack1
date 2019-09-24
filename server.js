const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()
const apiKey = 'cbc49976e5b60cda78186011be0e3e2c';
const fs = require("fs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

// Set up chart exporter for saving weather data png
const chartExporter = require("highcharts-export-server");
chartExporter.initPool();
const chartDetails = {
   type: "png",
   options: {
       chart: {
           type: "bar"
       },
       title: {
           text: "Cities by Weather"
       },
       xAxis : {
        categories: [],
        labels: {
          enabled: true
        }
       },
       plotOptions: {
           pie: {
               dataLabels: {
                   enabled: true,
                   format: "<b>{point.name}</b>: {point.y}"
               }
           }
       },
       series: [
           {
               data: []
           }
       ]
   }
};

// Render initial view
app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null, testname: '/images/bar.png'});
})

// Listen on port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

// Get the weather information for the desired cities 
app.post('/', function (req, res) {
  // Split by commas in order to query each city 
  var cities = req.body.city.split(", ");
  var all_cities = [];
  var all_temps = [];

  // Query for each city 
  for (const element of cities) {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${element}&units=imperial&appid=${apiKey}`
    request(url, function (err, response, body) {
      if(err){
        console.log("Error, please try again!");
      } else {
        let weather = JSON.parse(body)
        if(weather.main == undefined){
          console.log("Error, please try again!");
        } else {
          // Record city and temperature       
          all_temps.push(weather.main.temp);
          all_cities.push(element);

          // If done with all requests, save the plot 
          if(all_cities.length == cities.length) {
            chartDetails.options.series[0].data = all_temps;
            chartDetails.options.xAxis.categories = all_cities;
            chartExporter.export(chartDetails, (err, res) => {
              // Get the image data
              let imageb64 = res.data;
              // Filename of the output
              let outputFile = "public/images/bar.png";
              // Save the image to file
              fs.writeFileSync(outputFile, imageb64, "base64", function(err) {
                if (err) console.log(err);
              });
              console.log("Saved image!");
              chartExporter.killPool();
            });
          }
        }
      }
    });
  }

  // Need to wait for the image to save, but don't know how. fs.writeFileSync is supposed to be synchronous!!!
  res.render('index', {weather: "Weather data for " + cities + " saved!", error: null, testname: '/images/bar.png'});
          
})
