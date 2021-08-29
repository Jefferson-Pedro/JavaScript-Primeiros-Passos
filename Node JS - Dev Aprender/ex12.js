// Crir dois objetos endereços e depois comparar se os dois objetos
//são iguais em propriedades e endereço de memoria ;

function endereco (rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}
const endereco1 = new endereco('a','b','c');
const endereco2 = new endereco('d','e','f');

console.log(saoIguais(endereco1, endereco2))
function saoIguais(endereco1, endereco2){
    //comparar se as propriedades são iguais (retornar true ou false)
    return endereco1.rua === endereco2.rua &&
        endereco1.cidade === endereco2.cidade &&
        endereco1.cep === endereco2.cep;
}
console.log(temEnderecoMemoriaIguais(endereco1,endereco2))  
function temEnderecoMemoriaIguais(endereco1, endereco2){
    //comparar se referência do objeto aponta para o mesmo logal na memoria.
    return endereco1 === endereco2;
}