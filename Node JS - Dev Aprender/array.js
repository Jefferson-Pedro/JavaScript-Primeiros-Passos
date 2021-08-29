//ADICIONAR ELEMENTOS NO ARRAY

let numeros = [1,2,3,4];
//adicionar no inicio:
numeros.unshift(0);
console.log('adicionando um elemento no array no inicio: ', numeros);
//adicionar no meio:
numeros.splice(1,0,'a'); //indice, valor a ser deletado, valor a ser inserido
console.log('indice que foi inserido: ', numeros);
//adicionar no final:
numeros.push(5);
console.log('adicionando um elemento no array no final: ', numeros);

//REMOVER ELEMENTO DE ARRAY
numeros=[5,4,3,2,1];
//remover no inicio
let remover = numeros.shift();
console.log('removendo o primeiro elemento do array:', numeros);
//remover no meio
let remover2 = numeros.splice(2,1)//indicar qual e quantos indices serão removidos
console.log('removendo o meio do elemento do array: ', numeros);
//remover no final
let remover3 = numeros.pop();
console.log('removendo o ultimo elemento do array: ', numeros);

//ESVAZIANDO UM ARRAY
/*numeros.length=0; //opção 1
console.log('status do array: ', numeros);*/
numeros.splice(0, numeros.length); //opção 2
console.log('status do array: ', numeros);


//ENCONTRANDO VALORES DENTRO DE UM ARRAY (TIPOS PRIMITIVOS)
console.log('indice: ',numeros.indexOf(2)); //Retorna o indice; se não existir retorna -1.

console.log('indice: ',numeros.lastIndexOf(2)); //Retorna o ultimo numero repetido dentro do array e retorna o indice

console.log(numeros.includes(2));//Determina se um array/objeto contém um determinado elemento ou não; 


//ENCONTRANDO VALORES DENTRO DE UM ARRAY (TIPOS REFERÊNCIAS)
const marcas = [
    {id:1, nome: 'a'}, //alt + shift + seta pra baixo p/ dubplicar;
    {id:2, nome: 'b'},
];
const marca = marcas.find(function(marcas){
    return marcas.nome === 'a';
});
console.log(marca);

//COMBINANDO, CLONANDO E DIVIDINDO ARRAYS

const primeiro = [1,2,3]
const segundo = [4,5,6]

//Para combinar
const combinado = primeiro.concat(segundo);
console.log('arrays combinados: ' , combinado);

//Para clonar
const clonado = combinado.slice(); //.slice vazio pode ser usado para clonar todo array;
console.log('arrays clonados: ',clonado);

//Para dividir
const cortado = combinado.slice(1,3); //inicia no indice 1 e para no indice 3 (ultimo -1)
console.log('arrays cortados: ',cortado);

//NOVA FORMA DE COMBINAR/CLONAR ARRAY - SPREAD

//Para combinar
const combinado2 = [...primeiro,'a',...segundo, '#']; //posso modificar como nesse exemplo add elementos
console.log('arrays combinados parte 2: ', combinado2);

//Para clonar
const clonado2 = [...combinado2];
console.log('array clonado parte 2: ', clonado2); 

//TERCEIRA FORMA DE COMBINAR/SEPARAR ARRAY

const frase = 'olá bem vindo ao curso!';

//Para separar
const resultado = frase.split(' ');
console.log('Frase separada: ', resultado);

//Para combinar
const combinado3 = resultado.join("-"); //ou console.log(resultado.join('-'));
console.log('arrays combinados parte 3: ', combinado3);

