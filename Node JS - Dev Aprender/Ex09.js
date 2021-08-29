// Criar função para mostrar os números primos

//Primos (divisivel por 1 ou ele mesmo)
//Compostos

//Ex: 10, 11

function exibeNumerosPrimos(num){
    for(let i = 2; i <= num; i++){
        let ehPrimo = true;

        for(let divisor = 2; divisor < i; divisor++){
            if(i % divisor === 0){
                ehPrimo = false;
                break;
            }
        }
        if(ehPrimo) console.log(i);
    }
}

exibeNumerosPrimos(15);

