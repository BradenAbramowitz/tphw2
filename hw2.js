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

function updateSliderValue() {
    document.getElementById("range-slider").innerHTML = slider.value;
}
slider.oninput = updateSliderValue;

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
function validateAddress1() {
    const address = document.getElementById("address1").value;
    const error = document.getElementById("address1_error");
    if (!address || address.trim().length < 5) {
        error.innerHTML = "Please enter address";
        return false;
    }
    error.innerHTML = "";
    return true;
}

//city validation js code
function validateCity() {
    const city = document.getElementById("city").value;
    const error = document.getElementById("city_error");
    if (!city || city.length < 2) {
        error.innerHTML = "Please enter city";
        return false;
    }
    error.innerHTML = "";
    return true;
}

//zip code validation js code
function validateZipCode() {
    const zip = document.getElementById("zcode").value;
    const error = document.getElementById("zcode_error");
    if (!zip) {
        error.innerHTML = "Zip code can't be blank";
        return false;
    }
    const zipRegex = /^\d{5}(-\d{4})?$/;
    if (!zipRegex.test(zip)) {
        error.innerHTML = "Zip must be 5 or 9 digits";
        return false;
    }
    error.innerHTML = "";
    return true;
}

//email validation js code
function validateEmail() {
    const email = document.getElementById("email").value;
    const error = document.getElementById("email_error");
    if (!email) {
        error.innerHTML = "Email can't be blank";
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        error.innerHTML = "Please enter a valid email address.";
        return false;
    }
    error.innerHTML = "";
    return true;
}

//phone number validation js code
function validatePhoneNumber() {
    const phone = document.getElementById("phone").value;
    const error = document.getElementById("phone_error");
    if (!phone) {
        error.innerHTML = "Phone number can't be blank";
        return false;
    }
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        error.innerHTML = "Format: (123) 456-7890";
        return false;
    }
    error.innerHTML = "";
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
function reviewForm() {
    var formcontent = document.getElementById("signup");
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
        document.getElementById("showInput").innerHTML = formoutput;
    }
}

//remove user input js code
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}
