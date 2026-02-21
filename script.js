function demoAlert(feature) {
    alert(feature + " demo is currently under development.");
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            loginUser();
        });
    }
});

function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Hardcoded credentials
    const users = {
        'alice': 'password1',
        'bob': 'password2',
        'charlie': 'password3'
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
        message.textContent = "Invalid credentials. Try alice/bob/charlie";
    }
}
});