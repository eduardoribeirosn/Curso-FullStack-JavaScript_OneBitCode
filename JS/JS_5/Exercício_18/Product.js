class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(quantity) {
        this.inStock += quantity
        return console.log(`Foi adicionado ${quantity} produtos ao stock.`)
    }
    calculateDiscount(porcent) {
        const finalPrice = this.price * ((100-porcent)/100)
        return console.log(`Preço Original: R$${this.price},\nDesconto: ${porcent}%,\nPreço Final: R$${finalPrice}.`
        )
    }
}

const tenis = new Product("Tênis Puma", ["Branco", "Puma", "39-40"], 600)
console.log(tenis)
tenis.addToStock(10)
console.log(tenis)
tenis.calculateDiscount(25)