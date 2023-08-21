class Livro{
    constructor(nome, codigo, autor, estoque) {
        this.nome = nome;
        this.codigo = codigo;
        this.autor = autor;
        this.estoque = estoque;
    }

    exibirLivro() {
        return `${this.nome} - ${this.autor} (Código: ${this.codigo}) - Estoque: ${this.estoque}`;
    }
}

class Livraria {
    constructor(){
        this.livrosDisponiveis = [];
    }

    adicionarLivro(livro) {
        this.livrosDisponiveis.push(livro);
    }

    removerLivros(codigo) {
        this.livrosDisponiveis = this.livrosDisponiveis.filter(livro => livro.codigo !== codigo);
    }

    mostrarLivros() {
        return this.livrosDisponiveis.map(livro => livro.exibirLivro()).join("<br>");
    }
}

const livro1 = new Livro("Dom Casmurro", "ISBN123", "Machado de Assis", 10);
const livro2 = new Livro("O Senhor dos Anéis", "ISBN456", "J.R.R. Tolkien", 5);
const livro3 = new Livro("Harry Potter e a Pedra Filosofal", "ISBN789", "J.K. Rowling", 7);

const livrariaTeste = new Livraria();
livrariaTeste.adicionarLivro(livro1);
livrariaTeste.adicionarLivro(livro2);
livrariaTeste.adicionarLivro(livro3);

console.log("Livros cadastrados na livraria de teste:");
console.log(livrariaTeste.mostrarLivros());

livrariaTeste.removerLivros("ISBN456");

console.log("\nLivros após remover ISBN456:");
console.log(livrariaTeste.mostrarLivros());

