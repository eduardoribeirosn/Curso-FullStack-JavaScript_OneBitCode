function scalePlayer() {
    let infos = document.getElementById('infos')
    if(infos.children.length > 0) {
        return
    }
    let ul = document.createElement('ul')
    ul.id = 'selection'
    let posLi = document.createElement('li')
    let posLabel = document.createElement('label')
    let posInput = document.createElement('input')
    posLabel.innerText = 'Posição do Jogador:'
    posInput.type = 'text'
    posInput.id = 'position'
    posLi.append(posLabel, posInput)
    ul.appendChild(posLi)

    let nameLi = document.createElement('li')
    let nameLabel = document.createElement('label')
    let nameInput = document.createElement('input')
    nameLabel.innerText = 'Nome do Jogador:'
    nameInput.type = 'text'
    nameInput.id = 'namePlayer'
    nameLi.append(nameLabel, nameInput)
    ul.appendChild(nameLi)

    let numLi = document.createElement('li')
    let numLabel = document.createElement('label')
    let numInput = document.createElement('input')
    numLabel.innerText = 'Número da Camisa:'
    numInput.type = 'number'
    numInput.id = 'numPlayer'
    numLi.append(numLabel, numInput)
    ul.appendChild(numLi)

    let butLi = document.createElement('li')
    let button = document.createElement('button')
    button.innerText = 'Escalar'
    button.setAttribute('onclick', 'scale()')
    button.id = 'scale'
    butLi.appendChild(button)
    ul.appendChild(butLi)

    infos.appendChild(ul)

}

function removePlayer() {
    let team = document.getElementById('team')
    let idNum = parseFloat(prompt("Qual o Número do Jogador que você deseja remover?"))
    let idJogador = document.getElementById(`player-${idNum}`)
    team.removeChild(idJogador)
}

function scale() {
    let team = document.getElementById('team')
    let card = document.createElement('div')
    card.setAttribute('class', 'card')
    let pos = document.createElement('h3')
    let name = document.createElement('h3')
    let num = document.createElement('h3')

    let position = document.getElementById('position')
    let namePlayer = document.getElementById('namePlayer')
    let numPlayer = document.getElementById('numPlayer')
    if(position.value.length <= 0) {
        return alert('Você não colocou a posição do Jogador!')
    }
    if(namePlayer.value.length <= 0) {
        return alert('Você não colocou o Nome do Jogador!')
    }
    if(numPlayer.value.length <= 0) {
        return alert('Você não colocou o Número do Jogador!')
    }
    card.id = `player-${numPlayer.value}`
    pos.innerText = position.value
    name.innerText = namePlayer.value
    num.innerText = numPlayer.value

    let confirmation = confirm(`Escalar ${namePlayer.value} como ${position.value} ?`)
    if(confirmation) {
        card.append(pos, name, num)
        team.appendChild(card)
    }
    let infos = document.getElementById('infos')
    let ul = document.getElementById('selection')
    infos.removeChild(ul)
}

/* Terminar a parte de Escalar um Jogador, falta a confirmação, colocar funcionalidade no botão Escalar, adicionar a funcionalidade no botão Remover Jogador... 

*/