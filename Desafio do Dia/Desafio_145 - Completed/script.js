function magicTree(day) {
    let fibonacci = [0, 1]
    let soma = []
    let somaTotal = 0
    for (let i = 1; i <= day; i++) {
        soma.push(fibonacci[i] * i)
        fibonacci.push(fibonacci[i] + fibonacci[i - 1])
    }
    soma.forEach((v) => {
        somaTotal += v
    })
    return somaTotal
}

console.log(magicTree(5))