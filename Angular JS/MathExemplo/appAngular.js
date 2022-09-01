angular.module('appAngular', [ngRoute])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', { template: '<h2>Pagina inicial</h2>' })
            .when('/lista', { templateUrl: 'checkbox02.html' })
            .otherwise({ redirectTo: '/' })
    }])
    .controller('Principal', [
        '$location',
        '$window',
        function ($location, $window) {
            var self = this

            self.cursos = [
                { descricao: 'JAVA', selecionado: 'SIM' },
                { descricao: 'PHP', selecionado: 'SIM' },
                { descricao: '.NET', selecionado: 'NÂO' }
            ]

            self.mostrarLogs = () => {
                console.log($window)
                const url = $location.url()
                const absUrl = $location.absUrl()
                const protocol = $location.protocol()

                const mensagem = `URL: ${url}\n URL Absoluto: ${absUrl}\n Protocolo: ${protocol}`
                console.log(mensagem)
            }
        }
    ])