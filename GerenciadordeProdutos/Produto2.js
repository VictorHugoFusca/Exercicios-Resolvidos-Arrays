function inserirProduto() {
    const nomeProduto = document.getElementById("productName").value;
    const quantidade = parseInt(document.getElementById("quantity").value);
    gerenciadorDeProdutos.inserirProduto(nomeProduto, quantidade);
}

function removerProduto() {
    const nomeProdutoRemover = document.getElementById("removeProductName").value;
    gerenciadorDeProdutos.removerProduto(nomeProdutoRemover);
}

function obterQuantidade() {
    const nomeProdutoConsulta = document.getElementById("queryProductName").value;
    const resultadoQuantidade = document.getElementById("quantityResult");
    const quantidade = gerenciadorDeProdutos.obterQuantidade(nomeProdutoConsulta);
    resultadoQuantidade.textContent = `Quantidade: ${quantidade}`;
}

function exibirProdutosInseridos() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    gerenciadorDeProdutos.produtos.forEach((produto) => {
        const item = document.createElement("li");
        item.innerHTML = `${produto.nome} - Quantidade: ${produto.quantidade}`;
        productList.appendChild(item);
    });
}

exibirProdutosInseridos();
