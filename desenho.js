function ExibirNome() {
    let nome = document.getElementById('nomeInput').value.trim().toLowerCase();

    if (nome === "scooby doo") {
        document.getElementById('mensagem').innerHTML = "Você acertou! Parabéns!";
    } else {
        document.getElementById('mensagem').innerHTML = "Que pena, você errou...";
    }
}
