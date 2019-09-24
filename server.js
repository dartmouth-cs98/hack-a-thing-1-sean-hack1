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
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.post('/', function (req, res) {
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var request = new XMLHttpRequest();
  request.open('GET', 'https://www.googleapis.com/calendar/v3/users/me/calendarList', true)

  // var data = JSON.parse(this.response)
  console.log(this.response)

  request.onload = function() {
    // let result = JSON.parse(body);
    res.render('index', {weather: null, error: this.response});
  }

  // Send request
  request.send()
})
