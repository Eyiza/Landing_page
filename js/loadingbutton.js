$('#LoginForm').submit(function (e) {
   e.preventDefault();
   var data = {
       email: $('#email').val(),
       password: $('#password').val(),
   }
   if (data.email != "" && data.password != "") {
       signIn();
   }
   else {
       swal("Not yet", "All fields are required", "warning");
   }
});

function signIn() {
   $("#button").html("<i class = 'fa fa-spinner fa-spin'></i> Please Wait").css('margin', '10px');
   $("#button").attr("disabled", "disabled");
   
   window.setTimeout(function () {
       $("#button").removeAttr("disabled");
       $("#button").html("Sign In");
       return check_form();
   }, 3000);
};



function timer(){
    swal("Invalid Email or Password", "Account Locked!. Please wait for " + timeleft + " seconds", "warning");    
    
    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = " ";
            $("#button").removeAttr("disabled", "disabled");
            $("#email").removeAttr("disabled", "disabled");
            $("#password").removeAttr("disabled", "disabled");
        }
        else {
            // swal("Invalid Email or Password", "Account Locked!. Please wait for " + timeleft + " seconds", "warning");
            document.getElementById("countdown").innerHTML =  timeleft + " seconds remaining";
            document.getElementById('countdown').style.color = 'red';
            $("#button").attr("disabled", "disabled");
            $("#email").attr("disabled", "disabled");
            $("#password").attr("disabled", "disabled");
        }
        timeleft -= 1;
        }, 1000);

        // swal({
        //     title: "Invalid Email or Password",   
        //     text: displayText.replace(/timeleft/, timeleft),   
        //     downloadTimer: timeleft * 1000,   
        //     showConfirmButton: false 
        // });

        // var timeleft = 10, // timer in seconds
        // isTimerStarted = false;
        // (function customSwal() {
        //     swal({  
        //         title: "Invalid Email or Password",
        //         text: "Account Locked!. Please wait for " + timeleft + " seconds",
        //         timeleft: !isTimerStarted ? timeleft * 1000 : undefined,
        //         showConfirmButton: true,
        //         icon: "warning"
        //     });
        //     isTimerStarted = true;
        //     if(timeleft) {
        //         timeleft--;
        //         setTimeout(customSwal, 1000);
        //     }
        // })();
}


var login_attempts = 4;
var timeleft = 40;
function check_form() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "example@gmail.com" && password == "password") {
        swal("Signin Successful", "You will be redirected shortly", "success").then(function () {
            window.location = "index.html";
        });
    }
    else {
        login_attempts -= 1;
        if (login_attempts <= 0) {
            if (login_attempts == 0) {
                return timer()
            }
            else {
                timeleft = 40;
                return timer()
            }
        }
        else {
            swal("Invalid Email or Password", + login_attempts + " login attempt(s) left", "warning");
            $("#button").removeAttr("disabled");
            $("#button").html("SIGN IN");
            $("#email").removeAttr("disabled");
            $("#password").removeAttr("disabled");
        }
    }
}

$('#signupForm').submit(function (e) {
    e.preventDefault();
    var data = {
        username: $('#userName').val(),
        email: $('#email').val(),
        password: $('#password').val(),
        confirmPassword: $('#confirmpassword').val(),
    }
    if (data.email != "" && data.password != "" && data.username != "" && data.confirmPassword != "") {
        if (data.password == data.confirmPassword) signUp();
        else return false;
        /*swal("Not yet", "Passwords do not match", "warning");*/
    }
    else {
        return false;
/*        swal("Not yet", "All fields are required", "warning");
*/    }
});


function signUp() {
    $("#btnSignup").html("<i class = 'fa fa-spinner fa-spin'></i> Please Wait").css('margin', '10px');
    $("#btnSignup").attr("disabled", "disabled");
    window.setTimeout(function () {
        swal("Signup Successful", "You will be redirected shortly", "success");
        $("#btnSignup").removeAttr("disabled");
        $("#btnSignup").html("Sign Up");
        $("#userName").val("");
        $("#email").val("");
        $("#password").val("");
        $("#confirmpassword").val("");

    }, 3000);
};


