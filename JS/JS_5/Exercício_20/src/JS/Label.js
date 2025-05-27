// Uma classe específica para elementos label, que deve ser uma subclasse da classe Component e no seu construtor deve ser possível indicar como primeiro parâmetro qual será o seu conteúdo em texto.

import Component from "./Component.js"

export default class Label extends Component {
    constructor(id, text) {
        super('label', {id, text})
    }
}