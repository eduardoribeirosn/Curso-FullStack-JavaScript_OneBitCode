// Uma classe específica para elementos input, que deve ser uma subclasse da classe Component.

import Component from "./Component.js"

export default class Input extends Component {
    constructor(type, id) {
        super("input", {type, id})
        // this.input = {type, id}
        // this.type = type
        // this.id = id
    }
}