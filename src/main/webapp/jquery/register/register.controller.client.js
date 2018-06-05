(function () {

    let username;
    let password;
    let verifyPassword;
    let user;
    let returnUser;

    let userAdminService = new UserServiceClient();

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

        user = {
            username: username,
            password: password,
        };

        if (password.toString() != verifyPassword.toString()){
            alert("Passwords do not match! Please, try again.");
            location.reload();
        }

        var promise = userAdminService.findUserByUsername(user.username);
        promise.then(registerHelper);



    }



    function registerHelper(returnUser) {
            if (returnUser!=null) {
                alert("Username is already taken! Please, try again.");

            }
            else {
                var promise = userAdminService.register(user);
                promise.then(reload);
            }

    }

    function reload(user) {
        window.location.href = "../components/profile/profile.template.client.html?=" + user.id;

    }





})();