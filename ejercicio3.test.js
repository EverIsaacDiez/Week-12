const resta = require('./ejercicio3')

test('retornar resta', () => {
  expect(resta(6,3)).toBe(3)
})

test('retornar resta', () => {
  expect(resta(6,-3)).toBe(9)
})

test('6 - 43242343 < -4', () => {
  expect(resta(6,43242343)).toBeLessThan(-4);
})

