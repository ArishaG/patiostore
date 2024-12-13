// Store constants
const items = ["Chair", "Recliner", "Table", "Umbrella"];
const prices = [25.50, 37.75, 49.95, 24.89];
const stateZones = ["WA", "OR", "CA", "TX", "FL", "NY"];
const shippingCosts = [0, 20, 30, 35, 45, 50];
const taxRate = 0.15;

// Function to make a purchase
function makePurchase() {
  let purchasedItems = [];
  let purchasedQuantities = [];
  let totalCost = 0;

  while (true) {
    const item = prompt("Enter the item name (Chair, Recliner, Table, Umbrella):").toLowerCase();
    const index = items.map(i => i.toLowerCase()).indexOf(item);
    if (index === -1) {
      alert("Invalid item. Please try again.");
      continue;
    }

    const quantity = parseInt(prompt(`Enter the quantity for ${items[index]}:`), 10);
    if (isNaN(quantity) || quantity <= 0) {
      alert("Invalid quantity. Please try again.");
      continue;
    }

    purchasedItems.push(items[index]);
    purchasedQuantities.push(quantity);
    totalCost += prices[index] * quantity;

    const anotherItem = prompt("Do you want to purchase another item? (y/n):").toLowerCase();
    if (anotherItem !== "y") break;
  }

  // Ask for state
  const state = prompt("Enter the state for shipping (e.g., WA, OR):").toUpperCase();
  const stateIndex = stateZones.indexOf(state);
  if (stateIndex === -1) {
    alert("Invalid state. Transaction cancelled.");
    return;
  }

  const shippingCost = totalCost > 100 ? 0 : shippingCosts[stateIndex];
  const tax = totalCost * taxRate;
  const finalCost = totalCost + shippingCost + tax;

  displayInvoice(purchasedItems, purchasedQuantities, totalCost, tax, shippingCost, finalCost, state);
}

// Function to display the invoice
function displayInvoice(items, quantities, subtotal, tax, shipping, total, state) {
  const invoiceContainer = document.getElementById("invoice");
  const container = document.getElementById("invoice-container");

  let itemDetails = "";
  for (let i = 0; i < items.length; i++) {
    itemDetails += `<tr><td>${items[i]}</td><td>${quantities[i]}</td><td>$${(prices[items.indexOf(items[i])] * quantities[i]).toFixed(2)}</td></tr>`;
  }

  invoiceContainer.innerHTML = `
    <h2>Invoice</h2>
    <table style="width: 100%; text-align: left;">
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        ${itemDetails}
      </tbody>
    </table>
    <hr>
    <p>State: ${state}</p>
    <p>Subtotal: $${subtotal.toFixed(2)}</p>
    <p>Tax: $${tax.toFixed(2)}</p>
    <p>Shipping: $${shipping.toFixed(2)}</p>
    <p>Total: $${total.toFixed(2)}</p>
  `;

  container.style.display = "block";
}

// Function to reset the page
function resetPage() {
  location.reload();
}
