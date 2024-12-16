// Cart data stored in localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add item to cart
function addToCart(medicine) {
    cart.push(medicine);
    updateCart();
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Update the cart in localStorage
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Render cart items on the page
function renderCart() {
    const cartContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    cartContainer.innerHTML = ''; // Clear previous items

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartTotal.innerHTML = '$0.00';
        return;
    }

    let total = 0;
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
        total += parseFloat(item.price);
    });

    cartTotal.innerHTML = `$${total.toFixed(2)}`;
}

// On page load, render the cart
window.onload = renderCart;