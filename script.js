
var pass1="password";
password = prompt('Please enter your password!');

if (password === pass1)
    alert('Password Correct! Click OK to enter!')
else{
    location.reload();
}

function getPassword(){
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
   document.getElementById("password").value = password 
    
}