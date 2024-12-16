// js/cart.js
const cartItems = JSON.parse(localStorage.getItem("medicines")) || [];

function displayCartItems() {
  const cartContainer = document.getElementById("cartItems");
  cartContainer.innerHTML = cartItems
    .map(item => `<p>${item.name} - ${item.quantity}</p>`)
    .join("");
}

function checkout() {
  if (cartItems.length > 0) {
    alert("Checkout successful!");
    localStorage.removeItem("medicines"); // Clear cart after checkout
    window.location.href = "index.html";
  } else {
    alert("Your cart is empty!");
  }
}

displayCartItems();