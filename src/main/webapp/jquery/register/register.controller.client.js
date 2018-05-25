(fuction() {

    var $usernameFld;
    var $passwordFld;
    var $verifyPasswordFld;

    var userAdminService = new UserServiceClient();

    $(main);

    function main() {

        var username = $('.usernameFld').value();
        var password = $('.passwordFld').value();
        var passwordVerify = $('.passwordVerifyFld').value();

        var user = {
            username: username,
            password: password,
            passwordVerify: passwordVerify
        };


        $('.signupBtn').click(register);
    }


    function register() {

    }


})();