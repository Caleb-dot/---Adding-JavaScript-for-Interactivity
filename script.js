document.addEventListener("DOMContentLoaded", function () {
  
});

document.addEventListener("DOMContentLoaded", function () {
 
    const toggleButtons = document.querySelectorAll(".toggle-details");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
           
            const details = this.nextElementSibling;

            // Toggle visibility
            if (details.style.display === "none") {
                details.style.display = "block";
                this.textContent = "Hide Details";
            } else {
                details.style.display = "none";
                this.textContent = "Show Details";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        let isValid = true;

   
        const nameInput = document.getElementById("name");
        const nameError = nameInput.nextElementSibling;
        if (nameInput.value.trim() === "") {
            nameError.style.display = "block";
            isValid = false;
        } else {
            nameError.style.display = "none";
        }

        const emailInput = document.getElementById("email");
        const emailError = emailInput.nextElementSibling;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000A-Z]{2,}$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        // Message Validation
        const messageInput = document.getElementById("message");
        const messageError = messageInput.nextElementSibling;
        if (messageInput.value.trim() === "") {
            messageError.style.display = "block";
            isValid = false;
        } else {
            messageError.style.display = "none";
        }

        // Prevent form submission if there are errors
        if (!isValid) {
            event.preventDefault();
        }
    });
});

