const logout = document.getElementById('logout')

logout.addEventListener("click", function() {
    localStorage.removeItem("users");
    alert("You have logged out.");
    window.location.href = "/signin/signin.html";
});