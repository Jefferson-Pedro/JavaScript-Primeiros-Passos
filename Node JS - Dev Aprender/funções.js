//funções = para nomear uma função use sempre: Verbo + Substantivo. Ex: resetaCor();

//FUNÇÃO COM PARAMETROS
let corSite = "azul";
function resetaCor(cor, tonalidade) {
  corSite = cor + tonalidade;
}

console.log(corSite);
resetaCor("vemelho", " claro");
console.log(corSite);

//FUNÇÃO QUE NÃO RETORNA NADA;
function dizerNome() {
  console.log("Seu nome é: Jefferson");
}
dizerNome();

//FUNÇÃO COM RETORNO
function multiplicarPorDois(valor) {
  return valor * 2;
}
//console.log(multiplicarPorDois(5));
let resultado = multiplicarPorDois(5);
console.log(resultado);
