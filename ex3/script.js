let total = 0;
let valor = Number (prompt("Digite o valor da compra:"));

while (valor !== 0) {
    if (valor > 0) {
        total += valor;
    } else {
        alert("Valor inválido.");
    }
    valor = Number(prompt("Digite outro valor(0 para finalizar):"));
}
alert("Total da compra:" + total);