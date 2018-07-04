( function () {
    let username;
    let userId;
    let phone;
    let email;
    let role;
    let url;
    let userInitial;

    let userAdminService = new UserServiceClient();
    url = window.location.href;
    userId = url.substr(url.indexOf("=") + 1, url.length-1);
    userInitial = userAdminService.findUserById(userId);
    userInitial.then(main);


    // $(main);

    function main(user) {
        $('#successAlert').hide();
        var year = user.dateOfBirth.substr(0,4);
        var month = user.dateOfBirth.substr(5,2);
        var day = user.dateOfBirth.substr(8,2);

        var date = year + "-" + month + "-" + day;

        document.getElementById("usernameFld").value = user.username;
        document.getElementById("usernameFld").disabled = true;
        document.getElementById("phoneFld").value = user.phone;
        document.getElementById("emailFld").value = user.email;
        document.getElementById("roleFld").value = user.role;
        document.getElementById("dateFld").value = date;



        $('#updateBtn').click(update);
        $('#logoutBtn').click(logout);

    }

    function update() {
        phone = document.getElementById("phoneFld").value;
        email= document.getElementById("emailFld").value;
        role = document.getElementById("roleFld").value;
        date = document.getElementById("dateFld").value;

        var user = {
            phone: phone,
            email: email,
            date: date,
            role: role
        };

        var promise = userAdminService.updateUser(userId,user);
        promise.then(redirect);

    }

    function redirect(event) {
        $('#successAlert').show();
    }

    function logout() {
        var promise = userAdminService.logout();
        promise.then(signingOff);

    }

    function signingOff(event) {
        window.location.href = "/jquery/components/login/login.template.client.html";
    }


})();