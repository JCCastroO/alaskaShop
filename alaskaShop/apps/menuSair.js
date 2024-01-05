const btnLogado = document.querySelector('.navegacao-login');
const menuSair = document.querySelector('[data-logado]')
const deslogar = document.querySelector('[data-sair]');

btnLogado.addEventListener('click', () => {
    menuSair.classList.toggle('hidden');
});