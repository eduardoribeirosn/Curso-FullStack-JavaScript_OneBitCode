import App from "./App.js";
import Account from "./entities/Account.js";
import User from "./User.js";

// const edu = new User("Eduardo Nascimento", "edunasci@gmail.com", new Account("Eduardo Nascimento"))
// // console.log(edu)
// edu.account.newDeposit(edu.fullName, 1000)
// edu.account.newDeposit(edu.fullName, 300)
// // console.log(edu, edu.account.mostrarSaldo(), edu.account.deposits)
// edu.account.newLoan(300, 3)
// edu.account.newLoan(500, 2)
// const feh = new User("Felipe Oliveira", "fehsouza@gmail.com", new Account("Felipe Oliveira"))
// // console.log(edu, edu.account.mostrarSaldo())
// // console.log(feh, feh.account.mostrarSaldo())
// edu.account.newTransfer(edu, feh, 150)
// // console.log(edu, edu.account.mostrarSaldo(), edu.account.deposits)
// // console.log(feh, feh.account.mostrarSaldo(), feh.account.transfers)

App.newUser("Eduardo Nascimento", "edunasci@gmail.com")
App.newUser("Felipe Oliveira", "fehsouza@gmail.com")
// App.newUser("Testando", "edunasci@gmail.com")
// console.log(App.database().showUser())
// console.log(App.database().find('users')[0].fullName)
// console.log()
// console.log(App.findEmail("fehsouza@gmail.com"))
// console.log(App.database().find('users'), App.findEmail("edunasci@gmail.com").account.mostrarSaldo(), App.findEmail("fehsouza@gmail.com").account.mostrarSaldo())
App.newDeposit("edunasci@gmail.com", 100)
App.newDeposit("edunasci@gmail.com", 250)
App.newLoan("edunasci@gmail.com", 300, 3)
// console.log(App.database().find('users'), App.findEmail("edunasci@gmail.com").account.mostrarSaldo(), App.findEmail("fehsouza@gmail.com").account.mostrarSaldo())
App.newTransfer("edunasci@gmail.com", "fehsouza@gmail.com", 200)
// console.log(App.database().find('users'), App.findEmail("edunasci@gmail.com").account.mostrarSaldo(), App.findEmail("fehsouza@gmail.com").account.mostrarSaldo())
// console.log(App.findEmail("edunasci@gmail.com").account.transfers, App.findEmail("fehsouza@gmail.com").account.transfers)
console.log(App.findEmail("edunasci@gmail.com").account, App.findEmail("fehsouza@gmail.com").account)
