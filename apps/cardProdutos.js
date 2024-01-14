const btnVerificar = document.querySelectorAll('.produto-btn')
const cardFundo = document.querySelector('.background')
const card = document.querySelector('.card')
const produtos = document.querySelectorAll('.produto');
const btnsProduto = document.querySelectorAll('.produto-btn');

const produtosNum = document.querySelector('.carrinhoNum');

var listaCarrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];

function exibirCard(produto) {

    const imgProduto = produto.childNodes[1].src;
    const nomeProduto = produto.childNodes[3].innerHTML;
    const precoProduto = produto.childNodes[5].innerHTML;
    const descricaoProduto = produto.childNodes[9].innerHTML;
    const quantidadeProduto = produto.childNodes[11].innerHTML;
    const idProduto = Math.floor(Math.random() * 10)
    
    card.innerHTML = `
        <button class="fecharCard">X</button>
        <img src="${imgProduto}" alt="Foto do produto" class="card-img">
        <h2 class="card-titulo">${nomeProduto}</h2>
        <p class="card-preco"><strong>Preço: </strong>${precoProduto}</p>
        <p class="card-descricao"><strong>Descrição: </strong><br>${descricaoProduto}</p>
        <p class="card-quantidade"><strong>Quantidade: </strong>${quantidadeProduto}</p>
        <button class="cardCarrinho-btn" id="${idProduto}">Adicionar ao carrinho</button>
        `;

        const btnX = document.querySelector('.fecharCard');

        btnX.addEventListener('click', () => {
            cardFundo.classList.toggle('hidden');
            card.style.display = 'none';
            card.innerHTML = '';
            produtosNum.innerText = listaCarrinho == 0 ? '' : `${listaCarrinho.length}`;
        })

        const addListaCarrinho = {
            'img': imgProduto,
            'nome': nomeProduto,
            'preco': precoProduto,
            'descricao': descricaoProduto,
            'quantidade': quantidadeProduto,
            'id': idProduto
        }

        const addCarrinho = document.querySelector('.cardCarrinho-btn');
        addCarrinho.addEventListener('click', () => {
            if (listaCarrinho.length <= 9) {
                listaCarrinho.push(addListaCarrinho);
                sessionStorage.setItem('carrinho', JSON.stringify(listaCarrinho));
                location.reload();
            } else {
                alert('Carrinho cheio')
            }
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

produtosNum.innerText = listaCarrinho == 0 ? '' : `${listaCarrinho.length}`;
