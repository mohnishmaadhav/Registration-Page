function validateUsername(username) {
    if (!username) return "Username is required.";
    if (username.length < 3) return "At least 3 characters.";
    if (username.length > 16) return "At most 16 characters.";
    return "";
}
function validateEmail(email) {
    if (!email) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Invalid email.";
    return "";
}
function validatePassword(password) {
    if (!password) return "Password is required.";
    if (password.length < 6) return "At least 6 characters.";
    return "";
}
function validateConfirmPassword(password, confirmPassword) {
    if (!confirmPassword) return "Please confirm password.";
    if (password !== confirmPassword) return "Passwords do not match.";
    return "";
}
document.getElementById('registrationForm').addEventListener('input', function() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    document.getElementById('usernameFeedback').textContent = validateUsername(username);
    document.getElementById('emailFeedback').textContent = validateEmail(email);
    document.getElementById('passwordFeedback').textContent = validatePassword(password);
    document.getElementById('confirmPasswordFeedback').textContent = validateConfirmPassword(password, confirmPassword);
});
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const usernameError = validateUsername(username);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(password, confirmPassword);
    document.getElementById('usernameFeedback').textContent = usernameError;
    document.getElementById('emailFeedback').textContent = emailError;
    document.getElementById('passwordFeedback').textContent = passwordError;
    document.getElementById('confirmPasswordFeedback').textContent = confirmPasswordError;
    if (!usernameError && !emailError && !passwordError && !confirmPasswordError) {
        document.getElementById('formMessage').textContent = "Registration successful!";
        document.getElementById('formMessage').style.color = "#2e7d32";
        this.reset();
    } else {
        document.getElementById('formMessage').textContent = "Please fix the errors above.";
        document.getElementById('formMessage').style.color = "#c62828";
    }
});