module.exports = function (app) {
    const mongoose = require('mongoose')
    const Schema = mongoose.Schema

    const contato = Schema({
        cpf: String,
        nome: String,
        telefone: String
    })

    return mongoose.model('contatos', contato)
}