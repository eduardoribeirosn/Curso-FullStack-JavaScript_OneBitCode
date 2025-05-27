import Input from "./JS/Input.js"
import Form from "./JS/Form.js"
import Label from "./JS/Label.js"


window.addButtons = () =>{
    const name1 = new Input("text", "nome")
    const name10 = name1.build()
    const label1 = new Label("nome", "Nome:")
    const label10 = label1.build()
    const name2 = new Input("text", "sobrenome")
    const name20 = name2.build()
    const label2 = new Label("sobrenome", "Sobrenome:")
    const label20 = label2.build()
    const form = new Form("form1", "get")
    const form1 = form.build()
    form.childs(form1, label10, name10, label20, name20)

    form.render(form1)
}


// console.log("\n\n")
// console.log(form1)
// console.log("\n")

