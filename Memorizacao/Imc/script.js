function calc() {
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var resposta = document.getElementById("res");

  var imc = (peso / (altura * altura)).toFixed(2)
  resposta.innerHTML = imc
  imc = parseFloat(imc)

  if(imc > 40){
    document.getElementById("msg").textContent = "Obesidade grau 3"
    } else if(imc > 35 && imc <= 39.9) {
        document.getElementById("msg").textContent = "Obesidade grau 2"
        } else if(imc >= 30 && imc <= 34.9){
         document.getElementById("msg").textContent = "Obesidade grau 1"
            } else if(imc >= 25 && imc <= 29.9){
            document.getElementById("msg").textContent = "Sobrepeso"
                } else {
                 document.getElementById("msg").textContent = "Normal"
                }

}
