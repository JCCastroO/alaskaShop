const section = document.querySelector('.principal');

const divsProdutos = document.querySelectorAll('.produto');
const categorias = document.querySelectorAll('[data-categoria]');


var listaProdutos = JSON.parse(localStorage.getItem('produto')) || [];

if (listaProdutos.length == 0) {
    divsProdutos.forEach(item => {
        const produtosLocal = {
            'img': item.childNodes[1].src,
            'nome': item.childNodes[3].innerHTML,
            'preco': item.childNodes[5].innerHTML,
            'categoria': item.childNodes[7].innerHTML,
            'descricao': item.childNodes[9].innerHTML,
            'quantidade': parseInt(item.childNodes[11].innerHTML),
            'id': parseInt(item.childNodes[13].id)
        }

        listaProdutos.push(produtosLocal);
    });
    localStorage.setItem('produto', JSON.stringify(listaProdutos));
}


function exibirProduto(produto) {
    if (produto.quantidade > 0) {
        section.innerHTML += `
            <div class="produto"">
                <img src="${produto.img}" alt="Foto do produto" class="produto-img">
                <h2 class="produto-titulo">${produto.nome}</h2>
                <p class="produto-preco">R$${produto.preco}</p>
                <p class="produto-categoria" hidden>${produto.categoria}</p>
                <p class="produto-descricao" hidden>${produto.descricao}</p>
                <p class="produto-quantidade" hidden>${produto.quantidade}</p>
                <button class="produto-btn" id="${produto.id}">Verificar</button>
            </div>
        `;
    }


}

listaProdutos.forEach(produto => {
    exibirProduto(produto);
})

categorias.forEach(categoria => {
    categoria.addEventListener('click', () => {
        for (let i = 0; i <= divsProdutos.length - 1; i++) {
            const filtro = categoria.innerHTML;
            const produtos = divsProdutos[i].childNodes[7].innerHTML;
            const produto = divsProdutos[i];

            if (filtro != produtos && filtro != 'Todos') {
                produto.style.display = "none";
            } else {
                produto.style.display = "grid";
            }
        }

    })
});

const formBusca = document.querySelector('.cabecalho__formulario');

formBusca.addEventListener('submit', (e) => {
    e.preventDefault();

    for (let i = 0; i <= divsProdutos.length - 1; i++) {
        const pesquisa = formBusca.childNodes[1].value.toLowerCase();
        const produtos = [divsProdutos[i].childNodes[3].innerHTML.toLowerCase()];
        const produto = divsProdutos[i];

        if (pesquisa != produtos && pesquisa != 'Todos' && pesquisa != '') {
            produto.style.display = "none";
        } else {
            produto.style.display = "grid";
        }
    }
})
