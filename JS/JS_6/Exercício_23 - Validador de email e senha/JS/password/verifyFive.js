export default function verifyFive(password) {
    let passwordValue = password.value
    let testando = /.{8}/
    let existe = testando.test(passwordValue)

    try {
        if(existe) {
            return existe
        } else {
            throw new Error("Precisa ter no mínimo 8 caracteres na senha.")
        }
    } catch (error) {
        console.log(error.message)
        alert(error.message)
    }
}