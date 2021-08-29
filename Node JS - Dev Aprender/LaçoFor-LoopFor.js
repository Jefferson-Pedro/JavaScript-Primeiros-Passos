// 1.FOR
for (let i = 1; i <= 5; i++) {
  // crescente
  //console.log("Estou aprendendo!", i);
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//2.WHILE

let i = 5;
while (i >= 1) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i--;
}

//3.DO WHILE

let c = 0;
do {
  console.log("Digitando!", c);
  i++;
} while (i < 10);

//4. FOR IN (usado em obj)

const pessoa = {
  nome: "Jhonathan",
  idade: 25,
};
//key-value - Exibe apenas a propriedade do obj
for (let chave in pessoa) {
  console.log(chave); 
  // ou  console.log(chave, pessoa.idade); ou  console.log(chave, pessoa['idade']) ou console.log(chave[pessoa]);
}

const cores = ["Vermelho", "Azul", "Verde"];
for (let indice in cores) {
  console.log(indice, cores[indice]);
}

//FOR OF (usado em arrays)

for (let cor of cores) { //usado em arrays
  console.log(cor);
}

//FOREACH (usado em arrays)

const numeros = [,1,2,3,4,5];

numeros.forEach(function(num){
    console.log('numeros: ' ,num);
})

numeros.forEach((numero,indice) => console.log(numero,indice)) //para exibir elementos e indices