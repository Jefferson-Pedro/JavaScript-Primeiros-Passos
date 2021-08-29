  //camelCase (Factory Functions)
  /*function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
      marcaCelular, //Quando o key e value tem o mesmo nome, pode ser feito assim: deixando a key;
      tamanhoTela,
      capacidadeBateria: capacidadeBateria, //ou pode deixar assim;
      ligar() {
        console.log("Fazendo Ligação ...");
      },
    };
  }*/


  //Pascal Case (Construtor)
  /*function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria
    this.ligar = function (){
        console.log("Fazendo ligação...");
    }
  }

  const celular = new Celular('asus', 5.5, 7000);
  console.log(celular);*/

  /*function Ventilador(velMax){
      this.velocidadeMaxima = velMax;
      this.ligado = false;
  }
  const ventilador1 = new Ventilador(3);
  ventilador1.cor = 'branco'; //adicionando propriedade + valor;
  ventilador1.ligaDesliga = function () { //adicionando função;
      if(this.ligado)
        this.ligado = false;
      else this.ligado = true;
  }
  //validação para saber se o IF está funcionando;
  ventilador1.ligaDesliga(); //recebe true;
  console.log(ventilador1.ligado);
  ventilador1.ligaDesliga();
  console.log(ventilador1.ligado); //recebe false;
 
  console.log(ventilador1);
  console.log(ventilador1.ligaDesliga());*/ 
