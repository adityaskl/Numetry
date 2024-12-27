document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Reset error messages
    const errorSpans = document.querySelectorAll('.error');
    errorSpans.forEach(span => span.textContent = '');

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;

    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
    }

    if (!isValidMobile(mobile)) {
        document.getElementById('mobileError').textContent = 'Mobile number must start with 7, 8, or 9 and have 10 digits';
        isValid = false;
    }

    if (!isValidPassword(password)) {
        document.getElementById('passwordError').textContent = 'Password must contain 1 uppercase, 1 lowercase, 1 number, and 1 special character';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidMobile(mobile) {
    return /^[789]\d{9}$/.test(mobile); // Ensure exactly 10 digits
}

function isValidPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}