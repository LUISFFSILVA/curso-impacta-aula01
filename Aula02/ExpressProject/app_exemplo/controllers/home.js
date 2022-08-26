module.exports = function(app){
    var Usuario = app.models.usuarios
    var HomeController = {
        index: function(requisicao, resposta){

            var nome = 'usuario novo'
            var email = 'email@impacta.com'
            var usuario = {'nome': nome,'email':email}

            var resultado
            Usuario.create(usuario, function(erro, usuario){
                if (erro){
                    resultado = 'Ocorreu um erro ao incluir usuario'
                }
                else {
                    resultado = 'Usuario incluido com sucesso'
                }
            })

            resposta.render('home/index', {titulo: "Titulo do Express", subtitulo:"Teste subtitulo", resultado})
        }
    }

    return HomeController;
}