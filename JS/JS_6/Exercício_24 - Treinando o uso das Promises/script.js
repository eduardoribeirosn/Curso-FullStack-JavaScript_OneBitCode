function calcIMC(weight, height) {
    return new Promise((resolve, reject) => {
        if (isNaN(weight) || typeof height !== 'number') {
            reject("Peso e Altura devem ser valores Numéricos!")
        }
        resolve(weight / (height**2))
    }, 1000 * 2)
}

function showIMC(weight, height) {
    calcIMC(weight, height).then((result) => {
        let num = Number(result.toFixed(2))
        console.log(num)
        if (num < 18.5) {
            console.log(`Seu IMC foi '${num}' = Magreza!`)
        } else if (num < 24.9) {
            console.log(`Seu IMC foi '${num}' = Normal!`)
        } else if (num < 29.9) {
            console.log(`Seu IMC foi '${num}' = Sobrepeso!`)
        } else if (num < 39.9) {
            console.log(`Seu IMC foi '${num}' = Obesidade!`)
        } else {
            console.log(`Seu IMC foi '${num}' = Obesidade Grave!`)
        }
        // console.log(resolve)
    }).catch((err) => {
        console.log(`Deu Erro! Motivo: ${err}`)
    }).finally(() => {
        console.log(`Sistema Finalizado!!!`)
    })

    console.log('Calculando...')
}

console.log('\n')
showIMC(62, 1.75)
console.log('\n')