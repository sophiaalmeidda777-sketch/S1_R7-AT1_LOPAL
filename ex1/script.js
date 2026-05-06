let num1 = Number(prompt("Digite um número positivo:"));

while (num1 < 0) {
    alert("Número inválido. Tente novamente.");
    num1 = Number(prompt("Digite um número positivo:"));
}

alert("Número válido: " + num1);