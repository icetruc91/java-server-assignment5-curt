( function () {
    let username;
    let userId;
    let phone;
    let email;
    let role;
    let date;
    let url;
    let userInitial;

    let userAdminService = new UserServiceClient();
    url = window.location.href;
    userId = url.substr(url.indexOf("=") + 1, url.length-1);
    userInitial = userAdminService.findUserById(userId);
    userInitial.then(main);

    // $(main);

    function main(user) {
        document.getElementById("usernameFld").value = user.username;
        document.getElementById("phoneFld").value = user.phone;
        document.getElementById("emailFld").value = user.email;
        document.getElementById("roleFld").value = user.role;
        document.getElementById("dateFld").value = user.date;

        $('#updateBtn').click(update);
        $('#logoutBtn').click(logout);

    }

    function update() {
        username = document.getElementById("usernameFld").value;
        phone = document.getElementById("phoneFld").value;
        email= document.getElementById("emailFld").value;
        role = document.getElementById("roleFld").value;
        date = document.getElementById("dateFld").value;

        var user = {
            username: username,
            phone: phone,
            email: email,
            date: date,
            role: role
        };

        var promise = userAdminService.updateUser(userId,user);
        promise.then(redirect);

    }

    function redirect(event) {
        alert("Information has been updated");
        location.reload();
    }

    function logout() {
        var promise = userInitial.logout();
        promise.then(signingOff);

    }

    function signingOff(event) {
        window.location.href = "../components/login/login.template.client.html";
    }


})();