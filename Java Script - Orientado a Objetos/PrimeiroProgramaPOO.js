class Documento {
    constructor(conteudo) {
        this.conteudo = conteudo;
    }
    imprimir() {
        console.log("Conteúdo:", this.conteudo);
    }
}

class Oficio extends Documento {
    constructor(numero, conteudo) {
        super(conteudo);
        this.numero = numero;
    }

    imprimir() {
        console.log(`Numero:${this.numero}`);
        console.log("Conteúdo:", this.conteudo);
    }
}

class Carta extends Documento {
    constructor(remetente, destinatario, conteudo) {
        super(conteudo);
        this.remetente = remetente;
        this.destinatario = destinatario;
    }
    imprimir() {
        console.log(`Remetente:${this.remetente}`);
        console.log(`Destinatário:${this.destinatario}`);
        console.log("Conteúdo:", this.conteudo);
    }
}

const oficio = new Oficio(4, "Lana, Modifique o número e esta mensagem");
oficio.imprimir();
console.log('-------------------------------------------------------------')
const carta = new Carta("Jefferson", "Lana", "Lana, modifique esta mensagem");
carta.imprimir();