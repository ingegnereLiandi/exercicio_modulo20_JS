
/* Funcao que retorne a soma de todos os 
múltiplos de 5 ou 7 abaixo de 1000. */


function somaMultipli() {
    var soma = 0;
    for (var i = 1; i < 1000; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            soma += i;
        }
    }
    return soma;
}

var resultado = somaMultipli();
console.log("A soma dos multiplos de 5 o 7 abaixo de 1000 é: " + resultado);
