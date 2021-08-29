//NATUREZA DINAMICA DE OBJETOS:
/*const mouse = {
    cor: 'blue',
    marca: 'dazz'
};
mouse.velocidade = 5000;    //adicionando propriedade;
mouse.trocarDPI = function () {     //adicionando métodos;
    console.log('mudando DPI');
}
delete mouse.velocidade;    // para apagar propriedades;
delete mouse.trocarDPI;     //apagar métodos;
console.log(mouse);
*/

//CLONANDO OBJETOS:
const celular = {
    marcaCelular: "Asus",
    tamanhoTela: {
      vertical: 155,
      horizontal: 75,
    },
    capacidadeBateria: 5000,
    ligar: function () {
      console.log("Fazendo Ligação ...");
    },
  };

  const novoObjeto = Object.assign({    //pode adicionar ou não um novo parametro nas {};
      cor: 'blue' }, celular);
  console.log(novoObjeto);
  console.log(novoObjeto.ligar()) //Para chamar uma função dentro de um objeto;

  const novoObjeto2 = {...celular}; //segunda forma de clonar um objeto;
  console.log(novoObjeto2);