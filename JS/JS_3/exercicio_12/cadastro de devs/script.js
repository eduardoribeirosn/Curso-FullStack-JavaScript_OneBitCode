let click = 0
let addNewTec = document.getElementById('addNewTec')
let devs = []

addNewTec.addEventListener('click', function () {
    let campoTec = document.getElementById('technologists')
    let div = document.createElement('div')
    let tecInput = document.createElement('input')
    let br = document.createElement('br')
    let radio1 = document.createElement('input')
    let radio2 = document.createElement('input')
    let radio3 = document.createElement('input')
    let label1 = document.createElement('label')
    let label2 = document.createElement('label')
    let label3 = document.createElement('label')
    let buttonRemoveTec = document.createElement('button')
    tecInput.type = 'text'
    tecInput.name = 'tec'
    tecInput.id = 'tec1' + click
    tecInput.placeholder = 'React.js, next.js...'
    radio1.value = '0 - 2 anos'
    radio1.type = 'radio'
    radio1.name = 'expTec' + click
    radio1.id = 'expTec1' + click
    label1.setAttribute('for', `expTec1${click}`)
    label1.innerText = '0 - 2 anos'
    radio2.value = '3 - 4 anos'
    radio2.type = 'radio'
    radio2.name = 'expTec' + click
    radio2.id = 'expTec2' + click
    label2.setAttribute('for', `expTec2${click}`)
    label2.innerText = '3 - 4 anos'
    radio3.value = '5+ anos'
    radio3.type = 'radio'
    radio3.name = 'expTec' + click
    radio3.id = 'expTec3' + click
    label3.setAttribute('for', `expTec3${click}`)
    label3.innerText = '5+ anos'
    buttonRemoveTec.id = 'removeTec' + click
    buttonRemoveTec.innerText = 'Remover Tecnologia'
    buttonRemoveTec.setAttribute('onclick', 'removeTec(event)')

    div.id = 'card-' + click
    div.setAttribute('class', 'card')

    click ++
    
    div.append(br, tecInput, radio1, label1, radio2, label2, radio3, label3, buttonRemoveTec)
    campoTec.appendChild(div)
    /*<br><br>
        <input type="text" name="tec" id="tec1" placeholder="React.js, next.js...">
        <input type="radio" name="expTec" id="expTec1">
        <label for="expTec1">0 - 2 anos</label>
        <input type="radio" name="expTec" id="expTec2">
        <label for="expTec2">3 - 4 anos</label>
        <input type="radio" name="expTec" id="expTec3">
        <label for="expTec3">5+ anos</label>
        <button id="removeTec">Remover Tecnologia</button>*/
})

function removeTec(ev) {
    let campoTec = document.getElementById('technologists')
    //let idButton = document.getElementById('removeTec' + ev.currentTarget.parentNode.id[5])
    let idButton = ev.currentTarget
    //let idRemove = parseFloat(idButton[8])
    let idRemove = idButton.parentNode.id.replace('card-', '')
    let cardtoRemove = document.getElementById('card-' + idRemove)

    campoTec.removeChild(cardtoRemove)
}

let registerDev = document.getElementById('registerDev')

registerDev.addEventListener('click', function(ev) {
    ev.preventDefault()

    let nameDev = document.getElementById('nameDev').value
    let dev = {
        name: nameDev,
        tecnologias: []
    }
    let tecs = '' 
    document.querySelectorAll('.card').forEach(function (item, i) {
        let inputText = item.querySelector('input[type="text"]').value

        let radio = document.querySelectorAll(`input[type="radio"]:checked`)[i].value
        tecs += `Tecnologia: ${inputText} = ${radio}\n` 
        dev.tecnologias.push({
            nameTec: inputText,
            timeTec: radio
        })
        return dev
    })

    devs.push(dev)
    console.log(devs)
    alert("Dev Cadastrado com sucesso!")

    let campoTec = document.getElementById('technologists')
    let nameDev2 = document.getElementById('nameDev')
    nameDev2.value = ''
    while (campoTec.firstChild) {
        campoTec.removeChild(campoTec.firstChild);
    }
})