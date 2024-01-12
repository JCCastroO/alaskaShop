const btnVerificar = document.querySelectorAll('.produto-btn')
const cardFundo = document.querySelector('.background')
const card = document.querySelector('.card')
const btnX = document.querySelector('.fecharCard')

btnVerificar.forEach(botao => {
    botao.addEventListener('click', () => {
        cardFundo.classList.toggle('hidden')
        card.style.display = 'flex';
    })
    
})

btnX.addEventListener('click', () => {
    cardFundo.classList.toggle('hidden')
        card.style.display = 'none';
})