// App: Deve possuir um método estático para criar um novo usuário que só permite criar um usuário por email, ou seja, se o email já estiver sendo usado por outro usuário não deverá ser utilizado novamente.

// Deve possuir um método estático para encontrar um usuário a partir do seu email.

// Deve possuir métodos estáticos para realizar as operações de depósito, transferência e empréstimo.
// Elas devem ter como parâmetro as informações necessárias, como o email do usuário que está realizando a operação e o valor.

import dayjs from "dayjs"
import DataBase from "./DataBase.js"
import Account from "./entities/Account.js"
import Deposit from "./entities/Deposit.js"
import User from "./User.js"
import Loan from "./entities/Loan.js"
import Transfer from "./entities/Transfer.js"


// Deve possuir um método para alterar a taxa dos empréstimos.
export default class App {
    static #database = new DataBase()
    static database() {
        return this.#database
    }
    static moment() {
        return dayjs().format("DD/MM/YYYY-HH:mm")
    }
    static newUser(name, email) {
        let emailexists = this.#database.find('users').some(element => element.email == email)
            if(emailexists) {
                console.error("Já existe esse email cadastrado!")
                return
            } else {
                const user = new User(name, email, new Account(name))
                this.#database.saveUsers(user)
                this.#database.saveEmails(user.email)
                return user
            }
    }
    static findEmail(email) {
        let mail
        this.#database.find('users').forEach((element, index) => {
            if(element.email == email) {
                mail = this.#database.find('users')[index]
            }         
        })
        return mail // ?? null
    }
    static newDeposit(email, value, whoDeposited = 'console') {
        const userFocal = this.findEmail(email)
        const deposit = new Deposit(whoDeposited, value, this.moment())
        userFocal.account.sumBalance(deposit.value)
        userFocal.account.deposits.push(deposit)
    }
    static newLoan(email, valueLoan, numberPortion) {
        const userFocal = this.findEmail(email)
        const loan = new Loan(valueLoan, this.moment(), numberPortion)
        userFocal.account.sumBalance(loan.valueLoan)
        userFocal.account.loans.push(loan)
    }
    static newTransfer(emailPayer, emailReceiver, value) {
        const userFocal = this.findEmail(emailPayer)
        const userFocal2 = this.findEmail(emailReceiver)
        const transfer = new Transfer(userFocal, userFocal2, value, this.moment())
        userFocal.account.sumBalance(Number(`-${transfer.value}`))
        userFocal2.account.sumBalance(transfer.value)
        userFocal.account.transfers.push(transfer)
        userFocal2.account.transfers.push(transfer)
    }
}