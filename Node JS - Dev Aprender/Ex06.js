//Criar função somar que retorna a 
// soma de todos os múltiplos de 3 e 5

// Multiplos de 3 = 3,6,9
// Multiplos de 5 = 5,10
// Somando os multiplos = 3+6+9+5+10 = 33;

function somaDeMultiplos(limite){
    let mult3 = 0;
    let mult5 = 0;

    for(let i = 0; i <= limite; i++){
        if(i % 3 == 0){
            mult3 += i;
        }else if( i % 5 == 0){
            mult5 += i;
        }
   }
   console.log("soma dos multiplos de 3 e 5: ", mult5 + mult3);
}

somaDeMultiplos(10);