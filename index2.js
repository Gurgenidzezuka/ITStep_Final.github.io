function showRegistration() {
    var loginForm = document.getElementById("login-form");
    var registrationForm = document.getElementById("registrationForm");
    var registrationLink = document.getElementsByClassName("register-link")[0];
  
    loginForm.style.display = "none";
    registrationForm.style.display = "block";
    registrationLink.style.display = "none";
  }
  
  
  function login() 
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Perform your login validation here
  
    // Dummy check (replace with your actual validation logic)
    if (email === "shengelianikoloz23@gmail.com" && password === "nika1234") {
      console.log("Login successful");
      window.location.href = "index.html"; // Redirect to index.html upon successful login
    } else {
      console.log("Login failed");
      // Redirect to error.html upon unsuccessful login
    }