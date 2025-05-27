async function calcIMC(weight, height) {
    if (isNaN(weight) || typeof height !== 'number') {
        return Promise.reject('Peso e Altura devem ser valores Numéricos!')
    }
    return weight / (height**2)
}

async function showIMC(weight, height) {
    try {
        console.log('Calculando...')
        const result = await calcIMC(weight, height)
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
    } catch (err) {
        console.log(`Deu Erro! Motivo: ${err}`)
    } finally {
        console.log(`Sistema Finalizado!!!`)
    }
    
}

console.log('\n')
showIMC(62, 1.75)
console.log('\n')