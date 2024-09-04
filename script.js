document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Basic validation
        if (username === "" || password === "") {
            alert("Please fill in both the username and password fields.");
            return;
        }

        // If validation passes, you can proceed with form submission, e.g., sending data via AJAX
        alert("Form submitted successfully!");

        // Example of how to send form data using fetch (AJAX)
        
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username, password: password }),
        })
        .then(response => response.json())
        .then(data => {
            console.log("Success:", data);
            // Handle the response data here (e.g., redirect to another page)
        })
        .catch((error) => {
            console.error("Error:", error);
            // Handle any errors here
        });
        
    });
});
