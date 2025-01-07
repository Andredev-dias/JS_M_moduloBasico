// alert("opaaaaa")
var numero1 = 30
var numero2 = 10
const numero3 = 99

function calcular(){
    var a = 1
    var b = 2
    var resposta = a + b
    mostrarTexto()
    return resposta
}

function mostrarTexto(){
    console.log("texto")
}

console.log(calcular())

function calcularPorParametro(n1, n2, n3){
    var res = n1 + n2 + n3
    return res
}

// console.log(calcularPorParametro(numero1,numero2,numero3))

NaN
//Not a Number