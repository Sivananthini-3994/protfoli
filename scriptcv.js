// JavaScript code to handle the "Contact Me" button click event
document.addEventListener('DOMContentLoaded', function () {
    // Select the "Contact Me" button by its id
    var contactBtn = document.getElementById('contactBtn');

    // Add click event listener to the button
    contactBtn.addEventListener('click', function () {
        // Smooth scroll to the contact section
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
