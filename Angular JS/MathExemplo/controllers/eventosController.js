angular.module('eventos')
    .controller('Principal', [    //coloca o nome Principal na controller
        '$http',
        function ($http) {
            var self = this
            self.eventos = []
            $http.get('http://localhost:3200/eventos')
                .then(function (response) {
                    self.eventos = response.data
                }, function (error) {
                    console.log(`Erro: $(error)`)
                })
        }
    ])