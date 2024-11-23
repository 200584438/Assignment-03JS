// Smoothie class
class Smoothie {
    constructor(name, size, fruits, extras) {
      this.name = name;
      this.size = size;
      this.fruits = fruits;
      this.extras = extras;
    }
  
    // Method to calculate price
    calculatePrice() {
      let basePrice = this.size === "Small" ? 5 : this.size === "Medium" ? 7 : 9;
      basePrice += this.fruits.length * 1; // $1 per fruit
      basePrice += this.extras !== "None" ? 2 : 0; // $2 for extras
      return basePrice;
    }
  
    // Method to generate a description
    getDescription() {
      return `
        <p><strong>Name:</strong> ${this.name}</p>
        <p><strong>Size:</strong> ${this.size}</p>
        <p><strong>Fruits:</strong> ${this.fruits.join(", ")}</p>
        <p><strong>Extras:</strong> ${this.extras}</p>
        <p><strong>Total Price:</strong> $${this.calculatePrice()}</p>
      `;
    }
  }
  
  // Event listener for the order button
  document.getElementById("order-btn").addEventListener("click", () => {
    const name = document.getElementById("customer-name").value;
    const size = document.querySelector('input[name="size"]:checked').value;
    const fruits = Array.from(document.querySelectorAll('input[name="fruit"]:checked')).map(f => f.value);
    const extras = document.getElementById("extras").value;
  
    if (!name) {
      alert("Please enter your name!");
      return;
    }
  
    const smoothie = new Smoothie(name, size, fruits, extras);
    document.getElementById("smoothie-output").innerHTML = smoothie.getDescription();
  });
  