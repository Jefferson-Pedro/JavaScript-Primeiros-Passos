/*const celular = {
  marcaCelular: "Asus",
  tamanhoTela: {
    vertical: 155,
    horizontal: 75,
  },
  capacidadeBateria: 5000,
  ligar: function () {
    console.log("Fazendo Ligação ...");
  },
};*/

//Factory Functions (Função de Fábrica) //ENCAPSULAMENTO
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
  return {
    marcaCelular, //Quando o key e value tem o mesmo nome, pode ser feito assim: deixando a key;
    tamanhoTela,
    capacidadeBateria: capacidadeBateria, //ou pode deixar assim;
    ligar() { // ou ligar: function(){
      console.log("Fazendo Ligação ...");
    },
  };
}

const cel1 = criarCelular("Motorola", 5.5, 7500);
console.log(cel1);
 