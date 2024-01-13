const btnVerificar = document.querySelectorAll('.produto-btn')
const cardFundo = document.querySelector('.background')
const card = document.querySelector('.card')

const produtos = document.querySelectorAll('.produto');

const btnsProduto = document.querySelectorAll('.produto-btn');

function exibirCard(produto) {

    const imgProduto = produto.childNodes[1].src;
    const nomeProduto = produto.childNodes[3].innerHTML;
    const precoProduto = produto.childNodes[5].innerHTML;
    const descricaoProduto = produto.childNodes[9].innerHTML;
    const quantidadeProduto = produto.childNodes[11].innerHTML;
    
    card.innerHTML = `
        <button class="fecharCard">X</button>
        <img src="${imgProduto}" alt="Foto do produto" class="card-img">
        <h2 class="card-titulo">${nomeProduto}</h2>
        <p class="card-preco"><strong>Preço: </strong>${precoProduto}</p>
        <p class="card-descricao"><strong>Descrição: </strong><br>${descricaoProduto}</p>
        <p class="card-quantidade"><strong>Quantidade: </strong>${quantidadeProduto}</p>
        <button class="cardCarrinho-btn">Adicionar ao carrinho</button>
        <button class="cardCompra-btn">Comprar</button>
        `;

        const btnX = document.querySelector('.fecharCard');

        btnX.addEventListener('click', () => {
            cardFundo.classList.toggle('hidden');
                card.style.display = 'none';
        })
    
}

btnVerificar.forEach(botao => {
    botao.addEventListener('click', () => {
        const botaoId = botao.id;
        
        cardFundo.classList.toggle('hidden');
        card.style.display = 'grid';
        for (let i = 0; i <= produtos.length - 1; i++) {
            const idProduto = btnsProduto[i].id;
            if (idProduto == botaoId) {
                exibirCard(produtos[i]);
            }
            
        }
    })
    
})




