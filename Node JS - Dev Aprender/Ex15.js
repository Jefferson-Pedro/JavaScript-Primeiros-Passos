//Criar um array de objetos de faiza de preço para que ela possa ser usada em um site igual ao mercado livre:
//Devem conter 3 propriedades:tooltip,min e maximo;
let faixas = [
    {tooltip: "até R$700", minimo: 0, maximo: 700},
    {tooltip: "até R$700 a R$1000", minimo: 700, maximo: 1000},
    {tooltip: "até R$1000 ou mais ", minimo: 1000, maximo: 999999}
];

function FaixaPreco(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minimo  = minimo,
    this.maximo = maximo
}
let faixas2 = [
    new FaixaPreco("até R$700", 0,700),
    new FaixaPreco("até R$700 a R$1000",700, 1000),
    new FaixaPreco("até R$1000 ou mais ", 1000, 999999)
]
console.log(faixas);
console.log(faixas2);