const tablaMultiplicar = require('./ejercicio6')

test('retornar tabla de multiplicar sin especificar el multiplicador', () => {
  expect(tablaMultiplicar(1,undefined)).toStrictEqual([0,1,2,3,4,5,6,7,8,9,10])
})

test('ejemplo en la tabla de multiplicar', () => {
  expect(tablaMultiplicar(0,0)).toStrictEqual([0])
})

test('ejemplo en la tabla de multiplicar', () => {
  expect(tablaMultiplicar(1,2)).toStrictEqual([0,1,2])
})

test('ejemplo de la funcion tablaMultiplicar cuando no entra al for', () => {
  expect(tablaMultiplicar(1,-2)).toStrictEqual([])
})