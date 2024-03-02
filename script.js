const buttonyes = document.querySelector('#yes')
buttonyes.addEventListener('click', () => {
    document.querySelector('#message').style.display = 'flex'
})

const buttonyes1 = document.querySelector('#yes1')
buttonyes1.addEventListener('click', () => {
    document.querySelector('#message1').style.display = 'flex'
})

const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes3')

let fontSize = 2

let messages = [
  'Estas segura?',
  'Porfavorcito',
  'mmmm apura :c',
  'me corto con las tijeras veras',
  'No, por gay'
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + 4
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message2').style.display = 'flex'
})