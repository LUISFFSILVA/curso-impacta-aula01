angular.module('appAngular', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', { templateUrl: '../views/home/index.html' })
            .when('/calcular', { templateUrl: '../views/calcular/index.html' })
            .when('/eventos', { templateUrl: '../views/eventos/index.html' })
            .otherwise({ redirectTo: '/' })
    }])

    .factory('MathFactory', MathFactory)
    .service('MathService', MathService)
    .controller('Principal', [    //coloca o nome Principal na controller
        '$location',
        '$window',
        'MathService',
        '$http',

        function ($location, $window, MathService) {
            var self = this

            self.calcularQuadrado = () => {
                self.resultado = MathService.calcularQuadrado(self.valor) //aqui passa o valor como parametro
            }

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