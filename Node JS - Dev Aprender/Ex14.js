//Constructor Function
//Criar um objeto postagem que tenha:
//titulo, mensagem, autor, visualizações, comentarios(array),estamosAoVivo

function Postagem (titulo, mensagem, autor ){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizações = 0, 
    this.comentarios = [],
    this.estamosAoVivo = false
}

let postagem = new Postagem('a', 'b','J');
console.log(postagem);

/*1.900,['Primeiro Comentario', 'Segundo Comentario', 'nota: 10'],true*/ 