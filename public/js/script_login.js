document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitButton = form.querySelector("button");
    const inputs = form.querySelectorAll("input");

    submitButton.addEventListener("click", function (e) {
        e.preventDefault();

        const username = inputs[0].value.trim();
        const password = inputs[1].value;

        if (!username) {
            alert("Please enter your username or email address.");
            return;
        }

        if (!password) {
            alert("Please enter your password.");
            return;
        }

        // check if it's an email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)) {
             alert("Please enter a valid email address.");
             return;
         }

        alert("Login successful!");
        form.submit(); // Enable this when your backend is ready
    });
});
