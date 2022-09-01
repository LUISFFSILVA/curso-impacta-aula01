appAngular.service('MathService', function (MathFactory) {
    this.calcularQuadrado = function (a) {
        return MathFactory.multiplicar(a, a)
    }
})