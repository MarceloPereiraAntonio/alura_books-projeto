const buttons = document.querySelectorAll('.btn')
buttons.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros (){
    const elementBtn = document.getElementById(this.id)
    const categoria = elementBtn.value
    let livrosfiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirLivro(livrosfiltrados)
    if(categoria == 'disponivel'){
        const valorTotal = calculaValorLivrosDisponiveis(livrosfiltrados)
        exibeValorTotalLivros(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibeValorTotalLivros(valorTotal){
    elementoLivroValorTotal.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>`
}