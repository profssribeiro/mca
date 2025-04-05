document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitButton = form.querySelector("button");
    const inputs = form.querySelectorAll("input");
    
    submitButton.addEventListener("click", function (e) {
        e.preventDefault();

        // Collect inputs
        const firstName = inputs[0].value.trim();
        const lastName = inputs[1].value.trim();
        const email = inputs[2].value.trim();
        const password = inputs[3].value;
        const confirmPassword = inputs[4].value;

        let errorMessage = "";

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            errorMessage = "Please fill in all fields.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errorMessage = "Please enter a valid email address.";
        } else if (password.length < 6) {
            errorMessage = "Password must be at least 6 characters long.";
        } else if (password !== confirmPassword) {
            errorMessage = "Passwords do not match.";
        }

        if (errorMessage) {
            alert(errorMessage);
        } else {
            alert("Form submitted successfully!");
            form.submit(); // You can uncomment this in real usage if the action is properly defined
        }
    });
});

