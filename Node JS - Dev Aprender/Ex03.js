//RADAR DE MULTA

// REGRAS

//Velocidade maxima de até 70 km => ok;
//A cada 5km cima do limite +1 ponto na carteira;
//Caso os pontos sejam maior do que 12, carteira suspendida;
//Math.Floor(); // usei o Math.round para arredondar

function velocidadeMaxima(vel){
    const velMax = 70;
    let pontos;
    //const pontos;
    if(vel <= velMax){
        console.log('Velocidade dentro do permitido!');
    }else{
        pontos = Math.round((vel - velMax)/5);
        if(pontos >= 12){
            console.log("Carteira Suspensa! Total de Pontos: ", pontos)
        }else{
            console.log("Pontos na Carteira: ", pontos)
        }   
    }
}
velocidadeMaxima(80);









