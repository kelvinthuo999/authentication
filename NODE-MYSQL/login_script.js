function passwordLength(password) {
    var minLength = 5; 

    if (password.length < minLength) {
        return false;
    }

    return true;
}

function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "") {
        alert("Please enter a username.");
        return false;
    }

    if (password === "") {
        alert("Please enter a password.");
        return false;
    }

    if (!passwordLength(password)) {
        alert("Password must be at least 5 characters long.");
        return false;
    }

    return true;
}

function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    console.log("Username: " + username);
    console.log("Password: " + password);

}
