appAngular.factory('MathFactory', function () {
    var factory = {}
    factory.multiplicar = (a, b) => {
        return a * b
    }
    return factory
})