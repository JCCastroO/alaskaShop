const section = document.querySelector('.principal');


const listaProdutos = JSON.parse(localStorage.getItem('produto')) || [];

function exibirProduto(produto) {
    section.innerHTML += `
        <div class="produto">
            <img src="${produto.img}" alt="Foto do produto" class="produto-img">
            <h2 class="produto-titulo">${produto.produto}</h2>
            <p class="produto-preco">R$${produto.preco}</p>
            <p class="produto-categoria" hidden>${produto.categoria}</p>
            <button class="produto-btn">Verificar</button>
        </div>
    `;

    
}

listaProdutos.forEach(produto => {
    exibirProduto(produto);
})

const produto = document.querySelector('.produto');
const produtoCategoria = document.querySelectorAll('.produto-categoria');
const categorias = document.querySelectorAll('.categoria');

categorias.forEach(categoria => {
    categoria.addEventListener('click', () => {

        if (categoria.innerHTML != listaProdutos.categoria) {
            produto.classList.toggle('hidden');
        }
    })
});