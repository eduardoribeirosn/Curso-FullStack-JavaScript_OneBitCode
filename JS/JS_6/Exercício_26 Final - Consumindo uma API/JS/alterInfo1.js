import alterInfo2 from "./alterInfo2.js"
import toggleMenu from "./toggleMenu.js"

export default async function alterInfo1() {

    const pix = document.querySelector('.pix')
    const form = document.createElement('form')
    form.style.width = '100%'
    form.style.display = 'flex'
    form.style.flexDirection = 'column'
    form.style.alignItems = 'center'
    form.style.justifyContent = 'center'

    const labelId = document.createElement('label')
    labelId.htmlFor = `ID`
    labelId.textContent = `ID`
    labelId.style.display = 'block'
    labelId.style.textAlign = 'center'
    labelId.style.fontSize = '3rem'
    labelId.style.margin = '1rem'
    labelId.style.fontWeight = 'bold'

    const inputId = document.createElement('input')
    inputId.id = `ID`
    inputId.type = 'text'
    inputId.style.width = `80%`
    inputId.style.padding = '1rem 0'
    // inputId.style.margin = 'auto'
    inputId.style.fontSize = '1.5rem'
    inputId.style.textAlign = 'center'
    inputId.placeholder = 'Qual ID vai ser alterado'

    const button = document.createElement('button')
    button.id = `button`
    button.textContent = 'Alterar'
    button.style.width = '40%'
    button.style.padding = '1rem .5rem'
    button.style.borderRadius = '1rem'
    button.style.border = 'transparent solid 1px'
    button.style.margin =  '2rem'
    button.style.fontWeight = 'bold'
    button.style.fontSize = '2rem'
    button.style.backgroundColor = '#ca0'

    form.append(labelId, inputId, button)

    const div = document.createElement('div')
    div.id = 'alter'
    div.classList.add('dflex')
    div.style.height = '100%'

    div.append(form)

    pix.append(div)

    form.addEventListener('submit', async (ev) => {
        ev.preventDefault()
        fetch('http://localhost:3000/transactions')
        .then(response => response.json())
        .then(transactions => {
            if (transactions[inputId.value - 1]) {
                console.log('foi')
                toggleMenu(div)
                pix.removeChild(div)
                alterInfo2(inputId.value)
            } else {
                alert(`O número ${inputId.value} não é um ID válido, use apenas os que estão no histórico`)
                form.reset()
                toggleMenu(div)
                toggleMenu()
                pix.removeChild(div)
            }
        })
        
    })
}