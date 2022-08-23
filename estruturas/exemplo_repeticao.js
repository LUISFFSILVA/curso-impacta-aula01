var numeroAtual = 0

while(numeroAtual <= 100){
    console.log("Numero atual (While)", numeroAtual)
    numeroAtual += 10
}

do{
    console.log("Numero atual (Do ..While)", numeroAtual)
}while(numeroAtual <= 100)

const lista = [1,2,3,4,5]

lista.forEach(item => {
    console.log("Numero atual (forEach)",item)
})