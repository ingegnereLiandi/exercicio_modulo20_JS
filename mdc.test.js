const calcularMDC = require('./mdc');

test('calcula o MDC de dois números', () => {
  expect(calcularMDC(680, 100)).toBe(20); // MDC de 680 e 100 é 20
  
});
