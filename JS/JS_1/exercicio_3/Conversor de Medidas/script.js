let metres, choice, result;

alert("Seja Bem Vindo ao Conversor de Medidas!")

metres = parseFloat(prompt("Para começar, digite quantos metros você quer calcular? "))
choice = parseFloat(prompt(`Agora escolha qual opção você deseja transformar os metros:

    1 - milímetro (mm)

    2 - centímetro (cm)

    3 - decímetro (dm)

    4 - decâmetro (dam)

    5 - hectômetro (hm)

    6 - quilômetro (km)`))

switch(choice) {
    case 1: {
        result = metres * 1000
        alert(`Resultado ficou ${result}mm (milímetros)!`)
        break
    }

    case 2: {
        result = metres * 100
        alert(`Resultado ficou ${result}cm (centímetro)!`)
        break
    }

    case 3: {
        result = metres * 10
        alert(`Resultado ficou ${result}dm (decímetro)!`)
        break
    }

    case 4: {
        result = metres / 10
        alert(`Resultado ficou ${result}dam (decâmetro)!`)
        break
    }

    case 5: {
        result = metres / 100
        alert(`Resultado ficou ${result}hm (hectômetro)!`)
        break
    }

    case 6: {
        result = metres / 1000
        alert(`Resultado ficou ${result}km (quilômetro)!`)
        break
    }

    default: {
        alert("Você digitou uma opção inválida!")
    }
}