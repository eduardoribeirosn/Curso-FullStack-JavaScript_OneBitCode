export default function verifyTwo(password) {
    let passwordValue = password.value
    let testando = /[A-Z]/
    let existe = testando.test(passwordValue)

    try {
        if(existe) {
            return existe
        } else {
            throw new Error("Precisa ter no mínimo 1 letra maiúscula na senha.")
        }
    } catch (error) {
        console.log(error.message)
        alert(error.message)
    }
}