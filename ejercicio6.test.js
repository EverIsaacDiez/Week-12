const tablaMultiplicar = require('./ejercicio6')

test('retornar tabla de multiplicar sin especificar el multiplicador', () => {
  expect(tablaMultiplicar(1,undefined)).toBe(10)
})

test('ejemplo en la tabla de multiplicar', () => {
    expect(tablaMultiplicar(0,0)).toBe(0)
})

test('ejemplo en la tabla de multiplicar', () => {
    expect(tablaMultiplicar(1,2)).toBe(0,1,2)
})
