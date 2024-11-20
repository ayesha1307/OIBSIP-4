const registrationForm = document.getElementById('registration-form');
const loginForm = document.getElementById('login-form');
const securedPage = document.getElementById('secured-page');
const logoutButton = document.getElementById('logout');

registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Save user to local storage
    localStorage.setItem(username, password);
    
    alert('Registration successful!');
    
    // Clear form fields
    registrationForm.reset();
});

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;
    
    // Retrieve user from local storage
    const storedPassword = localStorage.getItem(loginUsername);
    
    if (storedPassword && storedPassword === loginPassword) {
        alert('Login successful!');
        securedPage.classList.remove('hidden');
        loginForm.reset();
        registrationForm.reset();
        loginForm.style.display = 'none';
        registrationForm.style.display = 'none';
    } else {
        alert('Invalid username or password.');
    }
});

logoutButton.addEventListener('click', function () {
    securedPage.classList.add('hidden');
    loginForm.style.display = 'block';
    registrationForm.style.display = 'block';
});
