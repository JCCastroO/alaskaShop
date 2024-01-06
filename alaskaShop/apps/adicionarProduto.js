const btnLogado = document.querySelector('.navegacao-login');
const menuSair = document.querySelector('[data-logado]')

const formNovo = document.querySelector('.principal__form');
const produto = document.querySelector('.form-produto');
const preco = document.querySelector('.form-preco');
const img = document.querySelector('.form-img');

const listaProdutos = JSON.parse(localStorage.getItem('produto')) || [];

btnLogado.addEventListener('click', () => {
    menuSair.classList.toggle('hidden');
});


formNovo.addEventListener('submit', (e) => {
    e.preventDefault();

    const cadastroProduto = {
        'produto': e.target.elements['produto'].value,
        'preco': e.target.elements['preco'].value,
        'img': e.target.elements['img'].value,
        'categoria': e.target.elements['categoria'].value
    }

    listaProdutos.push(cadastroProduto);

    localStorage.setItem('produto', JSON.stringify(listaProdutos));

    produto.value = '';
    preco.value = '';
    img.value = '';

    window.location.href = './home.html';
})