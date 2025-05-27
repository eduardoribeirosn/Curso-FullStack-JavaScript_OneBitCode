function areaTriangulo(base, altura) {
    result = base * altura / 2
    return alert(`O resultado é ${result}`)
}

function areaRetangulo(base, altura) {
    reusult = base * altura
    return alert(`O resultado é ${result}`)
}

function areaQuadrado(lado) {
    result = lado * lado
    return alert(`O resultado é ${result}`)
}

function areaTrapezio(basema, baseme, altura) {
    result = (basema = baseme) * altura / 2
    return alert(`O resultado é ${result}`)
}

function areaCirculo(raio) {
    let pi = 3.14
    result = pi * raio^2
    return alert(`O resultado é ${result}`)
}

let option, base, altura, lado, basema, baseme

confirm("Bem Vindo a Calculadora Geométrica!")

do {
    option = prompt("Qual Área deseja calcular?\n" +
        `\n1 - área do triângulo.` +
        `\n2 - área do retângulo.` +
        `\n3 - área do quadrado.` +
        `\n4 - área do trapézio.` +
        `\n5 - área do círculo.` +
        `\n6 - Sair.`
    )

    switch(option) {
        case '1':
            base = parseFloat(prompt("Qual a base do Triângulo? "))
            altura = parseFloat(prompt("Qual a altura do Triângulo? "))
            areaTriangulo(base, altura)
            break
        case '2':
            base = parseFloat(prompt("Qual a base do Retângulo? "))
            altura = parseFloat(prompt("Qual a altura do Retângulo? "))
            areaRetangulo(base, altura)
            break
        case '3':
            lado = parseFloat(prompt("Qual o lado do Quadrado? "))
            areaQuadrado(lado)
            break
        case '4':
            basema = parseFloat(prompt("Qual a base maior do Trapézio? "))
            baseme = parseFloat(prompt("Qual a base menor do Trapézio? "))
            altura = parseFloat(prompt("Qual a altura do Trapézio? "))
            areaTrapezio(basema, baseme, altura)
            break
        case '5':
            raio = parseFloat(prompt("Qual o raio do círculo? "))
            areaCirculo(raio)
            break
        case '6':
            alert("Encerrando...")
            break
        default:
            alert("Opção Inválida... Tente Novamente!")
    }
} while(option !== '6')