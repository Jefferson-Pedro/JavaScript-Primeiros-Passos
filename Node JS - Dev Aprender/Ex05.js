// Criar um método para ler propriedades de um objeto e 
// exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo: "Vingadores: Guerra Infinita",
    ano: 2018,
    diretor: "Joe Russo",
    personagem: ["Thor", "Homem de ferro" , "Capitão Ámerica"]
};
exibirStrings(filme);

function exibirStrings(filme){
    
    for (let indice in filme){
        if(typeof filme[indice] === "string" || typeof filme[indice] === "object"){
            console.log(indice, filme[indice])
        }
    }
};

