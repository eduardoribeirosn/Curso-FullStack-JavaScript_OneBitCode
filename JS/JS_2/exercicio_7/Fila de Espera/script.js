let fila = ["Matheus", "Marcos"], escolha, filac = "", consultado;

do {
    filac = ""
    for (let i = 1; i <= fila.length; i++) {
        filac += `${i}° ${fila[i - 1]} `
    }
    escolha = prompt(`Fila: ${filac}\n` +
        `\n1 - Novo Paciente.` +
        `\n2 - Consultar Paciente` +
        `\n3 - Sair`
    )
    switch (escolha) {
        case "1":
            fila.push(prompt("Nome do novo paciente!"))
            break
        case "2":
            consultado = fila.shift()
            if (consultado) {
                alert(`Paciente Consultado (${consultado})`)
            } else {
                alert("Não há paciente na fila.")
            }
            
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida, tente novamente!")
    }
} while (escolha !== "3")