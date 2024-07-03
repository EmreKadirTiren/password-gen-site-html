
var pass1="password";
password = prompt('Please enter your password!');

if (password === pass1)
    alert('Password Correct! Click OK to enter!')
else{
    location.reload();
}

function generatePassword() {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?/~`-=";
    var passwordLength = document.getElementById('passwordLength').value;
    if (!passwordLength || passwordLength < 1) {
        alert("Please enter a valid password length.");
        return;
    }
    var password = '';
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    document.getElementById('password').value = password;
}

function savePassword() {
    var service = document.getElementById('service').value;
    var savedPassword = document.getElementById('savedPassword').value;

    if (!service || !savedPassword) {
        alert("Please enter both a service name and a password.");
        return;
    }

    // Create a new row in the table
    var table = document.getElementById('passwordTable');
    var newRow = table.insertRow(-1); // Append row at the end of the table

    // Insert cells in the row
    var cell1 = newRow.insertCell(0); // Service column
    var cell2 = newRow.insertCell(1); // Password column
    cell1.innerHTML = service;
    cell2.innerHTML = savedPassword;

    // Clear input fields after saving
    document.getElementById('service').value = '';
    document.getElementById('savedPassword').value = '';

    alert("Password saved successfully!");
}
