(function () {

    let username;
    let password;
    let verifyPassword;

    var userAdminService = new UserServiceClient();

    $(main);

    function main() {


        $('#signupBtn').click(register);


    }

    function register(event) {
        console.log(event);

        username = document.getElementById("usernameFld").value;
        password = document.getElementById("passwordFld").value;
        verifyPassword = document.getElementById("verify-passwordFld").value;
        // username = $('#usernameFld').val();
        // password = $('#passwordFld').val();
        // verifyPassword = $('#passwordVerifyFld').val();

        var user = {
            username: username,
            password: password,
        };


        if (password.toString() != verifyPassword.toString()){
            alert("Passwords do not match! Please, try again.");
            location.reload();
        }
        else if(userAdminService.register(user) == null) {
            alert("Username is already taken! Please, try again.");
            location.reload();
        }
        else {
            window.location.href = "../components/profile/profile.template.client.html";
        }


    }

    // function isSame(obj1, obj2) {
    //
    // }





})();