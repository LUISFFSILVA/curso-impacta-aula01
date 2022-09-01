appAngular.controller('Principal', function ($scope, MathService) {
    $scope.calcularQuadrado = () => {
        $scope.resultado = MathService.calcularQuadrado($scope.valor)
    }
})