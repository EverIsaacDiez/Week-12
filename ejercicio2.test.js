const suma = require('./ejercicio2')

test('ejemplo de suma', () => {
  expect(suma(6,3)).toBe(9)
})

test('ejemplo de suma de flotantes', () => {
  expect(suma(6.1,3.1)).toBeCloseTo(9.20000003)
})

