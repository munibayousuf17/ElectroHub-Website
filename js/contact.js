// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    // Page ko reload hone se rokta hai
    event.preventDefault();

    // Form fields se values lena
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();


    // Check karna ke koi field empty to nahi
    if (name === "" || email === "" || subject === "" || message === "") {

        alert("Please fill in all fields.");

        return;
    }


    // Email format check
    if (!email.includes("@") || !email.includes(".")) {

        alert("Please enter a valid email address.");

        return;
    }


    // Successful submission
    alert(
        "Thank you, " + name +
        "!\nYour message has been received successfully."
    );


    // Form fields clear karna
    contactForm.reset();

});