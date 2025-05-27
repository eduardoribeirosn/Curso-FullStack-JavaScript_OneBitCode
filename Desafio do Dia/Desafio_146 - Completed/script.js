function crystalMaze(vetor) {
    const quantity = vetor.length
    let chest = [], final = []
    let nA, cont = 0
    if (quantity > 1000) {
        return console.log('O limite de elementos são 1000.')
    }
    vetor.sort((a, b) => a - b) // Colocar os números do menor para o maior

    for (let i = 0; i < quantity; i++) {
        chest.push([])
        if (i == 0) {
            vetor.forEach((v, index) => {
                chest[i].push(v)
            })
        } else {
            vetor.forEach((v, index) => {
                if (index < quantity - i) {
                    for (let i2 = index + 1; i2 <= quantity - i; i2++) {
                        if (index + i <= quantity - 1) {
                            nA = 0
                            for (let i3 = i2; i3 <= i2 + i - 1; i3++) {
                                nA += vetor[i3]
                            }
                            chest[i].push(v + nA)
                        }
                    }
                }
            })
        }
    }

    chest.forEach(v => {
        v.forEach(va => {
            if (!final.includes(va)) {
                final.push(va)
            }
        })
    })
    final.sort((a, b) => a - b)
    while (true) {
        if (final[cont] != cont + 1) {
            return cont + 1
        }
        cont ++
    }
}

console.log(crystalMaze([1, 2, 2, 4])) // 2^4 = 16
console.log(crystalMaze([1, 2, 2, 7]))
console.log(crystalMaze([1, 1, 1, 1]))
console.log(crystalMaze([2, 3, 4, 10]))