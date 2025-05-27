import alterInfo from "./JS/alterInfo1.js";
import toggleMenu from "./JS/toggleMenu.js";
import payAndReceive from "./JS/payAndReceive.js";
import showHistoric from "./JS/showHistoric.js";
import updateMoney from "./JS/updateMoney.js";
import deleteInfo from "./JS/deleteInfo.js";

let idTrans = 1

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelectorAll('#menu')
    
    menu.forEach((e) => {
        e.addEventListener('click', (event) => {
            if (event.target.id == 'pay' || event.target.id == 'receive' || event.target.id == 'alter' || event.target.id == 'delete') {
                toggleMenu(event.currentTarget)

                if (event.target.id == 'pay' || event.target.id == 'receive') {
                    payAndReceive(idTrans, event)
                } else if (event.target.id == 'alter') {
                    alterInfo()
                } else if (event.target.id == 'delete') {
                    deleteInfo()
                }
            }
            

            

        })
    })
})

updateMoney()
showHistoric()