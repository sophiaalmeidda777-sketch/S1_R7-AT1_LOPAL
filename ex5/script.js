let saldo = 1000;
while (saldo > 0) {
    let saque = Number(prompt("Digite o valor do saque:"));
    if (saque <= 0) {
        alert("Valor inválido.");
    } 
    else if (saque > saldo) {
        alert("Saldo insuficiente. Tente outro valor.");
    } 
    else {
        saldo = saldo - saque;
        alert("Saque realizado! Saldo atual: " + saldo);
    }
}

alert("Saldo zerado ou negativo. Encerrando.");