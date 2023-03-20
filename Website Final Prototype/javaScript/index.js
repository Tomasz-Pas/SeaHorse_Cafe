const button = document.getElementsByClassName("button")[0]
const links = document.getElementsByClassName("nav-links")[0]

button.addEventListener('click', () => {
    links.classList.toggle('active')
})