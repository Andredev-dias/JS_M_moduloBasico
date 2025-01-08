function somar(){
    var n1 = parseFloat(document.getElementById("num1").value)
    var n2 = parseFloat(document.getElementById("num2").value)
    var resp = document.getElementById("respSoma")
    resp.textContent = (n1 + n2).toFixed(1)
}

function sub(){
    var numero01 = parseFloat(document.getElementById("num3").value)
    var numero02 = parseFloat(document.getElementById("num4").value)
    var resposta = document.getElementById("respSub")
    resposta.innerHTML = (numero01 - numero02).toFixed(1)
}

function multi(){
    var n1 = parseFloat(document.getElementById("num5").value)
    var n2 = parseFloat(document.getElementById("num6").value)
    var dadoFinal = document.getElementById("respMulti")
    dadoFinal.textContent = (n1 * n2).toFixed(1)
}

function div(){
    var n1 = parseFloat(document.getElementById("num7").value)
    var n2 = parseFloat(document.getElementById("num8").value)
    var dadoFinal = document.getElementById("respDiv")
    if(n2 !== 0){
        dadoFinal.textContent = (n1 / n2).toFixed(1)
    } else {
        dadoFinal.textContent = "Não podemos dividir por 0"
        document.getElementById("num8").style.border = "2px solid red"
    }
}

function media(){
    var n1 = parseFloat(document.getElementById("n1").value)
    var n2 = parseFloat(document.getElementById("n2").value)
    var n3 = parseFloat(document.getElementById("n3").value)
    var n4 = parseFloat(document.getElementById("n4").value)
    var n5 = parseFloat(document.getElementById("n5").value)
    var media = document.getElementById("respMedia")
    var res = (n1 + n2 + n3 + n4 + n5) / 5

    if(res >= 7){
        media.textContent = res.toFixed(1) + " - " + "PASSOU DE ANO"
        media.style.color = "green"
        media.style.fontSize = "20px"
        media.style.fontWeight = "bold"
        media.style.fontFamily = "cursive"
    }else{
        media.textContent = `${res.toFixed(1)} - REPROVOU DE ANO`
        media.style.color = "red"
        media.style.fontSize = "20px"
        media.style.fontWeight = "bold"
        media.style.fontFamily = "cursive"
    }
}

function contar(){
    var numero = parseFloat($("#numeroInput").val())
    var resultadoStr = ""

    if(numero <= 1000){
       for (var cont = 1; cont <= numero; cont++){
        resultadoStr = resultadoStr + cont + "<br>" + "<br>"
    }
       $("#result").html(resultadoStr)
    }else{
       $("#result").text("Digite um número menor que 100!!!")
    }
}