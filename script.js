// Add any interactive features you want here
// For example, we can add simple form validation

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
});
