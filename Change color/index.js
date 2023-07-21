const colors = ['Red' , 'Blue' , 'Yellow' , 'Purple' , 'Green' , 'Black' , 'Gray']
const btn = document.getElementById('btn')
const nameColor = document.querySelector('.color')

btn.addEventListener('click', function() {
    const random = randomColor()
    document.body.style.background = colors[random]
    nameColor.textContent = colors[random]
})

function randomColor() {
    return Math.floor(Math.random() * colors.length)
}
