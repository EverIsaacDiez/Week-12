const multiplicacion = require('./ejercicio4')

test('retornar multiplicacion', () => {
  expect(multiplicacion(6,3)).toBe(18)
})

test('retornar multiplicacion', () => {
  expect(multiplicacion(6,-3)).toBe(-18)
})

test('retornar multiplicacion e * 3 ~= 8.15', () => {
  expect(multiplicacion(Math.E,3)).toBeCloseTo(8.15)
})
