var username;
var usernameCount;
var password;
var ck_username = /^[A-z]+$/;

//hide error divs
$('.error').hide();


//changed from blur to keyup so user can see any invalid errors before they even click outside the textbox

$('#username').keyup(function() {
    usernameCount = $('#username').val().length;
    username = $('#username').val();
    //alert(usernameCount);
    if(usernameCount < 2){
        $('#username-error').show().html("Username is too short");      
    }
    else if (!ck_username.test(username)) {
        $('#username-error').show().html("Username must be a-z");
    }
    else {
        $("#username-error").hide();
    }
});


$('#password').keyup(function() {
    password = $("#password").val().length;
    if(password < 2) {
        $('#password-error').show().html("Password is too short");
    }
    else {
        $('#password-error').hide();
    }
})

