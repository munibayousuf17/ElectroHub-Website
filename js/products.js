// ==========================================
// ElectroHub - Products Page JavaScript
// ==========================================

// Welcome Message
window.onload = function () {

    alert("Welcome to ElectroHub Products Page!");

    // Total Products Count
    const totalProducts = document.querySelectorAll(".product-card").length;

    alert("Total Products Available: " + totalProducts);

};

// ==========================================
// Buy Now Button
// ==========================================

const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        alert("Thank you for shopping with ElectroHub!\nYour order request has been received.");

    });

});