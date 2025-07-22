document.addEventListener("DOMContentLoaded", function () {
  // Toggle project details
  const toggleButtons = document.querySelectorAll(".toggle-details");

  toggleButtons.forEach(button => {
    button.addEventListener("click", function () {
      const details = this.nextElementSibling;

      if (details.style.display === "none") {
        details.style.display = "block";
        this.textContent = "Hide Details";
      } else {
        details.style.display = "none";
        this.textContent = "Show Details";
      }
    });
  });

  // Form validation
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    let isValid = true;

    // Name validation
    const nameInput = document.getElementById("name");
    const nameError = nameInput.nextElementSibling;
    if (nameInput.value.trim() === "") {
      nameError.style.display = "inline";
      isValid = false;
    } else {
      nameError.style.display = "none";
    }

    // Email validation
    const emailInput = document.getElementById("email");
    const emailError = emailInput.nextElementSibling;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.style.display = "inline";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }

    // Message validation
    const messageInput = document.getElementById("message");
    const messageError = messageInput.nextElementSibling;
    if (messageInput.value.trim() === "") {
      messageError.style.display = "inline";
      isValid = false;
    } else {
      messageError.style.display = "none";
    }

    // Prevent submission if any validation fails
    if (!isValid) {
      event.preventDefault();
    }
  });
});