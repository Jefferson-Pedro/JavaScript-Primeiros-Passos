//Receber uma quantidade de valores para avaliar
//Função exibe se cada valor é par ou impar

function parImpar(num){
    for(let i = 0; i <= num; i++){
        if(i % 2 == 0){
            console.log(i, "Par")
        }else{
            console.log(i, "Impar")
        }
    }
}
parImpar(5);  