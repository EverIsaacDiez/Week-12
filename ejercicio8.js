//8
const anidada = (a,b) => {
  function cuadrado(x) {
    return x * x;
  }
  return cuadrado(a) + cuadrado(b);
}

module.exports = anidada