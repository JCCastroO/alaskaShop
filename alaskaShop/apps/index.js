const btnLogin = document.querySelector('.navegacao-login');
const menuLogin = document.querySelector('[data-login]');
const btnCadastro = document.querySelector('.navegacao-cadastro');
const menuCadastro = document.querySelector('[data-cadastro]');

const cadastroNome = document.querySelector('[data-cadastroNome]');
const cadastroSenha = document.querySelector('[data-cadastroSenha]');
const loginNome = document.querySelector('[data-loginNome]');
const loginSenha = document.querySelector('[data-loginSenha]');

const listaLogin = [];

const cabecalho = document.querySelector('.cabecalho')

btnLogin.addEventListener('click', () => {
        menuLogin.classList.toggle('hidden');
});

btnCadastro.addEventListener('click', () => {
        menuCadastro.classList.toggle('hidden');
});

menuCadastro.addEventListener('submit', (e) => {
    e.preventDefault();

    const listaCadastro = {
        'nome': e.target.elements['nome'].value,
        'senha': e.target.elements['senha'].value
    };

    listaLogin.push(listaCadastro);

    localStorage.setItem('login', JSON.stringify(listaLogin));

    cadastroNome.value = '';
    cadastroSenha.value = '';

    menuCadastro.classList.toggle('hidden');
});

menuLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    if (localStorage.login.includes(loginNome.value) && localStorage.login.includes(loginSenha.value)) {
        window.location.href = './home.html';
    } else {
        alert('Login não existe!')
    }

    loginNome.value = '';
    loginSenha.value = '';

    menuLogin.classList.toggle('hidden');
});