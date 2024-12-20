document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const switchToRegister = document.getElementById("switch-to-register");
  const switchToLogin = document.getElementById("switch-to-login");

  // Form Switch Logic
  switchToRegister.addEventListener("click", function (e) {
    e.preventDefault();
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
  });

  switchToLogin.addEventListener("click", function (e) {
    e.preventDefault();
    registerForm.classList.remove("active");
    loginForm.classList.add("active");
  });

  // Email Validation Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Login Form Submission
  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    let isValid = true;

    const loginEmail = document.getElementById("login-email");
    const loginPassword = document.getElementById("login-password");

    // Email/Username Validation
    if (loginEmail.value.trim() === "") {
      setInvalid(
        loginEmail,
        "login-email-error",
        "Please enter your email or username"
      );
      isValid = false;
    } else if (
      !emailRegex.test(loginEmail.value) &&
      loginEmail.value.length < 4
    ) {
      setInvalid(
        loginEmail,
        "login-email-error",
        "Please enter a valid email or username"
      );
      isValid = false;
    } else {
      setValid(loginEmail, "login-email-error");
    }

    // Password Validation
    if (loginPassword.value.trim() === "") {
      setInvalid(
        loginPassword,
        "login-password-error",
        "Please enter your password"
      );
      isValid = false;
    } else if (loginPassword.value.length < 8) {
      setInvalid(
        loginPassword,
        "login-password-error",
        "Password must be at least 8 characters"
      );
      isValid = false;
    } else {
      setValid(loginPassword, "login-password-error");
    }

    if (isValid) {
      try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: loginEmail.value,
            password: loginPassword.value,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          alert("Login successful!");
          window.location.href = "userdashboard.html"; // Redirect to the dashboard
        } else {
          alert(data.message || "Login failed");
        }
      } catch (error) {
        alert("An error occurred: " + error.message);
      }
    }
  });

  // Registration Form Submission
  registerForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    let isValid = true;

    const registerEmail = document.getElementById("register-email");
    const registerPassword = document.getElementById("register-password");
    const registerConfirmPassword = document.getElementById(
      "register-confirm-password"
    );

    // Email Validation
    if (registerEmail.value.trim() === "") {
      setInvalid(
        registerEmail,
        "register-email-error",
        "Please enter your email"
      );
      isValid = false;
    } else if (!emailRegex.test(registerEmail.value)) {
      setInvalid(
        registerEmail,
        "register-email-error",
        "Please enter a valid email"
      );
      isValid = false;
    } else {
      setValid(registerEmail, "register-email-error");
    }

    // Password Validation
    if (registerPassword.value.trim() === "") {
      setInvalid(
        registerPassword,
        "register-password-error",
        "Please create a password"
      );
      isValid = false;
    } else if (registerPassword.value.length < 8) {
      setInvalid(
        registerPassword,
        "register-password-error",
        "Password must be at least 8 characters"
      );
      isValid = false;
    } else {
      setValid(registerPassword, "register-password-error");
    }

    // Confirm Password Validation
    if (registerConfirmPassword.value.trim() === "") {
      setInvalid(
        registerConfirmPassword,
        "register-confirm-password-error",
        "Please confirm your password"
      );
      isValid = false;
    } else if (registerConfirmPassword.value !== registerPassword.value) {
      setInvalid(
        registerConfirmPassword,
        "register-confirm-password-error",
        "Passwords do not match"
      );
      isValid = false;
    } else {
      setValid(registerConfirmPassword, "register-confirm-password-error");
    }

    if (isValid) {
      try {
        const response = await fetch("http://localhost:5000/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: registerEmail.value,
            password: registerPassword.value,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          alert("Registration successful!");
          window.location.href = "login.html"; // Redirect to the login page
        } else {
          alert(data.message || "Registration failed");
        }
      } catch (error) {
        alert("An error occurred: " + error.message);
      }
    }
  });

  // Helper Functions for Validation
  function setInvalid(inputElement, errorElementId, errorMessage) {
    inputElement.classList.add("is-invalid");
    inputElement.classList.remove("is-valid");
    document.getElementById(errorElementId).textContent = errorMessage;
    document.getElementById(errorElementId).style.display = "block";
  }

  function setValid(inputElement, errorElementId) {
    inputElement.classList.remove("is-invalid");
    inputElement.classList.add("is-valid");
    document.getElementById(errorElementId).style.display = "none";
  }
});
