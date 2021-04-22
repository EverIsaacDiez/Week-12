const potencia = require('./ejercicio7')

test('ejemplo de potencia', () => {
  expect(potencia(1,234)).toBe(1)
})

test('0^0 esta definida', () => {
    expect(potencia(0,0)).toBeDefined()
})

test('ejemplo de potencia', () => {
    expect(potencia(2,8)).toEqual(256)
})
