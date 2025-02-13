document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Password match validation
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return; // Exit the function if passwords don't match
    }
    
    // Store the username and password in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Redirect to index.html
    window.location.href = 'links.html';
});