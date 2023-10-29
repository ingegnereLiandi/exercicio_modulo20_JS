const encontraIndiceMinMax = require('./array');

test('encontrar índices do maior e menor valor em um array', () => {
  const inputArray = [4, 7, 1, 9, 3, 5, 2, 11, 100, 13, 44, 58, 6, 8];
  const resultadoEsperado = { indiceMax: 8, indiceMin: 2 };

  const resultado = encontraIndiceMinMax(inputArray);

  expect(resultado).toEqual(resultadoEsperado);
});

/* test('encontrar índices do maior e menor valor em um array com valores negativos', () => {
  const inputArray = [-1, -5, -3, -8, -2];
  const resultadoEsperado = { indiceMaiorValor: 0, indiceMenorValor: 3 };

  const resultado = encontrarIndicesMinMax(inputArray);

  expect(resultado).toEqual(resultadoEsperado); */
/* }); */
