const division = require('./ejercicio5')

test('retornar division', () => {
  expect(division(6,3)).toBe(2)
})

test('retornar division', () => {
  expect(division(652253354,652253354)).toBe(1)
})

test('mensaje de la division por 0', () => {
  expect(division(6,0)).toBe('No se puede dividir por 0')
})
