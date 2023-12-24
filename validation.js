function validateForm() {
    // Reset previous error messages
    document.getElementById("errorMessages").innerHTML = "";

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var departureTime = document.getElementById("departureTime").value;
    var numTickets = document.getElementById("numTickets").value;

    // Validation checks
    var errors = [];

    if (name.length === 0 || name.length > 30) {
        errors.push("Name is required and must be less than 30 characters.");
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push("Invalid email format.");
    }

    var timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeRegex.test(departureTime)) {
        errors.push("Invalid time format. Please use 24-hour format (HH:mm).");
    }

    var numTicketsInt = parseInt(numTickets, 10);
    if (isNaN(numTicketsInt) || numTicketsInt < 1 || numTicketsInt > 10) {
        errors.push("Number of tickets must be an integer between 1 and 10.");
    }

    // Display errors or form data
    if (errors.length > 0) {
        var errorMessages = errors.map(error => `<p>${error}</p>`).join("");
        document.getElementById("errorMessages").innerHTML = errorMessages;
    } else {
        var formDataDisplay = `
            <h2>Form Data:</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Departure Time:</strong> ${departureTime}</p>
            <p><strong>Number of Tickets:</strong> ${numTickets}</p>
        `;
        document.getElementById("formData").innerHTML = formDataDisplay;
    }
}