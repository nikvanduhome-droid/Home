function demoAlert(feature) {
    alert(feature + " demo is currently under development.");
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const message = document.getElementById("message");

            // Demo credentials
            if (username === "homeuser" && password === "1234") {
                message.style.color = "green";
                message.textContent = "Login successful! Redirecting...";
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 1500);
            } else {
                message.style.color = "red";
                message.textContent = "Invalid credentials. Try homeuser / 1234";
            }
        });
    }
});