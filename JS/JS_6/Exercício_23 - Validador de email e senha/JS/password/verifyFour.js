export default function verifyFour(password) {
    let passwordValue = password.value
    let testando = /[^a-zA-Z\s0-9]/
    let existe = testando.test(passwordValue)

    try {
        if(existe) {
            return existe
        } else {
            throw new Error("Precisa ter no mínimo 1 caractere especial na senha.")
        }
    } catch (error) {
        console.log(error.message)
        alert(error.message)
    }
}