const section = document.querySelector('.principal');




var listaProdutos = JSON.parse(localStorage.getItem('produto')) || [];

if (listaProdutos.length == 0) {
    const produtosLocal = [
        {
            'img': "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSq-owNWVIdUKBpouCfr45wo4RMGrzSk0GUnzdd39kVCVpStB-0",
            'nome': "Touca",
            'preco': 10.00,
            'categoria': "Toucas",
            'descricao': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            'quantidade': 1,
            'id': 1001
        },
        {
            'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQAgh62-C90HfRMRJGa4cgd7iKIAMrBJNor-1gWNrdzQdAIAcAo",
            'nome': "Cachecol",
            'preco': 20.00,
            'categoria': "Cachecol",
            'descricao': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            'quantidade': 1,
            'id': 1002
        },
        {
            'img': "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQAJw8g11WGoBXZHNLpzCBj8_VuG1xRzFpw-iBH6FPGIuZCJzTq",
            'nome': "Moletom",
            'preco': 30.00,
            'categoria': "Moletons",
            'descricao': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            'quantidade': 3,
            'id': 1003
        },
        {
            'img': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Pyz70AOOaXBmE22nDmTaf2V0jFQ7D_wSL3wmbQ9U314Q3vCn",
            'nome': "Camiseta",
            'preco': 40.00,
            'categoria': "Camisetas",
            'descricao': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            'quantidade': 5,
            'id': 1004
        },
        {
            'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTThxO7TUIEUK_NwSd4fYrUQtuiIwj0tYxnR9wDfw_cZ9r2pO7K",
            'nome': "Luva",
            'preco': 50.00,
            'categoria': "Luvas",
            'descricao': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            'quantidade': 6,
            'id': 1005
        },
        {
            'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRcSCeROYidIaG68IxlzkASZnmYXllutDLcMrfShixQSqEMme7u",
            'nome': "Calça",
            'preco': 60.00,
            'categoria': "Calças",
            'descricao': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            'quantidade': 7,
            'id': 1006
        },
        {
            'img': "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQpkPzhBmiodMluU9rPBl2a0MuBz6ZD3I3CItWbnLFbglXPfpmx",
            'nome': "Meias",
            'preco': 70.00,
            'categoria': "Meias",
            'descricao': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            'quantidade': 8,
            'id': 1007
        },
        {
            'img': "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSw4lWdLeBhMIMjh7gy70q71EvM2Wx8iBgElOahRDV_eDesD_Zc",
            'nome': "Botas",
            'preco': 80.00,
            'categoria': "Botas",
            'descricao': "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            'quantidade': 9,
            'id': 1008
        },
    ]

    for (let i = 0; i < produtosLocal.length; i++) {
        listaProdutos.push(produtosLocal[i]);
    }
    
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
        const produtos = divsProdutos[i].childNodes[3].innerHTML.toLowerCase();
        const produto = divsProdutos[i];

        if (produtos.includes(pesquisa)) {
            produto.style.display = "grid";
        } else {
            produto.style.display = "none";
        }
    }
})
