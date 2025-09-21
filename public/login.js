document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username === '' || email === '' || password === '') {
        alert('All fields are required!');
    } else {
        alert('Form submitted successfully!');
        window.location.href = '/'; 
    }
});