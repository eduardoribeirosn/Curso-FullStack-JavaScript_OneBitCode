let monte = [23, 41, 3, 67, 43, 23], escolha;

do {
    escolha = prompt(`Cartas: ${monte.length}.\n` +
        `\n1 - Adicionar uma carta` +
        `\n2 - Puxar uma carta` + 
        `\n3 - Sair`
    )
    switch (escolha) {
        case "1":
            monte.push(prompt("Qual o nome da carta? "))
            break
        case "2":
            let puxar = monte.pop()
            if (!puxar) {
                alert("Não há carta no monte!")
            } else {
                alert(`A carta puxada foi a ${puxar}`)
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção Inválida, tente novamente...")
    }
} while (escolha !== "3")