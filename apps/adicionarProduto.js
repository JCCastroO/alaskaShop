const btnLogado = document.querySelector('.navegacao-login');
const menuSair = document.querySelector('[data-logado]')

const formNovo = document.querySelector('.principal__form');

var listaProdutos = JSON.parse(localStorage.getItem('produto')) || [];

btnLogado.addEventListener('click', () => {
    menuSair.classList.toggle('hidden');
});

formNovo.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000)

    const cadastroProduto = {
        'img': e.target.elements['img'].value,
        'nome': e.target.elements['produto'].value,
        'preco': e.target.elements['preco'].value,
        'categoria': e.target.elements['categoria'].value,
        'descricao': e.target.elements['descricao'].value,
        'quantidade': parseInt(e.target.elements['quantidade'].value),
        'id': id
    }

    listaProdutos.push(cadastroProduto);

    localStorage.setItem('produto', JSON.stringify(listaProdutos));

    window.location.href = './home.html';
})

const logo = document.querySelector('.cabecalho__img');

logo.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = '../index.html'
})