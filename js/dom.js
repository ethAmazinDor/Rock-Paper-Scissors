const container = document.querySelector('.container')
const paragraph = document.createElement('p')
const header3 = document.createElement('h3')
const divBackground = document.createElement('div')
const h1 = document.createElement('h1')
const newP = document.createElement('p')
const btn = document.querySelector('#btn')
const buttons = document.querySelectorAll('button')

h1.textContent = 'im a h1 DIV!'
newP.textContent = 'me TOO'
divBackground.style.cssText = 'border: 1px solid black; background: pink; '
paragraph.style.color = 'red'
paragraph.textContent = 'Hey, im red!'
header3.style.color = 'blue'
header3.textContent = 'I\'m a blue h3!'

divBackground.appendChild(h1)
divBackground.appendChild(newP)

btn.addEventListener('click', (e) => {
    e.target.style.background = 'blue'
})
container.appendChild(paragraph)
container.appendChild(header3)
container.appendChild(divBackground)

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id)
    })
})