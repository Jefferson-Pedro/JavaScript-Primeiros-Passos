//Criar uma função que exibe a quantidade de * que aquela linha possui;

function exibeAsteristicos(limite){

    let a = "*";
    for(let i = 1; i <= limite; i++){
        console.log(a + " linha " + i);
        a+="*";
       
    }
}
exibeAsteristicos(5);