$('#changepassword').submit(function (e) {
    e.preventDefault();
    var data = {
        oldPassword: $('#oldpassword').val(),
        password: $('#password').val(),
        confirmPassword: $('#confirmpassword').val(),
    }
    if (data.oldPassword != "" && data.password != "" && data.confirmPassword != "") {
        if (data.password == data.confirmPassword) changePassword();
        else return false;
        /*swal("Not yet", "Passwords do not match", "warning");*/
    }
    else {
        return false;
/*        swal("Not yet", "All fields are required", "warning");
*/    }
});


function changePassword() {
    $("#btnchangepassword").html("<i class = 'fa fa-spinner fa-spin'></i> Please Wait").css('margin', '10px');
    $("#btnchangepassword").attr("disabled", "disabled");
    var myModal = $('#changePasswordModal');
    window.setTimeout(function () {
        // swal("Password Updated", "You will be redirected shortly", "success").then(function () {
        //     window.location = "index.html";
        // });
        swal("Password Updated", "", "success").then(function () {
            myModal.modal('hide');
        });
        $("#btnchangepassword").removeAttr("disabled");
        $("#btnchangepassword").html("Update Password");
        $("#oldpassword").val("");
        $("#password").val("");
        $("#confirmpassword").val("");
    }, 3000);
};


function forgotpassword() {
    $("#reset").html("<i class = 'fa fa-spinner fa-spin'></i> Please Wait").css('margin', '10px');
    $("#reset").attr("disabled", "disabled");
    window.setTimeout(function () {
        swal("A code has been sent to your mail", "", "success").then(function () {
            window.location = "resetpassword.html";
        });
    }, 3000);
 };

$('#resetpassword').submit(function (e) {
    e.preventDefault();
    var data = {
        code: $('#code').val(),
        password: $('#password').val(),
        confirmPassword: $('#confirmpassword').val(),
    }
    if (data.code != "" && data.password != "" && data.password != "" && data.confirmPassword != "") {
        if (data.password == data.confirmPassword) resetPassword();
        else return false;
        /*swal("Not yet", "Passwords do not match", "warning");*/
    }
    else {
        return false;
/*        swal("Not yet", "All fields are required", "warning");
*/    }
});


function resetPassword() {
    $("#button").html("<i class = 'fa fa-spinner fa-spin'></i> Please Wait").css('margin', '10px');
    $("#button").attr("disabled", "disabled");
    window.setTimeout(function () {
        swal("Password Updated", "", "success").then(function () {
            window.location = "signin.html"});
        $("#button").removeAttr("disabled");
        $("#button").html("Reset password");
    }, 3000);
};


$('#reset').click(function (e) {
   e.preventDefault();
   var data = {
       email: $('#email').val(),
   }
   if (data.email != "") {
       forgotpassword();
   }
   else {
       swal("Not yet", "Email is required", "warning");
   }
});



$('#contact_message').submit(function (e) {
    e.preventDefault();
    var data = {
        name: $('#name').val(),
        email: $('#email').val(),
        subject: $('#subject').val(),
        feedback: $('#feedback').val(),
    }
    if (data.name != "" && data.email != "" && data.subject != "" && data.feedback != "") {
        feedback_message();
    }
    else {
        return false;
    }
});

function feedback_message() {
    $("#leave_message").html("<i class = 'fa fa-spinner fa-spin'></i> Please Wait").css('margin', '10px');
    $("#leave_message").attr("disabled", "disabled");
    window.setTimeout(function () {
        swal("Message has been sent", "", "success");
        $("#leave_message").removeAttr("disabled");
        $("#leave_message").html("Leave Message");
        $("#name").val("");
        $("#email").val("");
        $("#subject").val("");
        $("#feedback").val("");
    }, 3000);
};

