function register() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
        document.getElementsByClassName("login-button").addEventListener("click", function () {
            window.location.href = "Movies.html";
        });
    }
    else {
        alert('Please fill all the Blanks .');
    }
}
