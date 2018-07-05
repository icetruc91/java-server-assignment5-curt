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

    // Grabs input information to send to the server.
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

        // Password bonus.
        if (password.toString() != verifyPassword.toString()) {
            alert("Passwords do not match! Please, try again.");
            location.reload();
        }

        // Finds user by username.
        console.log(user.username);
        var promise = userAdminService.findUserByUsername(user.username);
        promise.then(registerHelper);


    }


    function registerHelper(returnUser) {
        console.log(returnUser.toString());
        if (returnUser.username != null) {
            alert("Username is already taken! Please, try again.");
            location.reload();

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