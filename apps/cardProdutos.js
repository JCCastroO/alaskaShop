const btnVerificar = document.querySelectorAll('.produto-btn')
const cardFundo = document.querySelector('.background')
const card = document.querySelector('.card')
const produtos = document.querySelectorAll('.produto');
const btnsProduto = document.querySelectorAll('.produto-btn');

const produtosNum = document.querySelector('.carrinhoNum');

var listaCarrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];

function exibirCard(produto) {

    const idProduto = Math.floor(Math.random() * 10)

    card.innerHTML = `
        <button class="fecharCard">X</button>
        <img src="${produto.img}" alt="Foto do produto" class="card-img">
        <h2 class="card-titulo">${produto.nome}</h2>
        <p class="card-preco"><strong>Preço: </strong>R$${produto.preco}</p>
        <p class="card-descricao"><strong>Descrição: </strong><br>${produto.descricao}</p>
        <p class="card-quantidade"><strong>Quantidade: </strong>${produto.quantidade}</p>
        <button class="cardCarrinho-btn" id="${idProduto}">Adicionar ao carrinho</button>
        `;

    const btnX = document.querySelector('.fecharCard');

    btnX.addEventListener('click', () => {
        cardFundo.classList.toggle('hidden');
        card.style.display = 'none';
        nav.style.display = 'flex';
        card.innerHTML = '';
        produtosNum.innerText = listaCarrinho == 0 ? '' : `${listaCarrinho.length}`;
    })

    const addListaCarrinho = {
        'img': produto.img,
        'nome': produto.nome,
        'preco': produto.preco,
        'descricao': produto.descricao,
        'quantidade': produto.quantidade,
        'id': idProduto
    }

    const addCarrinho = document.querySelector('.cardCarrinho-btn');
    addCarrinho.addEventListener('click', () => {
        if (listaCarrinho.length <= 9) {
            if (produto.quantidade > 0) {
                listaCarrinho.push(addListaCarrinho);
                sessionStorage.setItem('carrinho', JSON.stringify(listaCarrinho));
                location.reload();
            } else {
                alert('Produto indisponível!')
            }
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
        for (let i = 0; i <= listaProdutos.length - 1; i++) {
            const idProduto = listaProdutos[i].id;
            if (idProduto == botaoId) {
                exibirCard(listaProdutos[i]);
                nav.style.display = 'none';
            }

        }
    })

})

produtosNum.innerText = listaCarrinho == 0 ? '' : `${listaCarrinho.length}`;
