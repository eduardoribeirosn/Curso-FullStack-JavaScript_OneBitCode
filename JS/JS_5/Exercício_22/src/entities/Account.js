// Account: Deve possuir atributos para: o saldo, todos os depósitos realizados, todos os empréstimos, todas as transferências e para o dono da conta.
// O atributo do saldo deve ser privado e somente de leitura, ou seja, seu valor não pode ser reatribuído, somente podendo ser modificado através dos depósitos, empréstimos e transferências.
// Deve possuir um método para fazer um novo depósito, onde o valor do deposito será acrescentado ao saldo e a instância de Deposit ao atributos array de depósitos.
// Deve possuir um método para fazer um novo empréstimo, que deverá acrescentar o valor do empréstimo ao saldo e salvar a instância de Loan no atributo array de empréstimos.
// Deve possuir um método de fazer uma transferência, onde é verificado se a transferência foi feita para o dono da conta ou pelo dono da conta para outro usuário.
// Se feito para o dono da conta, o valor dela deve ser acrescentado ao saldo.
// Se feito pelo dono da conta para outro usuário, o valor dela deve ser descontado do saldo.
// Além disso, a transferência deve ser salva no atributo array de transferências.

import dayjs from "dayjs"
import Deposit from "./Deposit.js"
import Loan from "./Loan.js"
import Transfer from "./Transfer.js"

export default class Account {
    #balance
    constructor(ownerAccount, transfers = [], deposits = [], loans = []) {
        this.ownerAccount = ownerAccount
        this.#balance = 0
        this.transfers = transfers
        this.deposits = deposits
        this.loans = loans
    }
    moment() {
        return dayjs().format("DD/MM/YYYY-HH:mm")
    }
    sumBalance(newBalance) {
        this.#balance += newBalance
    }
    mostrarSaldo() {
        return `R$${this.#balance}`
    }
    newDeposit(name, value) {
        const deposit = new Deposit(name, value, this.moment())
        this.deposits.push(deposit)
        this.#balance += value
    }
    newLoan(value, portions) {
        const loan = new Loan(value, this.moment(), portions)
        this.loans.push(loan)
        this.#balance += value
    }
    newTransfer(payer, receiver, value) {
        const transfer = new Transfer(payer.account.ownerAccount, receiver.account.ownerAccount, value, this.moment())
        payer.account.transfers.push(transfer)
        receiver.account.transfers.push(transfer)
        payer.account.#balance -= value
        receiver.account.#balance += value
    }
}

// Posso estar errando, olhar a instrução do exercício novamente!!!