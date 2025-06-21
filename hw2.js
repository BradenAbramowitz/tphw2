/*
Name: Braden Abramowitz
Date Created: 2025-19-06
Date Last Edited: 2025-20-06
Version: 2.0
Description: Homework 2 JavaScript file
*/

//dynamic date js code
const d = new Date();
let text= d.toLocaleDateString();
document.getElementById("current_date").innerHTML = text;

//name slider js code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function() {output.innerHTML = this.value;};

//dob validation js code
function validateDOB() {
    const dob = document.getElementById("dob").value;
    const today = new Date();
    const birthDate = new Date(dob);
    let maxDate = new Date(today.getFullYear() - 16, today.getMonth(), today.getDate());
    // Check if the date is in the past and at least 16 years ago
    let minDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());
    if (birthDate < minDate || birthDate > maxDate) {
        alert("Please enter a valid date of birth.");
        return false;
    }
    if (birthDate > today) {
        alert("Date of Birth cannot be in the future.");
        return false;
    }
    if (isNaN(birthDate.getTime())) {
        alert("Invalid Date of Birth format. Please use MM/DD/YYYY.");
        return false;
    }
    const age = today.getFullYear() - birthDate.getFullYear();
    let ageCheck = today.getMonth() - birthDate.getMonth();
    // Adjust age if the birthday hasn't occurred yet this year
    let maxAge = 120; // reasonable maximum age
    if (age < 0 || age > maxAge) {
        alert("Please enter a valid date of birth.");
        return false;
    }
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age < 16) {
        alert("You must be at least 16 years old.");
        return false;
    }
    return true;
}

//ssn validation js code
function validateSSN() {
    const ssn = document.getElementById("ssn").value;
    // Regular expression to match SSN format
    const ssnRegex = /^(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;
    if (!ssnRegex.test(ssn)) {
        alert("Please enter a valid SSN in the format XXX-XX-XXXX.");
        return false;
    }
    return true;
}

//address validation js code
function validateAddress() {
    const address = document.getElementById("address").value;
    // Check if the address is empty
    if (address.trim() === "") {
        alert("Please enter a valid address.");
        return false;
    }
    // Check for minimum length
    if (address.length < 5) {
        alert("Address must be at least 5 characters long.");
        return false;
    }
    return true;
}

//zip code validation js code
function validateZipCode() {
    const zipCode = document.getElementById("zip").value;
    // Regular expression to match US ZIP code format
    if (!zipCode) {
        document.getElementById("zcode_error").innerHTML = "Please enter a valid ZIP code.";
        return false;
    }
    const zipRegex = /^\d{5}(-\d{4})?$/;
    if (!zipRegex.test(zipCode)) {
        alert("Please enter a valid ZIP code in the format XXXXX or XXXXX-XXXX.");
        return false;
    }
    return true;
}

//email validation js code
function validateEmail() {
    const email = document.getElementById("email").value;
    // Regular expression to match email format
    if (!email) {
        document.getElementById("email_error").innerHTML = "Please enter a valid email address.";
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    return true;
}

//phone number validation js code
function validatePhoneNumber() {
    const phone = document.getElementById("phone").value;
    // Regular expression to match US phone number format
    if (!phone) {
        document.getElementById("phone_error").innerHTML = "Please enter a valid phone number.";
        return false;
    }
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid phone number in the format (XXX) XXX-XXXX.");
        return false;
    }
    return true;
}

//user id validation js code
function validateUserId() {
    const userId = document.getElementById("user_id").value;
    // Regular expression to match user ID format
    if (!userId) {
        document.getElementById("user_id_error").innerHTML = "Please enter a valid User ID.";
        return false;
    }
    const userIdRegex = /^[a-zA-Z0-9]{5,}$/; // At least 5 alphanumeric characters
    if (!userIdRegex.test(userId)) {
        alert("User ID must be at least 5 alphanumeric characters.");
        return false;
    }
    return true;
}

//password validation js code
function validatePassword() {
    const password = document.getElementById("password").value;
    // Regular expression to match password format
    if (!password) {
        document.getElementById("password_error").innerHTML = "Please enter a valid password.";
        return false;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.");
        return false;
    }
    return true;
}

//confirm password validation js code
function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;
    // Check if confirm password matches the original password
    if (confirmPassword !== password) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}

//re-display user input back to user js code
function reviewInput() {
    var formcontent = document.getElementById("signup_form");
    var formoutput;
    var i;
    formoutput = "<table class='output'><th colspan='2'>Review Your Information</th>";
    for (i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !="") {
            datatype = formcontent.elements[i].type;
            switch (datatype) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td><td>";
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td><td>";
                        formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                    }
                    break;
                case "select":
                    formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td><td>";
                    formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                    break;
                case "button":
                    // Skip buttons
                    break;
                case "submit":
                    // Skip submit buttons
                    break;
                case "reset":
                    // Skip reset buttons
                    break;
                default:
                    formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td><td>";
                    formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                    break;
            }
        }
    }
    if (formoutput.length > 0) {
        formoutput = formoutput + "</table>";
        document.getElementById("review_output").innerHTML = formoutput;
    }
}

//remove user input js code
function removeReview() {
    document.getElementById("review_output").innerHTML = "";
}