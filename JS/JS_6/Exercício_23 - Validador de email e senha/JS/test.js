import verificationFour from "./email/verificationFour.js"
import verificationOne from "./email/verificationOne.js"
import verificationThree from "./email/verificationThree.js"
import verificationTwo from "./email/verificationTwo.js"
import verifyFive from "./password/verifyFive.js"
import verifyFour from "./password/verifyFour.js"
import verifyOne from "./password/verifyOne.js"
import verifyThree from "./password/verifyThree.js"
import verifyTwo from "./password/verifyTwo.js"

export default function send() {
    function tag(tag) {
        return document.getElementById(tag)
    }
    const name = tag('name')
    const email = tag('email')
    const password = tag('password')
    // console.log(name, email, password)

    if (verificationOne(email) && verificationTwo(email) && verificationThree(email) && verificationFour(email)) {
        if (verifyOne(password) && verifyTwo(password) && verifyThree(password) && verifyFour(password) && verifyFive(password)) {
            name.value = ""
            email.value = ""
            password.value = ""
            alert("Logado com Sucesso!!!")
        }
    } 

    
    
    
    

    
    
    
    
    
}