function somaDivisiveisNoIntervalo(inicio, fim, divisor) {
  let somaDivisor = 0;
  let d = divisor;

  for (let i = inicio; i <= fim; i++) {
    if (i % d == 0) {
      somaDivisor++;
    }
  }
}

console.log(somaDivisiveisNoIntervalo(1, 10, 3));
