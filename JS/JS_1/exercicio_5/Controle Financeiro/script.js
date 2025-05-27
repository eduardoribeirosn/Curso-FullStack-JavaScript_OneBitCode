let dinheiro, continuar = true, escolha, alt;

alert("Bem vindo ao Controle Financeiro!")
dinheiro = parseFloat(prompt("Quanto dinheiro você tem? "))

do {
    escolha = prompt(`Qual opção deseja? (R$${dinheiro})\n` +
        "\n1 - Adicionar!" +
        "\n2 - Remover!" +
        "\n3 - Encerrar!"
    )
    switch (escolha) {
        case "1":
            alt = parseFloat(prompt(`Você tem R$${dinheiro}, quanto quer adicionar? `))
            dinheiro += alt
            alert(`Foi adicionado R$${alt}, e você ficou com R$${dinheiro}!`)
            break
        case "2":
            alt = parseFloat(prompt(`Você tem R$${dinheiro}, quanto quer remover? `))
            dinheiro -= alt
            alert(`Foi removido R$${alt}, e você ficou com R$${dinheiro}!`)
            break
        case "3":
            alert("Encerrando o sistema...")
            continuar = false
            break
        default:
            alert("Você escolheu uma opção inválida, escolha novamente!")
    }   
} while (continuar === true)