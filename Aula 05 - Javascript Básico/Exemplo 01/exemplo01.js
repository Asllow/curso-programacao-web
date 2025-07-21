const para = document.querySelector("p");

para.addEventListener("click", atualizarNome);

function atualizarNome() {
    const nome = prompt("Insira um novo nome");
    para.textContent = "Jogador 1: " + nome;
}''