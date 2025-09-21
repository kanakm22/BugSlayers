document.querySelector('.signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const passwordFeedback = document.getElementById('password-feedback');
    const confirmPasswordFeedback = document.getElementById('confirm-password-feedback');

    // Reset feedback messages
    passwordFeedback.textContent = '';
    confirmPasswordFeedback.textContent = '';

    let isValid = true;

    // Check if passwords match
    if (password !== confirmPassword) {
        confirmPasswordFeedback.textContent = 'Passwords do not match.';
        confirmPasswordFeedback.style.color = 'red';
        isValid = false;
    }

    // Password strength check
    if (password.length < 6) {
        passwordFeedback.textContent = 'Password must be at least 6 characters long.';
        passwordFeedback.style.color = 'red';
        isValid = false;
    }

    // Check if any field is empty
    if (fullname === '' || username === '' || email === '' || mobile === '' || password === '' || confirmPassword === '') {
        alert('All fields are required!');
        isValid = false;
    }

    if (isValid) {
        alert('Sign up successful!');
        
        window.location.href = '/'; 
    }
});