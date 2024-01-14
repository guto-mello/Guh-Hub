let numeroSecreto = gerarNumeroRandom();

function textoDocument(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

textoDocument('h1', 'Jogo do Número Secreto');
textoDocument('p', 'Escolha um número para o chute!');

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        textoDocument('h1','Acertou!');
        textoDocument('p', 'Parabéns, você adivinhou certo o número!');
    } else { 
        textoDocument('h1', 'Errou');
        textoDocument('p', 'Tente novamente!');
    }
}

function gerarNumeroRandom() {
    return parseInt(Math.random() * 10 + 1);
}