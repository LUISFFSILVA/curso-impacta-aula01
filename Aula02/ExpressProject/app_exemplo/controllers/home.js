module.exports = function(){
    var HomeController = {
        index: function(requisicao, resposta){
            resposta.render('home/index', {titulo: "Titulo do Express", subtitulo:"Teste subtitulo"})
        }
    }

    return HomeController;
}