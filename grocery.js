class GroceryItem {
  constructor(name, quantity, price, category) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.category = category;
  }

  // Method to get item info in a compressed format for localstorage
  // For example, "2|carrots|0.50|veggies"
  getStorageString() {
    return `${this.quantity}|${this.name}|${this.price}|${this.category}`;
  }

  // Method to calculate total cost for this item
  getTotalCost() {
    return this.quantity * this.price;
  }

  // Method to display item info in a human-readable format
  toString() {
    return (
      this.quantity +
      " x " +
      this.name +
      " @ " +
      this.price.toFixed(2) +
      " = " +
      this.getTotalCost().toFixed(2)
    );
  }
}
