class Produto {
    constructor(nome, quantidade) {
      this.nome = nome;
      this.quantidade = quantidade;
    }
  }
  
  class GerenciadorDeProdutos {
    constructor() {
      this.produtos = [];
    }
    removerProdutoPorIndice(indice) {
        if (indice >= 0 && indice < this.produtos.length) {
          this.produtos.splice(indice, 1);
        }
      }
    
    inserirProduto(nome, quantidade) {
      const indiceProdutoExistente = this.produtos.findIndex(produto => produto.nome === nome);
  
      if (indiceProdutoExistente !== -1) {
        this.produtos[indiceProdutoExistente].quantidade += quantidade;
      } else {
        const novoProduto = new Produto(nome, quantidade);
        this.produtos.push(novoProduto);
      }
    }
  
    removerProduto(nome) {
      const indiceRemover = this.produtos.findIndex(produto => produto.nome === nome);
  
      if (indiceRemover !== -1) {
        this.produtos.splice(indiceRemover, 1);
      }
    }
  
    obterQuantidade(nome) {
      const produto = this.produtos.find(produto => produto.nome === nome);
      return produto ? produto.quantidade : 0;
    }
  }
  
  const gerenciadorDeProdutos = new GerenciadorDeProdutos();
  