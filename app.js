var express = require('express');
require('dotenv').config();

var app = express();

app.get('/', function (req, res) {
  res.send('hello jenkinsss');
});

console.log(process.env.PORT);
app.listen(process.env.PORT || 5000);

module.exports = app;
