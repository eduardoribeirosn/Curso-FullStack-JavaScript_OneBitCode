// Transfer: Deverá possuir atributos para: o usuário que enviou a transferência, o que recebeu a transferência, o valor e a data de criação.

export default class Transfer {
    constructor(userPayer, userReceiver, value, dateCreate) {
        this.userPayer = userPayer
        this.userReceiver = userReceiver
        this.value = value
        this.dateCreate = dateCreate
    }
}