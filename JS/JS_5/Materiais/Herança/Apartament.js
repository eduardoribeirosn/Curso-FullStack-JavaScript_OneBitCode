class Apartment extends Property {
    constructor(number, area, price) {
      // this.area = area (GERA ERRO)
      // this.price = price (GERA ERRO)
      super(area, price)
      this.number = number
    }
  
    getFloor() {
      return this.number.slice(0, -2)
    }
  }
  
  const apt = new Apartment("201", 100, 160000)
  
  console.log(apt)
  console.log(apt.getFloor())