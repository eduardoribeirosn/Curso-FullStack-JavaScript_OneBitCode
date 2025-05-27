export default function verifictionOne(email) {
    let emailValue = email.value // Pegando o valor do Email
    let testando = /\@/ // colocando o valor do "@" na variável
    let existe = testando.test(emailValue) // Verificar se a string tem o "@" no Email
    let quantity = emailValue.split("@").length - 1 // Conta quantas vezes o "@" se repete
    if(existe && quantity != 1) {
        existe = false
    } 
    try {
        if(quantity > 1) {
            throw new Error("Precisa ter apenas 1 '@' no Email.")
        }
        if(existe) {
            return existe
        } else {
            throw new Error("Precisa ter um '@' no Email.")
        }
    } catch (error) {
        console.log(error.message)
        alert(error.message)
    }
}