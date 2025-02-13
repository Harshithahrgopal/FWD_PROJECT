// login.js

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve stored credentials from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check if the entered credentials match the stored ones
    if (username === storedUsername && password === storedPassword) {
        // If credentials match, redirect to the homepage or user dashboard
        window.location.href = 'links.html';
    } else {
        // If credentials don't match, show an error message
        alert("Invalid username or password. Please try again.");
    }
});