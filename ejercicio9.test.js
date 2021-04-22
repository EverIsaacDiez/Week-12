const cerosIzq = require('./ejercicio9')

test('ejemplo de la funcion cerosIzq cuando no entra en el for', () => {
  expect(cerosIzq(23,2)).toBe("23")
})

test('ejemplo de la funcion cerosIzq cuando entra en el for', () => {
    expect(cerosIzq(12,3)).toBe("012")
})

test('ejemplo de la funcion cerosIzq cuando entra en el for', () => {
    expect(cerosIzq(123,10)).toBe("0000000123")
})
