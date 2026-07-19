// ======================================
// ElectroHub JavaScript
// ======================================

// Welcome Message
window.onload = function () {
    alert("Welcome to ElectroHub!\nExplore the latest electronics.");
};


// ======================================
// Shop Now Button
// ======================================

const shopButton = document.getElementById("shopBtn");

if (shopButton) {

    shopButton.addEventListener("click", function (event) {

        alert("Thank you for visiting ElectroHub!");

    });

}


// ======================================
// Greeting Message
// ======================================

const greeting = document.getElementById("greeting");

if (greeting) {

    const hour = new Date().getHours();

    if (hour < 12) {

        greeting.innerHTML = "Good Morning!";

    }

    else if (hour < 18) {

        greeting.innerHTML = "Good Afternoon!";

    }

    else {

        greeting.innerHTML = "Good Evening!";

    }

}


// ======================================
// Current Date
// ======================================

const today = document.getElementById("todayDate");

if (today) {

    const date = new Date();

    today.innerHTML = date.toDateString();

}


// ======================================
// Read More Button (About Page)
// ======================================

const readBtn = document.getElementById("readBtn");

const moreText = document.getElementById("moreText");

if (readBtn && moreText) {

    readBtn.addEventListener("click", function () {

        if (moreText.style.display === "none" || moreText.style.display === "") {

            moreText.style.display = "block";

            readBtn.innerHTML = "Read Less";

        }

        else {

            moreText.style.display = "none";

            readBtn.innerHTML = "Read More";

        }

    });

}


// ======================================
// Buy Now Buttons (Products Page)
// ======================================

const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(function(button){

    button.addEventListener("click", function(){

        alert("Thank you for choosing ElectroHub!");

    });

});