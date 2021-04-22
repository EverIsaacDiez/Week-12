const texto = require('./ejercicio1')

test('no retornar texto equivocado', () => {
  expect(texto('asd')).not.toBe('dsa')
})

test('retorna texto vacio', () => {
  expect(texto('')).toBe('')
})


test('no hay I en asd', () => {
  expect(texto('asd')).not.toMatch(/I/);
})


test('ejemplo de la funcion texto', () => {
  expect(texto('hola')).toBe('hola')
})

test('contiene contiene tiene', () => {
  expect(texto('contiene')).toContain('tiene')
})

