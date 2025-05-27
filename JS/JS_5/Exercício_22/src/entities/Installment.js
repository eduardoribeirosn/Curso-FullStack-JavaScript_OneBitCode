// Installment: Deve possuir atributos para: o valor da parcela, o número dela e sua situação (paga ou pendente)

export default class Installment {
    constructor(valuePortion, numberPortion) {  
        let index = 0
        let box = []
        while (index < numberPortion) {
            box.push({[`parcel-${index + 1}`]: false})
            index ++
        }
        this.valuePortion = valuePortion
        this.situationsPortions = box
    }
}