const btnLogado = document.querySelector('.navegacao-login');
const menuSair = document.querySelector('[data-logado]')
const deslogar = document.querySelector('[data-sair]');

const novoProduto = document.querySelector('.navegacao-novoProduto');

btnLogado.addEventListener('click', () => {
    menuSair.classList.toggle('hidden');
});

novoProduto.addEventListener('click', () => {
    window.location.href = './adicionarProduto.html';
})