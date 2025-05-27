let vagas = [
    {nome: "DEV Junior", descrição: "Programador, R$2.300,00", data: "31/01/2025", quantidade: 2, candidatos: ["Eduardo, Henri"]},
    {nome: "DEV Pleno", descrição: "Programador, R$5.200,00", data: "31/01/2025", quantidade: 1, candidatos: ["Maison"]},
    {nome: "DEV Senior", descrição: "Programador, R$10.100,00", data: "31/01/2025", quantidade: 0, candidatos: [""]}
]

function menu() {
    option = prompt(
        `Bem Vindo ao Sistema de Vagas de Emprego!` +
        `\nEscolha uma opção\n` +
        `\n1 - Listar vagas disponíveis;` +
        `\n2 - Criar um nova vaga;` +
        `\n3 - Visualizar uma vaga;` +
        `\n4 - Inscrever um candidato em uma vaga;` +
        `\n5 - Excluir uma vaga;` +
        `\n6 - Sair.`
    )
    return option
}

function listarVagas() {
    if(typeof vagas !== 'undefined') {
        let text = "Essas são as vagas:\n\n"
        vagas.forEach(function(vaga, i) {
            text += `${i + 1} - ${vaga.nome}, Canditados: ${vaga.quantidade}\n`
        })
        alert(text)
    } else {
        alert("Não existe nenhuma vaga disponível!")
    }
}

function criarNovaVaga() {
    let nomeVaga, descVaga, dataVaga
    nomeVaga = prompt("Qual é o nome da Vaga?")
    descVaga = prompt("Qual a descrição da Vaga?")
    dataVaga = prompt("Qual a data Limite para se inscrever? (formato: dd/mm/aaaa)")
    let confirmar = confirm(
        `Você deseja cadastrar a vaga abaixo?\n` +
        `\n${nomeVaga}` +
        `\n${descVaga}` +
        `\n${dataVaga}`
    )
    if (confirmar) {
        if (typeof vagas !== 'undefined') {
            vagas.push({nome: nomeVaga, descrição: descVaga, data: dataVaga, quantidade: 0})
            alert("Vaga cadastrada!")
            return vagas
        } else {
            let vagas = []
            vagas.push({
                nome: nomeVaga, 
                descrição: descVaga, 
                data: dataVaga, 
                quantidade: 0
            })
            alert("Vaga cadastrada!")
            return vagas
        }
    } else {
        alert("Vaga não cadastrada.")
    }
}

function visualizarVaga(pedirI) {
    if (typeof vagas !== 'undefined') {
        if (typeof vagas[pedirI - 1] !== 'undefined') {
            let listaCandidatos = vagas[pedirI - 1].candidatos
            alert(
                `${pedirI} - ${vagas[pedirI - 1].nome} - ${vagas[pedirI - 1].data}\n` +
                `\n${vagas[pedirI - 1].descrição}\n` +
                `\nQuantidade de Candidatos: ${vagas[pedirI - 1].quantidade}\n` +
                `\n${listaCandidatos}`
            )
        } else {
            alert("A vaga com este índice não existe.")
        }       
    } else {
        alert("Não existe nenhuma vaga cadastrada.")
    }
    
}

function inscreverCandidato() {
    if (typeof vagas !== 'undefined') {
        nomeCandidato = prompt("Qual o nome do Candidato?")
        indiceVaga = parseFloat(prompt("Qual o índice da Vaga?"))
        if (typeof vagas[indiceVaga - 1] !== 'undefined') {
            alert(`Deseja cadastrar o ${nomeCandidato} na vaga:\n`)
            visualizarVaga(indiceVaga)
            let confirmar = confirm(
                `Deseja cadastrar o ${nomeCandidato} na vaga mostrada anteriormente:`
            )
            if (confirmar) {
                vagas[indiceVaga - 1].candidatos.push(nomeCandidato)
                vagas[indiceVaga - 1].quantidade ++
                alert("Candidato inscrito!")
                return vagas
            } else {
                alert("Candidato não inscrito.")
                return vagas
            }
        } else {
            alert("Não existe uma vaga com este índice")
        }
    } else {
        alert("Não existe nenhuma vaga cadastrada.")
    }
}

function excluirVaga() {
    if (typeof vagas !== 'undefined') {
        let indiceVaga = parseFloat(prompt("Qual o índice da vaga a ser excluída?"))
        if (typeof vagas[indiceVaga - 1] !== 'undefined') {
            let confirma = confirm(
                `Deseja excluir a Vaga abaixo:\n` +
                `\n${visualizarVaga(indiceVaga)}`
            )
            if (confirma) {
                vagas.splice(indiceVaga - 1, 1)
                alert("Vaga deletada!")
            } else {
                alert("Vaga não deletada.")
            }
        } else {
            alert("Não existe uma vaga com este índice.")
        }
    } else {
        alert("Não existe nenhuma vaga cadastrada.")
    }
}

do {
    menu()
    switch(option) {
        case '1':
            listarVagas()
            break
        case '2':
            vagas = criarNovaVaga()
            break
        case '3':
            let pedirI = parseFloat(prompt("Qual o índice da Vaga que deseja visualizar?"))
            visualizarVaga(pedirI)
            break
        case '4':
            vagas = inscreverCandidato()
            break
        case '5':
            excluirVaga()
            break
        case '6':
            alert("Encerrando...")
            break
        default:
            alert("Opção Inválida... Tente Novamente!")
    }
} while(option !== '6')