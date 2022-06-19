const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messagError = document.querySelector("#messagError");

function validateForm(event) {
    event.preventDefault();

    if (checkRequirements(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (checkRequirements(lastName.value, 3) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    if (checkRequirementsEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkRequirements(subject.value, 7) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (checkRequirements(message.value, 15) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
    
}

form.addEventListener("submit", validateForm);

function checkRequirements(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function checkRequirementsEmail(email) {
    const regExEmail = /\S+@\S+\.\S+/;
    const requirementsMatches = regExEmail.test(email);
    return requirementsMatches;
}
