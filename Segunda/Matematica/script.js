const n1 = 5, n2 = 2

function somar(numero1, numero2){
    return numero1 + numero2
}
console.log(somar(n1, n2), "Resultado na soma")

function sub(numero1, numero2){
    return numero1 - numero2
}
console.log(sub(10, 9), "Resultado da Subtração")


// const multi = (numero1, numero2) => {
//     return numero1 * numero2
// }

const multi = (numero1, numero2) => numero1 * numero2
console.log(multi(n1, n2), "Resultado da Multiplicação")

const divisaoComCondicionalTernaria = (numero1, numero2) => numero2 !== 0 ? numero1 / numero2 : "Nao pode ser 0"

function div(numero1, numero2){
    if(numero2 !== 0){
        return numero1 / numero2
    } else {
        return "Não pode ser 0"
    }
    // if(numero2 === 0){
    //     return "não pode ser 0"
    // } else {
    //     return numero1 / numero2
    // }
}
console.log(div(n1, n2), "Resultado da Divisão")

function calcular(n1, n2, operador){
    if(operador === "+"){
        return n1 + n2
    } else if(operador === "-") {
        return n1 - n2
    } else if(operador === "*") {
        return n1 * n2
    } else if(operador === "/") {
      return n2 === 0 ? "Não pode ser 0" : parseFloat((n1 / n2).toFixed(1))
    } else {
        return "operador inválido"
    }
} 
console.log(calcular(2, 3, "/"))


function calcularComSwitchCase(x1, x2, op){
    switch (op) {
        case "+":
            return x1+x2
        case "-":
            return x1-x2
        case "x":
            return x1*x2
        case "%":
            return x2 === 0 ? "Não pode ser 0" : parseFloat((x1 / x2).toFixed(1))
        default:
            return "Operador inválido"
    }
}
console.log(calcularComSwitchCase(n1, n2, "x"), calcularComSwitchCase(n1, n2, "+"), calcularComSwitchCase(n1, n2, "-"), calcularComSwitchCase(n1, n2, "%"))



