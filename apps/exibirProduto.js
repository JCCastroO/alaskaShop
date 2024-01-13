const section = document.querySelector('.principal');


const listaProdutos = JSON.parse(localStorage.getItem('produto')) || [];

function exibirProduto(produto) {
    section.innerHTML += `
        <div class="produto"">
            <img src="${produto.img}" alt="Foto do produto" class="produto-img">
            <h2 class="produto-titulo">${produto.produto}</h2>
            <p class="produto-preco">R$${produto.preco}</p>
            <p class="produto-categoria" hidden>${produto.categoria}</p>
            <p class="produto-descricao" hidden>${produto.descricao}</p>
            <p class="produto-quantidade" hidden>${produto.quantidade}</p>
            <button class="produto-btn id="${produto.id}">Verificar</button>
        </div>
    `;

    
}

listaProdutos.forEach(produto => {
    exibirProduto(produto);
})

const divsProdutos = document.querySelectorAll('.produto');
const categorias = document.querySelectorAll('[data-categoria]');

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