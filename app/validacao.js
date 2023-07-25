function verificaValidezDoChute(chute) {
    const numero = +chute;

    if(chuteForInvalido(numero)) {
        console.log('valor invalido')
    }

    if (numeroForaDoEscopoPermitido(numero)) {
        console.log(`valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor} `)
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForaDoEscopoPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}
