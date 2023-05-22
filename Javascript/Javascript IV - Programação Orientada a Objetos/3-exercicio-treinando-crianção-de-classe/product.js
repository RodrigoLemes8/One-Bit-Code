class product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }
  addToStock(quantity) {
    this.inStock += quantity;
  }

  calculateDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const newProduct = new product("abacaxi", "doce como um mel", 55);

newProduct.addToStock(100);
console.log(newProduct);
console.log(newProduct.calculateDiscount(10));
console.log(newProduct.calculateDiscount(15));
