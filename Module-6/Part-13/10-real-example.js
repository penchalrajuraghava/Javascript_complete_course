/*
=========================================
Real World Example
=========================================
*/

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  display() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: ${this.price}`);
  }
}

const laptop = new Product(1, "Laptop", 75000);

laptop.display();
