const imoveis = []
let choice = ""

do {
    choice = prompt(`Imóveis Cadastrados: ${imoveis.length}\n` +
        `\n1 - Salvar um Imóvel.` +
        `\n2 - Mostrar todos Imóveis.` +
        `\n3 - Sair.`
    )
    switch (choice) {
        case "1":
            let nome = prompt("Qual o nome do proprietário? ")
            let quarto = parseFloat(prompt("Quantos quartos tem? "))
            let banheiro = parseFloat(prompt("Quantos banheiros tem? "))
            let garagem = prompt("Tem garagem?\n1 - Sim 2 - Não")
            if (garagem == "1") {
                garagem = "Sim"
            } else {
                garagem = "Não"
            }
            let imovel = {
                nome: nome,
                quartos: quarto,
                banheiros: banheiro,
                garagem: garagem
            }

            let confirmacao = confirm(
                `Salvar este Imóvel?\n` +
                `\nProprietário: ${imovel.nome}` +
                `\nQuartos: ${imovel.quartos}` +
                `\nBanheiros: ${imovel.banheiros}` +
                `\nGaragem: ${imovel.garagem}`
            )

            if (confirmacao) {
                imoveis.push(imovel)
                alert("Imóvel Salvo!")
            } else {
                alert("Voltando ao menu!")
            }
            break
        case "2":
            if (imoveis.length === 0) {
                alert("Não tem Imóvel cadastrado!")
            } else {
                for (let i = 1; i <= imoveis.length; i++) {
                    alert(
                        `${i}° Imóvel:\n` +
                        `\nNome do proprietário: ${imoveis[i-1].nome}` +
                        `\nQuantidade de quartos: ${imoveis[i-1].quartos}` +
                        `\nQuantidade de banheiros: ${imoveis[i-1].banheiros}` +
                        `\nTem Garagem?: ${imoveis[i-1].garagem}`
                    )
                }
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida, tente novamente...")        
    }
} while (choice !== "3")