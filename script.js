const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const submitBtn = document.getElementById('submit-btn');

let isValidEmail = false;
let isValidPassword = false;

function validateAll() {
    const overallSuccess = document.getElementById('overallSuccess');
    if(isValidEmail && isValidPassword) {
        overallSuccess.style.display = 'block';
    }
    else {
        overallSuccess.style.display = 'none';
    }
}

function validateEmail(e) {
    const emailInput = e.target.value;
    if(emailInput.length > 3 && emailInput.includes('@') && emailInput.includes('.')) {
        emailError.style.display = 'none';
        isValidEmail = true;
    }
    else {
        isValidEmail = false;
        emailError.style.display = 'block';
    }
    validateAll();
}

function validatePassword(e) {
    const passwordInput = e.target.value;
    if(passwordInput.length <= 8) {
        isValidPassword = false;
        passwordError.style.display = 'block';
    }
    else {
        isValidPassword = true;
        passwordError.style.display = 'none';
    }
    validateAll();
}


function submitForm() {
    if (isValidEmail && isValidPassword) {
        if (confirm('Are you sure you want to submit?')) {
            alert('Successful signup!');
        } else {
            email.value = '';
            password.value = '';
            emailError.style.display = 'block';
            passwordError.style.display = 'block';
            document.getElementById('overallSuccess').style.display = 'none';
            isValidEmail = false;
            isValidPassword = false;
        }
    } else {
        alert('Please ensure both fields are valid before submitting.');
    }
}
// Here we can use 'input' event instead of 'change' for real-time feedback 
// while change triggers when the input field loses focus 
email.addEventListener('change', validateEmail);

password.addEventListener('change', validatePassword);

submitBtn.addEventListener('click', submitForm);