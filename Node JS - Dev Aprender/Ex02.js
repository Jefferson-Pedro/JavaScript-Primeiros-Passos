//Escreva uma função que usa 2 números e retorna o maior entre eles

function retornaMaiorNum(a, b) {
  let num1 = a;
  let num2 = b;

  /*if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }*/
  return num1 > num2 ? num1 : num2; // operadores ternarios;
}
let retorno = retornaMaiorNum(12, 12);
console.log(retorno);
