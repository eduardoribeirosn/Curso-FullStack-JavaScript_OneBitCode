function media(...args) {
    let soma = args.reduce((accum, n) => accum + n, 0)
    let div = args.length
    return console.log(soma/div)
}

const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum, {number, weight}) => accum + number * (weight ?? 1), 0)
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
    return sum / weightSum
}

/*console.log(`Média Ponderada: ${weightedAverage(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1}
)}`)*/



function mediana(...args) {
    let med
    args.sort((a, b) => a - b)
    if (args.length%2 == 1) {
        med = args[((args.length + 1) / 2) - 1]
    } else {
        let cont = args.length
        med = (args[cont/2-1] + args[cont/2]) / 2
    }
    console.log(med)
    return med
}

const mode = (...numbers) => {
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    quantities.sort((a, b) => b[1] - a[1])
    return quantities[0][0]
}