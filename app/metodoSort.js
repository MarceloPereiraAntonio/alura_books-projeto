let btnOrdenaPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenaPreco.addEventListener('click', ordenaLivrosByPreco);


function ordenaLivrosByPreco(){
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivro(livrosOrdenados)
}