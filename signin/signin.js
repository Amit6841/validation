function signin() {
    document.getElementById('signinForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById("signin-username").value;
        const password = document.getElementById("signin-password").value;
        const error = document.getElementById("signin-message")

        //validate username and password
        if (!username || !password) {
            error.textContent = "both field required";
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(user => user.username === username && user.password === password)

        if (user) {
            console.log("signin sucessfully")
            window.location.href = "/welcome/welcome.html"
        } else {
            error.textContent = "invalid credential";
        }
    })
}

document.addEventListener('DOMContentLoaded', signin);

function hide() {
    const togglePassword = document.getElementById("togglepassword");
    const passwordField = document.getElementById("signin-password");

    togglePassword.addEventListener("click", function () {
        // Toggle the type of the password field
        const type = passwordField.type === "password" ? "text" : "password";
        passwordField.type = type;

        // Toggle the text of the button (Show/Hide)
        this.textContent = this.textContent === "Show" ? "Hide" : "Show";
    });
}