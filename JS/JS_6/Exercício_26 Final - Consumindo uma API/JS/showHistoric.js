export default async function showHistoric() {
    fetch('http://localhost:3000/transactions')
    .then(response => response.json())
    .then(transactions => {
        console.log(transactions)

        let conteudo = "Histórico de Transações:\n\n"
        transactions.forEach((trans) => {
            conteudo += 
            `ID: ${trans.id}\n` +
            `Nome: ${trans.name}\n` +
            `Valor: ${trans.value}\n\n`
        })
        const historic = document.querySelector('#historic')
        historic.innerText =  conteudo
        
        console.log(conteudo)
    })
}