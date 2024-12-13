// Inventory and pricing
const items = ["Chair", "Recliner", "Table", "Umbrella"];
const prices = [25.50, 37.75, 49.95, 24.89];

// Shipping zones
const shippingCosts = {
  1: 0,
  2: 20.00,
  3: 30.00,
  4: 35.00,
  5: 45.00,
  6: 50.00,
};

// Global variables
let purchasedItems = [];
let purchasedQuantities = [];

// Handle purchase
function handlePurchase() {
  let continueShopping = true;

  while (continueShopping) {
    const itemName = prompt("Enter the item name (Chair, Recliner, Table, Umbrella):").trim();
    const itemIndex = items.findIndex(item => item.toLowerCase() === itemName.toLowerCase());
    if (itemIndex === -

