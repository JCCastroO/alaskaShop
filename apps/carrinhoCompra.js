import { listaCarrinho } from "./cardProdutos.js";

const cardFundoCarrinho = document.querySelector('.background');
const cardCarrinho = document.querySelector('.cardCarrinho');
const carrinho = document.querySelector('.carrinho');

function exibirCarrinho(produto) {
    
    cardCarrinho.innerHTML += `
        <div class="produtoCarrinho">
            <img src="${produto.img}" alt="Foto do produto" class="produtoImgCarrinho">
            <h2 class="produtoNomeCarrinho">${produto.nome}</h2>
            <p class="produtoPrecoCarrinho">${produto.preco}</p>
            <p class="produto-categoria" hidden>${produto.categoria}</p>
            <p class="produtoDescricaoCarrinho">${produto.descricao}</p>
            <p class="produtoQtdCarrinho">${produto.quantidade} disponíveis</p>
        </div>
    `;

    const btnX = document.querySelector('.fecharCarrinho');

    btnX.addEventListener('click', () => {
        cardFundoCarrinho.classList.toggle('hidden');
        cardCarrinho.style.display = 'none';
        cardCarrinho.innerHTML = `
        <button class="fecharCarrinho">X</button>
        <button class="carrinhoCompra-btn">Comprar</button>
        `;
        console.log(listaCarrinho)
    })

    const comprar = document.querySelectorAll('.cardCompra-btn');
    
}


carrinho.addEventListener('click', () => {
    cardFundoCarrinho.classList.toggle('hidden');
    cardCarrinho.style.display = 'flex';
        for (let i = 0; i <= listaCarrinho.length - 1; i++) {
            exibirCarrinho(listaCarrinho[i])
        }
})