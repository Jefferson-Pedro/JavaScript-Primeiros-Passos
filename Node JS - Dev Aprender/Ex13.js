//Criar um objeto de postagem de blog que vai conter as seguintes informações:
/*Titulo
Mensagem
Autor
Visualizações
comentários (array)
    (autor, mensagem)
estaAoVivo (sim ou não)
*/

let postagem = {
    titulo: 'Marvel',
    mensagem: 'Melhor editora',
    autor: 'Stan Lee',
    visualizacoes: 1.900,
    comentarios: {
        autor: 'Kevin Feige', mensagem:'Obrigado'},
    estaAoVivo: false
};
console.log(postagem);

/*mostrarObjeto(postagem);
function mostrarObjeto(postagem){
    for(let indice in postagem){
        console.log(indice,postagem[indice]);
    }
}
*/