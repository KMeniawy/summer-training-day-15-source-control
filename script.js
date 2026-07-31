const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const loaderBox = document.getElementById("loaderBox");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    loginForm.style.display = "none";
    loaderBox.style.display = "block";

    setTimeout(function() {
        loaderBox.style.display = "none";
        message.style.display = "block";
        message.textContent = "Hello " + username.value.split("@")[0];
    }, 5000);
});