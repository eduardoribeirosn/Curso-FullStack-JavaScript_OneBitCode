import showHistoric from "./showHistoric.js"
import toggleMenu from "./toggleMenu.js"
import updateMoney from "./updateMoney.js"

export default async function(idTrans) {
    const pix = document.querySelector('.pix')
    const form = document.createElement('form')
    form.style.width = '100%'
    form.style.display = 'flex'
    form.style.flexDirection = 'column'
    form.style.alignItems = 'center'
    // form.style.justifyContent = 'space-around'

    const br1 = document.createElement('br')
    const br2 = document.createElement('br')

    const labelName = document.createElement('label')
    labelName.htmlFor = `idName-${idTrans}`
    labelName.textContent = `Novo Nome`
    labelName.style.display = 'block'
    labelName.style.textAlign = 'center'
    labelName.style.fontSize = '3rem'
    labelName.style.margin = '1rem'
    labelName.style.fontWeight = 'bold'

    const inputName = document.createElement('input')
    inputName.id = `idName-${idTrans}`
    inputName.type = 'text'
    inputName.style.width = `80%`
    inputName.style.padding = '1rem 0'
    // inputName.style.margin = 'auto'
    inputName.style.fontSize = '2rem'
    inputName.style.textAlign = 'center'

    const labelValue = document.createElement('label')
    labelValue.htmlFor = `idValue-${idTrans}`
    labelValue.textContent = `Novo Valor`
    labelValue.style.display = 'block'
    labelValue.style.textAlign = 'center'
    labelValue.style.fontSize = '3rem'
    labelValue.style.margin = '1rem'
    labelValue.style.fontWeight = 'bold'

    const inputValue = document.createElement('input')
    inputValue.id = `idValue-${idTrans}`
    inputValue.type = 'text'
    inputValue.style.width = '80%'
    inputValue.style.padding = '1rem 0'
    // inputValue.style.marginLeft = '-1rem'
    inputValue.style.fontSize = '2rem'
    inputValue.style.textAlign = 'center'

    const button = document.createElement('button')
    button.id = `idPay-${idTrans}`
    button.textContent = 'Alterar'
    button.style.width = '40%'
    button.style.padding = '1rem .5rem'
    button.style.borderRadius = '1rem'
    button.style.border = 'transparent solid 1px'
    button.style.margin =  '2rem'
    button.style.fontWeight = 'bold'
    button.style.fontSize = '2rem'
    button.style.backgroundColor = '#ca0'

    form.append(labelName, inputName, labelValue, inputValue, br2, button)

    const div2 = document.createElement('div2')
    div2.id = 'payOrReceive'
    // div2.style.display = 'flex'
    // div2.style.justifyContent = 'space-around'
    // div2.style.padding = '2rem'
    // div2.style.alignItems = 'center'
    div2.style.height = '100%'
    // div2.style.width = '100%'
    div2.classList.add('dflex')

    div2.append(form)

    pix.append(div2)

    form.addEventListener('submit', async (ev) => {
        ev.preventDefault()
        if (inputName.value.trim() != '' && inputValue.value.trim() != '') {
            const formData = {
                id: `${idTrans}`,
                name: inputName.value, 
                value: inputValue.value
            }

            formData.value = ((formData.value * 100).toFixed(2) / 100)

            await fetch(`http://localhost:3000/transactions/${idTrans}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(formData)
            })
            form.reset()

            updateMoney()
            showHistoric()
            
            toggleMenu(div2)
            toggleMenu()
            pix.removeChild(div2)
        } else {
            alert('É preciso preencher todos os campos.')
            toggleMenu(div2)
            toggleMenu()
            pix.removeChild(div2)
        }
    })
}