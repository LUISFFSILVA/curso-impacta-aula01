module.exports = function(app){
    var Schema = require("mongoose").Schema
    const mongoose = require('mongoose')

    var usuario = mongoose.Schema({
        nome: {type: String, required:true},
        email: { type: String, required: true}
    })
    return mongoose.model('usuarios', usuario)
}