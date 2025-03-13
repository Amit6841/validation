document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error-message")

    // Validate username and password
    if (!username || !password ) {
        error.textContent = "Both fields are required!";
        return;
    }

    // Check if username already exists
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(user => user.username == username && user.password == password)) {
        error.textContent = "Username already exists!";
        return;
    }

    // Store user data in local storage
    users.push({ username: username, password: password });
    localStorage.setItem("users", JSON.stringify(users));

    // Redirect to Sign In page after successful signup
    alert("Signup successful! Please sign in.");
    window.location.href = "/signin/signin.html"
});
