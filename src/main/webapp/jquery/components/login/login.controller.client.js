(function () {
    let username;
    let password;

    let userService = new UserServiceClient();

    $(main);

    function main() {
        $('#loginBtn').click(login);
    }

    function login(event) {

        console.log(event);
        username = document.getElementById("usernameFld").value;
        password = document.getElementById("passwordFld").value;

        let promise = userService.login(username,password);
        promise.then(signInUser);

    }

    function signInUser(user) {
        if (user.username.toString() != username || user.password.toString() != password) {
            alert("Username or password is incorrect! Please, try again.");
        }

        else {
            window.location.href='../profile/profile.template.client.html?uid='+user.id;
        }

        console.log("user has been signed in.");

    }


})();