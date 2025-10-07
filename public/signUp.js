document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.signup-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const fullname = document.getElementById('fullname').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        const passwordFeedback = document.getElementById('password-feedback');
        const confirmPasswordFeedback = document.getElementById('confirm-password-feedback');

        passwordFeedback.textContent = '';
        confirmPasswordFeedback.textContent = '';

        let isValid = true;

        if (password !== confirmPassword) {
            confirmPasswordFeedback.textContent = 'Passwords do not match.';
            confirmPasswordFeedback.style.color = 'red';
            isValid = false;
        }

        if (password.length < 6) {
            passwordFeedback.textContent = 'Password must be at least 6 characters long.';
            passwordFeedback.style.color = 'red';
            isValid = false;
        }

        if (fullname === '' || username === '' || email === '' || mobile === '' || password === '' || confirmPassword === '') {
            alert('All fields are required!');
            isValid = false;
        }

        if (isValid) {
            alert('Sign up successful!');
            window.location.href = '/'; 
        }
    });
});