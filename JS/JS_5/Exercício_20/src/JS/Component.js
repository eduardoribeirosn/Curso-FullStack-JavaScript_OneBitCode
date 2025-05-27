// Deverá conter um atributo privado para armazenar a referência ao elemento do DOM e um método de acesso para ler o valor desse atributo
// Ela também deve possuir um método build para criar o elemento que deve ser chamado uma vez no construtor, 
// mas também deve ser possível chamá-lo novamente através da instância
// Ela também deve possuir um método render para adicionar o elemento na página que poderá ser chamado pela instância a qualquer momento.

export default class Component {
    #dom
    constructor(dom, element) {
        this.#dom = dom
        this.element = element
    }
    readDom() {
        return this.#dom
    }
    build() {
        const buildE = document.createElement(`${this.#dom}`)
        if(buildE.tagName.toLowerCase() == "input") {
            buildE.id = this.element.id
            buildE.type = this.element.type
            return buildE
        } else if(buildE.tagName.toLowerCase() == "label") {
            buildE.htmlFor = this.element.id
            buildE.innerText = this.element.text
            return buildE
        } else if (buildE.tagName.toLowerCase() == "form") {
            buildE.id = this.element.id
            buildE.method = this.element.method
            return buildE
        }
        
    }
    render(form) {
        const body = document.getElementById('body')
        body.append(form)
    }
}
