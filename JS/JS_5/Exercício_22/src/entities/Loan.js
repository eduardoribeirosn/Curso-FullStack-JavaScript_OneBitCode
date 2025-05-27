// Loan = Empréstimo, Portion = parcela
// Loan: Deverá possuir um atributo estático privado para a taxa de juros e que possuir um getter estático para ler o atributo privado e um setter estático para definir uma nova taxa de juros a partir de uma porcentagem.
// Deverá possuir os atributos para o valor do empréstimo e para a data de criação.
// Também deverá possuir um atributo para as parcelas do empréstimo, sendo que o construtor deve ter como parâmetro o número de parcelas e então deve calcular as parcelas (instâncias de Installments) e armazená-las nesse atributo.

import Installment from "./Installment.js"

export default class Loan {
    static #taxJ = 1.19
    constructor(valueLoan, dateCreate, numberPortion = 1) {
        this.valueLoan = valueLoan
        this.dateCreate = dateCreate
        this.numberPortion = numberPortion
        this.installments = new Installment((valueLoan * Loan.#taxJ)/numberPortion, numberPortion)
    } 

    static get readTax() {
        return Loan.#taxJ
    }

    /**
     * @param {number} porcent
     */
    static set setTax(porcent) {
        if(typeof porcent === 'string') {
            Number(porcent)
        }
        if(typeof porcent === 'number') {
            Loan.#taxJ = porcent
        } else {
            console.error("O valor deve ser uma string!");
          }
      
        
    }
}