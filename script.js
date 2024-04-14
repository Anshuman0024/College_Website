document.getElementById("admissionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // You can add your form submission logic here, like sending data to a server
    // For demonstration, let's just log the form data to console
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var contact number = document.getElementById("contact number").value;
    console.log("Full Name: " + fullName + ", Email: " + email);
    alert("Form submitted successfully!");
    // Clear form fields
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact number").value = "";
});
