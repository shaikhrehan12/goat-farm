// Goat Farm Contact Form

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    // Stop the browser from reloading the page
    event.preventDefault();

    // Get values from the form
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check empty fields
    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
        return;
    }

    // Show success message
    formMessage.textContent =
        `Thank you, ${name}! Your demo message was submitted successfully.`;

    formMessage.style.color = "green";

    // Clear the form
    contactForm.reset();

});