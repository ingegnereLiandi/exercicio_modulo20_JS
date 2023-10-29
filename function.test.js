const somaMultiplos = require('./functionList');

test('soma de múltiplos de 5 ou 7 abaixo de 1000', () => {
  // Múltiplos de 5: 5, 10, 15, ..., 995
  // Múltiplos de 7: 7, 14, 21, ..., 994
  // Soma esperada: 5 + 10 + 15 + ... + 995 + 7 + 14 + 21 + ... + 994 = 100500
  expect(somaMultiplos()).toBe(156361);
});
