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

