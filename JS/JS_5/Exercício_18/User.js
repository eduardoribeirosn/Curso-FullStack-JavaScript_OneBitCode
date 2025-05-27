class User {
    constructor(fullName, email, password) {
        this.fullName = fullName
        this.email = email
        this.password = password
    }

    login(email, password) {
        if(email === this.email && password === this.password) {
            console.log(`Login de ${this.fullName} foi bem sucedido!`)
        } else {
            console.log(`Login de ${this.fullName} NÃO foi bem sucedido!`)
        }
    }
}

const eduardo = new User("Eduardo RS Nascimento", "eduardinho@gmail.com", "vinte04")
console.log(eduardo)
eduardo.login("eduardinho@gmail.com", "vinte04")
