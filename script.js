document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example authentication logic (replace with your actual authentication code)
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
        // Redirect to the dashboard page after successful login
        window.location.href = 'dashboard.html'; // Redirect to the dashboard page
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
