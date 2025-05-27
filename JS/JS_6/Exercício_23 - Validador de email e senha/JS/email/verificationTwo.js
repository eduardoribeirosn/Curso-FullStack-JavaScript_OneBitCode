export default function verificationTwo(email) {
    let emailValue = email.value
    let testando = /(?<=\w{2}@)/
    let existe = testando.test(emailValue)

    try {
        if(existe) {
            return existe
        } else {
            throw new Error("Precisa ter no mínimo 2 caracteres antes do '@' no Email.")
        }
    } catch (error) {
        console.log(error.message)
        alert(error.message)
    }
}