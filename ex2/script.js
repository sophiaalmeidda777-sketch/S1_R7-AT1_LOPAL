let soma = 0;
let contador = 0;
let nota = Number(prompt("Digite uma nota (0 a 10) ou negativo para sair:"));
while (nota >= 0) {
    if (nota <= 10) {
        soma += nota;
        contador++;
    } else {
        alert("Nota inválida.");
    }
    nota = Number(prompt("Digite outra nota ou negativo para sair:"));
}
if (contador > 0) {
    let media = soma / contador;
    alert("Média: " + media);
} else {
    alert("Nenhuma nota válida.");
}