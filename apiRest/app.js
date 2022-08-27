const express = require('express')
const load = require('express-load')
const mongoose = require("mongoose")

var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


mongoose.connect('mongodb://localhost:27017/contatos')

load('models')
  .then('controllers')
  .then('routes')
  .into(app)

// app.listen(3000, function () {
//   console.log('ok')
// })
//    outro modo de fazer
app.listen(3000, () => {
  console.log('Servidor no ar')
})