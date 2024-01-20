const mobileBtn = document.querySelector('.mobile');
const nav = document.querySelector('.cabecalho__navegacao');

mobileBtn.addEventListener('click', () => {
    if (nav.style.display == "none") {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none"
    }
})