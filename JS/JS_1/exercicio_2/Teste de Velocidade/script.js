let nomeVeiculo_1, nomeVeiculo_2, veloVeiculo_1, veloVeiculo_2;

alert("Bem Vindo ao Teste de Velocidade!")

nomeVeiculo_1 = prompt("Para começar, digite o nome do primeiro Veiculo: ");
veloVeiculo_1 = parseFloat(prompt("Agora digite a velocidade do Veiculo 1: "))
nomeVeiculo_2 = prompt("Agora vamos para o Veiculo 2, digite o nome dele: ")
veloVeiculo_2 = parseFloat(prompt("Para finalizar, digite a velocidade do Veiculo 2: "))

if (veloVeiculo_1 > veloVeiculo_2) {
    alert(`O Veiculo mais rápido é o ${nomeVeiculo_1}! \n\nCom uma velocidade de ${veloVeiculo_1}Km/h!`)
} else if (veloVeiculo_2 > veloVeiculo_1) {
    alert(`O Veiculo mais rápido é o ${nomeVeiculo_2}! \n\nCom uma velocidade de ${veloVeiculo_2}Km/h!`)
} else {
    alert(`Os 2 Veiculos estão na mesma velocidade! \n\nSendo ela ${veloVeiculo_1}Km/h!`)
}