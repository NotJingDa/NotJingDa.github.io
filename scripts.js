function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get form input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Perform validation on the form fields
  if (validateName(name) && validateEmail(email) && validateMessage(message)) {
    displaySuccessMessage();
    // Store the form input values in localStorage
    localStorage.setItem("contact-form-name", name);
    localStorage.setItem("contact-form-email", email);
    localStorage.setItem("contact-form-message", message);

    // Redirect to the Thank You page
    window.location.href = "thank_you.html";
    resetForm();
  }
}

function displaySuccessMessage() {
  const successMessage = document.getElementById("success-message");
  // Display the success message for 3 seconds
  successMessage.style.display = "block";
  setTimeout(function () {
    successMessage.style.display = "none";
  }, 3000);
}

function resetForm() {
  document.getElementById("contact-form").reset();
}

function validateName(name) {
  if (name.trim() === "") {
    alert("Please enter your name.");
    return false;
  }
  return true;
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  return true;
}

function validateMessage(message) {
  if (message.trim() === "") {
    alert("Please enter your message.");
    return false;
  }
  return true;
}