let nome, qcidades = 0, cidades = "", visitou;

alert("Olá, Bem Vindo ao Visitando Novas Cidades!")

nome = prompt("Qual seria o seu nome? ")

visitou = parseFloat(prompt("Você já visitou alguma cidade? Sim = 1 / Não = 2"))

if (visitou === 1) {
    while (visitou === 1) {
        cidades += prompt("Qual seria o nome de uma cidade que você já visitou? ")
        visitou = parseFloat(prompt("Você já visitou mais alguma cidade? Sim = 1 / Não = 2"))
        qcidades++
        if (visitou === 1) {
            cidades += ", "
        } else {
            cidades += "."
            alert(`${nome} visitou ${qcidades} cidades e elas seriam a cidades:\n` + 
                `(${cidades})`)
        }
    }
} else {
    alert(`${nome} não visitou nenhuma cidade.`)
}

