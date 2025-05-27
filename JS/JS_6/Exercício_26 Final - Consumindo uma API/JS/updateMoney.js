export default async function updateMoney() {
    fetch('http://localhost:3000/transactions')
    .then(response => response.json())
    .then(transactions => {
        const total = transactions.reduce((soma, trans) => soma + Number(trans.value), 0)
        console.log(`Money Total: ${total}`)
        const money = document.querySelector('#money')
        // total = Number(total.toFixed(2))
        money.textContent = `R$${total.toFixed(2)}`
    })
}