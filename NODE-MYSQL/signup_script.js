function handleSubmit(event) {
    event.preventDefault();
  
    var form = document.getElementById("signupForm");
    var username = form.elements.username.value;
    var email = form.elements.email.value;
    var password = form.elements.password.value;
    var confirm_pass = form.elements.confirm_pass.value;
  
    console.log("Username: " + username);
    console.log("Email: " + email);
    console.log("Password: " + password);
    console.log("Confirm Password: " + confirm_pass);
  
   
  }
  