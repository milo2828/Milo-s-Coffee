document.addEventListener("DOMContentLoaded", function() {
    let cartCount = 0;

    const cartCountElement = document.getElementById("cart-count");

    document.getElementById("cart-link").addEventListener("click", function() {
        cartCount++;
        cartCountElement.textContent =
