// Exercicio Nota Escolar
// Obter a média a partir de um array

/*
0-59: F
60-69: D
70-79: C
80-89: B
90-100: A
*/

const array = [70,70,80]; //res: 73.33 - retorna (C)

function mediaEscolar(array){
    const soma = 0;
    for( let nota of array){
        soma += array;
    }
    const media = soma / (array.length);

    if(media < 59) return "F";
    if(media < 69) return "D";
    if(media < 79) return "C";
    if(media < 89) return "B";
    return "A";
    
}
/*  switch(media){
        case media >=0 || media <=59:
            console.log("Nota F");
            break;
        case media >=60 || media <=69:
            console.log("Nota D");
            break;
        case media >=70 || media <=79:
            console.log("Nota C");
            break;
        case media >=80 && media <=89:
            console.log("Nota B");
            break;
        case media >=90 && media <=100:
            console.log("Nota A");
            break;
        default:
            console.log("Acho que deu ruim!");
    }
    function mediaEscolar(array){
        let notas = 0;
        let cont = 0;
        for(let i in array){
        if(typeof array[i] === "number"){
                cont++;
                notas += array[i];
            }
        }
        let media = (notas / cont).toFixed(2); //Math.round(notas / cont)

        console.log(media);

        if(media >=0 && media <=59)
            console.log("Nota F");
        else if(media >=60 && media <=69)
            console.log("Nota D");
        else if(media >=70 && media <=79)
            console.log("Nota C");
        else if(media >=80 && media <=89)
            console.log("Nota B");
        else if(media >=90 && media <=100)
            console.log("Nota A");
    }

    mediaEscolar(array);
*/