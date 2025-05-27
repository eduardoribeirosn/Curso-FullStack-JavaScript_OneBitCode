export default function verifyOne(password) {
    let passwordValue = password.value
    let testando = /[a-z]/
    let existe = testando.test(passwordValue)
    
    try {
        if(existe) {
            return existe
        } else {
            throw new Error("Precisa ter no mínimo 1 letra minúscula na senha.")
        }
    } catch (error) {
        console.log(error.message)
        alert(error.message)
    }
}