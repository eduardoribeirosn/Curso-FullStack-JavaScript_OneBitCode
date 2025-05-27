export default function verifyThree(password) {
    let passwordValue = password.value
    let testando = /\d/
    let existe = testando.test(passwordValue)

    try {
        if(existe) {
            return existe
        } else {
            throw new Error("Precisa ter no mínimo 1 número na senha.")
        }
    } catch (error) {
        console.log(error.message)
        alert(error.message)
    }
}