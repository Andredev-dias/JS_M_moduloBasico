function calcular(id1, id2, respId, operador) {
    // alert(id1 + " - " + id2 + " - " + respId + " - " + operador)
    // alert(`${id1}, ${id2}, ${respId}, ${operador} - parametros da funcao`)
    var num1 = parseFloat(document.getElementById(id1).value);
    var num2 = parseFloat(document.getElementById(id2).value);
    var resultado;

    switch (operador) {
      case "+":
        resultado = num1 + num2;
        break;
      case "-":
        resultado = num1 - num2;
        break;
      case "*":
        resultado = num1 * num2;
        break;
      case "/":
        if (num2 !== 0) {
          resultado = num1 / num2;
        } else {
          resultado = "Erro: divisao por 0";
        }
        break;
      default:
        resultado = "Operador invalido";
        break;
    }
    // if (Number.isInteger(resultado)) {
    //   return (document.getElementById(respId).textContent = resultado);
    // } else {
    //   return (document.getElementById(respId).textContent =
    //     resultado.toFixed(2));
    // }

    
    // if(resultado !== "Erro: divisao por 0"){
      document.getElementById(respId).textContent = formatNumber(resultado);
    // }else{
    //   document.getElementById(respId).textContent = resultado;
    // }
  }

    function formatNumber(num) {
      if (Number.isInteger(num)) {
        return num;
      } else if(num !== "Erro: divisao por 0"){
        return num.toFixed(2)
      } else {
        return num
      }
    }