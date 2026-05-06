let nome = prompt("Digite o primeiro nome:");
let sobrenome = prompt("Digite o sobrenome:");

while (nome === "" || sobrenome === "") {
    alert("Você deixou um campo vazio. Preencha corretamente.");
    nome = prompt("Digite o primeiro nome:");
    sobrenome = prompt("Digite o sobrenome:");
}

alert("Nome completo: " + nome + " " + sobrenome);