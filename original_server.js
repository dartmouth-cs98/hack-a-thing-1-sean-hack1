const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = 'cbc49976e5b60cda78186011be0e3e2c';

const fs = require("fs");
const chartExporter = require("highcharts-export-server");
// Initialize the exporter
chartExporter.initPool();
// Chart details object specifies chart type and data to plot
const chartDetails = {
   type: "png",
   options: {
       chart: {
           type: "bar"
       },
       title: {
           text: "Cities by Weather"
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
               data: [
                   {
                       name: "a",
                       y: 100
                   },
                   {
                       name: "b",
                       y: 20
                   },
                   {
                       name: "c",
                       y: 30000
                   }
               ]
           }
       ]
   }
};

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});

        chartDetails.options.series[0].data[0].y = 69; 

        chartExporter.export(chartDetails, (err, res) => {
           // Get the image data (base64)
           let imageb64 = res.data;
           // Filename of the output
           let outputFile = "bar.png";
           // Save the image to file
           fs.writeFileSync(outputFile, imageb64, "base64", function(err) {
               if (err) console.log(err);
           });
           console.log("Saved image!");
           chartExporter.killPool();
        });

      }
    }
  });
})
