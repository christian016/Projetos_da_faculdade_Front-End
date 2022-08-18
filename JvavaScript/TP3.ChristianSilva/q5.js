function verificaTriangulo() {
    let lado1 = Number(document.getElementById("lado1").value);
    let lado2 = Number(document.getElementById("lado2").value);
    let lado3 = Number(document.getElementById("lado3").value);
    let res = document.getElementById("resq5")
    let resposta = "";
    if (lado1 == lado2 && lado2 == lado3) {
      resposta = "equilatero";
    } else {
      if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
        resposta = "escaleno";
      } else {
        resposta = "isosceles";
      }
    }
    res.innerText ="O triangulo é: " + resposta
  }