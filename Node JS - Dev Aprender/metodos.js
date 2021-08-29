console.log(Math.random ()); // gera numero aleatorio entre 0 e 1;
console.log(Math.max(3,6,8,10)); // Retorna o maior valor;
console.log(Math.min(3,6,8,10)); // Retorna o menor método;

//tipo primitivo
const mensagem = 'minha primeira mensagem';

// tipo objeto
const outraMensagem = new String('bom dia');

console.log(typeof mensagem);
console.log(typeof outraMensagem);
console.log(outraMensagem[2]); //Retorna o que se encontra na posição 2;
console.log(mensagem.includes('primeira')); //Retorna resultado true ou false se strings que existem dentro da const;
console.log(mensagem.startsWith('verde')); //Retorna caso a string inicie com a palavra dentro do parenteses;
console.log(mensagem.endsWith('mensagem'));//Retorna caso a string termine com a palavra dentro do parenteses;
console.log(mensagem.indexOf('primeira'));//Retorna a posição da primeira letra da string dentro do parenteses;
console.log(mensagem.replace('minha','sua'));//Muda a palavra dentro do parenteses pela que está depois da virgula;
console.log(mensagem.trim()); //Retira espaços excedentes inicio/final dentro da frase/texto;
console.log(mensagem.split(' '));//Quebra a palavra em espaços e coloca em arrays;