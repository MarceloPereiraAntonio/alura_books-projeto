let livros = [];
const andPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosApi();

async function getBuscarLivrosApi(){
    const res = await fetch(andPointAPI);
    livros = await res.json();
    let livrosDesconto = aplicaDesconto(livros);
    exibirLivro(livrosDesconto);
    
}



