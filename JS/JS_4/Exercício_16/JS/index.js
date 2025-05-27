const dayjs = require('dayjs')

const ex = (birthOfDate) => {
    const today = dayjs()
    const years = dayjs(today).diff(birthOfDate, 'year')
    const nextBirthDay = dayjs(birthOfDate).add(years + 1, 'y')
    const daysToNextBirthDay = nextBirthDay.diff(today, 'd') + 1

    return console.log(`
        Para a data de nascimento ${dayjs(birthOfDate).format('DD/MM/YYYY')}
        A idade é: ${years} anos.
        O próximo aniversário é ${nextBirthDay.format('DD/MM/YYYY')}.
        Faltam ${daysToNextBirthDay} dias para o próximo aniversário.
        `)
}

// `Qual é sua data de Nascimento? (aaaa-mm-dd)`
ex('2006-01-27')
