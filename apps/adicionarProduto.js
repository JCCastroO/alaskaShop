const btnLogado = document.querySelector('.navegacao-login');
const menuSair = document.querySelector('[data-logado]')

const formNovo = document.querySelector('.principal__form');

const listaProdutos = JSON.parse(localStorage.getItem('produto')) || [];

btnLogado.addEventListener('click', () => {
    menuSair.classList.toggle('hidden');
});

formNovo.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000)

    const cadastroProduto = {
        'produto': e.target.elements['produto'].value,
        'preco': e.target.elements['preco'].value,
        'descricao': e.target.elements['descricao'].value,
        'quantidade': e.target.elements['quantidade'].value,
        'img': e.target.elements['img'].value,
        'categoria': e.target.elements['categoria'].value,
        'id': id
    }

    listaProdutos.push(cadastroProduto);

    localStorage.setItem('produto', JSON.stringify(listaProdutos));

    window.location.href = './home.html';
})
