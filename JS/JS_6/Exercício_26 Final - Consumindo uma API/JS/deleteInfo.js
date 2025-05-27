import showHistoric from "./showHistoric.js"
import toggleMenu from "./toggleMenu.js"
import updateMoney from "./updateMoney.js"

export default async function deleteInfo() {
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
    inputId.placeholder = 'Qual ID vai ser deletado'

    const button = document.createElement('button')
    button.id = `button`
    button.textContent = 'Deletar'
    button.style.width = '40%'
    button.style.padding = '1rem .5rem'
    button.style.borderRadius = '1rem'
    button.style.border = 'transparent solid 1px'
    button.style.margin =  '2rem'
    button.style.fontWeight = 'bold'
    button.style.fontSize = '2rem'
    button.style.backgroundColor = '#222'

    form.append(labelId, inputId, button)

    const div = document.createElement('div')
    div.id = 'alter'
    div.classList.add('dflex')
    div.style.height = '100%'

    div.append(form)

    pix.append(div)

    form.addEventListener('submit', async (ev) => {
        ev.preventDefault()
        let c = confirm(`Você deseja excluír o ID ${inputId.value}?`)
        if (c) {
            await fetch(`http://localhost:3000/transactions/${inputId.value}`, {
                'method': 'DELETE'
            })
            .then(response => {
                if(response.ok) {
                    alert(`Transação com o ID ${inputId.value} excluída.`)
                        form.reset()
                        toggleMenu(div)
                        toggleMenu()
                        pix.removeChild(div)

                        updateMoney()
                        showHistoric()
                    
                } else {
                    // alert(`Erro ao deletar a transação com o ID ${inputId.value}`)
                    alert(`ID ${inputId.value} não existe`)
                    form.reset()
                    toggleMenu(div)
                    toggleMenu()
                    pix.removeChild(div)
                }
            })
            .catch(error => {
                alert(`Erro na requisição: ${error}`)
                form.reset()
                toggleMenu(div)
                toggleMenu()
                pix.removeChild(div)
            })
        } else {
            alert(`ID ${inputId.value} não excluído!`)
            form.reset()
            toggleMenu(div)
            toggleMenu()
            pix.removeChild(div)
        }
    })
}