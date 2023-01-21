const container = document.querySelectorAll('.contain')

container.forEach(contain => {
    contain.addEventListener('click', () => {
        removeActive()
        contain.classList.add('active')
    })
})

function removeActive() {
    container.forEach(contain => {
        contain.classList.remove('active')
    })
}