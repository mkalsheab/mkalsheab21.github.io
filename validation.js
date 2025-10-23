function validateForm() {
    let fullName = document.getElementById('fullName').value.trim();
    let email = document.getElementById('email').value.trim();
    let country = document.getElementById('country').value.trim();
    let comments = document.getElementById('comments').value.trim();

    if (fullName === "" || email === "" || country === "" || comments === "") {
        
        alert("Validation Error: Please fill in ALL required fields before submission.");
        return false; 
        
    } else {
        
        alert("Form submitted successfully! Thank you for your interest.");
        return false; 
    }
}