const cardFundoCarrinho = document.querySelector('.background');
const cardCarrinho = document.querySelector('.cardCarrinho');
const carrinho = document.querySelector('.carrinho');

var listaCarrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];

function exibirCarrinho(produto) {

    cardCarrinho.innerHTML += `
        <div class="produtoCarrinho">
            <img src="${produto.img}" alt="Foto do produto" class="produtoImgCarrinho">
            <h2 class="produtoNomeCarrinho">${produto.nome}</h2>
            <p class="produtoPrecoCarrinho">${produto.preco}</p>
            <p class="produto-categoria" hidden>${produto.categoria}</p>
            <p class="produtoDescricaoCarrinho">${produto.descricao}</p>
            <p class="produtoQtdCarrinho">${produto.quantidade} disponíveis</p>
            <button class="excluirItem" id="${produto.id}">Remover</button>
        </div>
    `;


    const removerItem = document.querySelectorAll('.excluirItem');

    removerItem.forEach(excluir => {
        excluir.addEventListener('click', () => {
            const btnId = excluir.id;

            for (let e = 0; e <= listaCarrinho.length - 1; e++) {
                const produtoId = listaCarrinho[e].id
                if (btnId == produtoId) {
                    const produto = listaCarrinho[e]
                    listaCarrinho = listaCarrinho.filter(item => item != produto);
                    sessionStorage.setItem('carrinho', JSON.stringify(listaCarrinho));
                    location.reload();
                }
            }
        })
    })


}


carrinho.addEventListener('click', () => {
    cardFundoCarrinho.classList.toggle('hidden');
    cardCarrinho.style.display = 'flex';

    
    const qtdCarrinho = document.querySelector('.quantidadeCarrinho');
    qtdCarrinho.innerText = listaCarrinho == 0 ? `Produtos: ` : `Produtos: ${listaCarrinho.length}`

    for (let i = 0; i <= listaCarrinho.length - 1; i++) {
        exibirCarrinho(listaCarrinho[i])
    }

    const btnX = document.querySelector('.fecharCarrinho');
    const comprar = document.querySelector('.carrinhoCompra-btn');
    const limparCarrinho = document.querySelector('.carrinhoLimpar-btn');

    btnX.addEventListener('click', () => {
        cardFundoCarrinho.classList.toggle('hidden');
        cardCarrinho.style.display = 'none';
        cardCarrinho.innerHTML = `
        <button class="fecharCarrinho">X</button>
        <div class="btnsCarrinho">
            <span class="quantidadeCarrinho"></span>
            <button class="carrinhoCompra-btn">Comprar</button>
            <button class="carrinhoLimpar-btn">Limpar carrinho</button>
        </div>
        `;
    })

    comprar.addEventListener('click', () => {
        for (let x = 0; x <= listaCarrinho.length - 1; x++) {
            const itemCarrinho = listaCarrinho[x]
            const itemStorage = listaProdutos[x]
            if (itemCarrinho.produto == itemStorage.nome) {

                console.log(itemCarrinho.quantidade - 1)
            }
        }
    })

    limparCarrinho.addEventListener('click', () => {
        listaCarrinho = [];
        sessionStorage.setItem('carrinho', JSON.stringify(listaCarrinho));
        location.reload();
    })
})

