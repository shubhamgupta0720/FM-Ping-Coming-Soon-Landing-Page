function formSubmit(event){
    event.preventDefault();
    var inputField = document.getElementById('email');
    var emailError = document.getElementById("email-error");
    var innerWidth = window.innerWidth;
    if (inputField.value.trim() === "") {
        inputField.style.borderColor = "hsl(354, 100%, 66%)"; // Change border color to red
        emailError.style.visibility = "visible"; // Display the error message
        if(innerWidth <= 410){
            console.log("mbfe")
            emailError.classList.add('active');
        }
    } else {
        inputField.style.borderColor = ""; // Reset border color
        emailError.style.visibility = "hidden"; // Hide the error message
    }
}