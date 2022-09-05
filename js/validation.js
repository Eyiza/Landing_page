function validate() {
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmpassword').value;
    if (password != confirmpassword) {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML
            = '☒ Passwords does not match';
        return false;
    }
    document.getElementById('message').innerHTML = "";
    return true;
    }

function visibility() {
    var oldpassword = document.getElementById('oldpassword');
    var password = document.getElementById('password');
    var confirmpassword = document.getElementById('confirmpassword');
    if (password.type === "password" & confirmpassword.type === "password") {
        password.type = "text";
        confirmpassword.type = "text";
        oldpassword.type = "text";
    } else {
        password.type = "password";
        confirmpassword.type = "password";
        oldpassword.type = "password";
    }
}







