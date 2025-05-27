// Deposit: Deverá possuir um atributo para o valor e um atributo para a data de criação.

export default class Deposit {
    constructor(name, value, dateCreate) {
        this.name = name
        this.value = value
        this.dateCreate = dateCreate
    }
}