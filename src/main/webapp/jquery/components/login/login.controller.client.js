(function () {
    var $usernameFld;
    var $passwordFld;
    var $loginBtn;

    var userService = new UserServiceClient();
    $(main);

    function main() {
        $('#loginBtn').click(login);
    }

    function login() {

        var $usernameFld = $('#usernameFld').val();
        var $passwordFld = $('#passwordFld').val();

        var promise = userService.login($usernameFld,$passwordFld);
        promise.then(signInUser);
    }

    function signInUser(user) {
        console.log(user);
        if(user!=null){
            window.location.href='../profile/profile.template.client.html?uid='+user.id;
        }
    }
})();