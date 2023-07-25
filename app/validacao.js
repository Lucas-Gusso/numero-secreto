function verificaValidezDoChute(chute) {
    const numero = +chute;

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>valor invalido</div>' ;
    }

    if (numeroForaDoEscopoPermitido(numero)) {
        elementoChute.innerHTML += `<div>valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div> `
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML =
         `<h1>Você acertou!</h1>
         <h2>O número secreto era: ${numeroSecreto}</h2>`;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForaDoEscopoPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}