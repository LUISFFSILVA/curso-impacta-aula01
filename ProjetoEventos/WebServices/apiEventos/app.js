const express = require('express');
const load = require('express-load');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
global.db = mongoose.connect('mongodb://localhost:27017/neventos')
;
load('models')
.then('controllers')
.then('routes')
.into(app);

app.listen(3200, function () {
  console.log('Servidor no ar!!');
});