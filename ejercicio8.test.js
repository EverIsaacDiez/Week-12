const anidada = require('./ejercicio8')

test('ejemplo de suma de cuadrados: 2*2 + 0 > 1', () => {
  expect(anidada(2,0)).toBeGreaterThan(1)
})

test('ejemplo de suma de cuadrados: (-2)*(-2) + 3*3 = 13', () => {
    expect(anidada(-2,3)).toBe(13)
})

