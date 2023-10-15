/* Encontrar o indice Maximo e Minimo */

function encontraIndiceMaxMin(array) {
    var max = array[0];
    var min = array[0];
    var indiceMax = 0;
    var indiceMin = 0;

    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            indiceMax = i;
        }
        if (array[i] < min) {
            min = array[i];
            indiceMin = i;
        }
    }

    return {
        indiceMax: indiceMax,
        indiceMin: indiceMin
    };
}

var numeros = [4, 7, 1, 9, 3, 5, 2, 11, 100, 13, 44, 58, 6, 8]; //selecao de numeros sem repeticao
var resultado = encontraIndiceMaxMin(numeros);  

console.log("O indice do valor maximo é: " + resultado.indiceMax);
console.log("O indice do valor minimo é: " + resultado.indiceMin);
