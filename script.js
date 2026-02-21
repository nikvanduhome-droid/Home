function demoAlert(feature) {
    alert(feature + " demo is currently under development.");
}

function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const users = {
        '__USER1_USERNAME__': '__USER1_PASSWORD__',
        '__USER10_USERNAME__': '__USER10_PASSWORD__'
    };

    if (users[username] && users[username] === password) {
        message.style.color = "green";
        message.textContent = `Login successful! Welcome, ${username}. Redirecting...`;
        localStorage.setItem('loggedInUser', username);
        setTimeout(() => {
            window.location.href = "username.html";
        }, 1500);
    } else {
        message.style.color = "red";
        message.textContent = "Invalid credentials. Try the defined users.";
    }
}
