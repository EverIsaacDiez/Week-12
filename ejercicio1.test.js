const texto = require('./ejercicio1')

test('retornar texto', () => {
  expect(texto('texto')).toBe('texto')
})
