
const formNovo = document.querySelector('.principal__form');
const produto = document.querySelector('.form-produto');
const preco = document.querySelector('.form-preco');
const img = document.querySelector('.form-img');

const listaProdutos = JSON.parse(localStorage.getItem('produto')) || [];

formNovo.addEventListener('submit', (e) => {
    e.preventDefault();

    const cadastroProduto = {
        'produto': e.target.elements['produto'].value,
        'preco': e.target.elements['preco'].value,
        'img': e.target.elements['img'].value
    }

    listaProdutos.push(cadastroProduto);

    localStorage.setItem('produto', JSON.stringify(listaProdutos));

    produto.value = '';
    preco.value = '';
    img.value = '';
})