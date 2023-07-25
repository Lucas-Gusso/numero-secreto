function verificaValidezDoChute(chute) {
    
    const numero = +chute;

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>valor invalido</div>'
        return;
    }

    if (numeroForaDoEscopoPermitido(numero)) {
        elementoChute.innerHTML += `<div>valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div> `
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML =
         `<h1>Você acertou!</h1>
         <h2>O número secreto era: ${numeroSecreto}</h2>`
         return;
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>'
    } else {
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>'
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForaDoEscopoPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}