(function () {

    let tbody;
    let template;
    let userAdminService = new UserServiceClient();


    $(main);

        function main() {

            $('h1').html('User Administration');
            tbody = $('.wbdv-tbody');
            template = $('.wbdv-userRowTemplate');


            var promise = userAdminService.findAllUsers();
            promise.then(renderUsers);

            $('#addBtn').click(createUser);

            $('.updateBtn').click();

            $('.searchBtn').click(updateUser);


        }

        function renderUsers(users) {
            tbody.empty();

            for (var i = 0; i < users.length;i++) {
                var user = users[i];
                var clone = template.clone();

                clone.attr('id', user.id);

                var space = "*****";

                // Buttons.
                clone.find('.wbdv-remove').click(deleteUser);
                clone.find('#editBtn').click(findUserById);

                clone.find('.wbdv-username')
                    .html(user.username);
                clone.find('.wbdv-password')
                    .html(space);
                clone.find('.wbdv-firstName')
                    .html(user.firstName);
                clone.find('.wbdv-lastName')
                    .html(user.lastName);
                clone.find('.wbdv-role')
                    .html(user.role);

                tbody.append(clone);
            }

        }

    function createUser(event) {
        console.log(event);

        var username = $('#usernameFld').val();
        var password = $('#passwordFld').val();
        var firstName = $('#firstNameFld').val();
        var lastName = $('#lastNameFld').val();
        var role = $('#roleFld').val();

        var user = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            role: role
        };


        var promise = userAdminService.createUser(user);

            promise.then(findAllUsers);

    }

    function findAllUsers() {
        userAdminService
            .findAllUsers()
            .then(renderUsers);
    }

    function findUserById(event) {

        var editBtn = $(event.currentTarget);
        var userId = editBtn.parent().parent().parent().parent().attr('id');
        console.log('userId found');
        console.log(userId);

        var promise = userAdminService.findUserById(userId);
        promise.then(findUserByIdHelper);
        updateUser(userId);


    function findUserByIdHelper(promise) {
        console.log(promise.username);
        console.log(promise.password);
        console.log(promise.firstName);
        console.log(promise.lastName);
        console.log(promise.role);

        document.getElementById("usernameFld").value = promise.username;
        document.getElementById("passwordFld").value = promise.password;
        document.getElementById("firstNameFld").value = promise.firstName;
        document.getElementById("lastNameFld").value = promise.lastName;
        document.getElementById("roleFld").value = promise.role;
    }

    }


    function deleteUser(event) {

            var deleteBtn = $(event.currentTarget);
            var userId = deleteBtn.parent().parent().parent().parent().attr('id');

            userAdminService.deleteUser(userId).then(findAllUsers);

    }

    // function editUser(event) {
    //     console.log('edit click event');
    //
    //     var editBtn = $(event.currentTarget);
    //     var userId = editBtn
    //         .parent()
    //         .parent()
    //         .attr('id');
    //
    //     var user = userAdminService
    //         .findUserById(userId);
    //
    //     document.getElementById("usernameFld").value = user.username;
    //     document.getElementById("passwordFld").value = user.password;
    //     document.getElementById("firstNameFld").value = user.firstName;
    //     document.getElementById("lastNameFld").value = user.lastName;
    //     document.getElementById("roleFld").value = user.role;
    //
    //
    //
    // }


    function updateUser(userId) {
        console.log('update click event');

        document.getElementById("updateBtn").addEventListener("click", updateUserHelper);


        function updateUserHelper() {
            var username = document.getElementById("usernameFld").value;
            var password = document.getElementById("passwordFld").value;
            var firstName = document.getElementById("firstNameFld").value;
            var lastName = document.getElementById("lastNameFld").value;
            var role = document.getElementById("roleFld").value;

            var user = {
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName,
                role: role
            };

            userAdminService.updateUser(userId, user)
                .then(findAllUsers);
            location.reload();
        }


            }

     function renderUser(userId) {
         console.log('renderUser click event');
         var user = userAdminService.findUserById(userId);
         tbody.empty();

         var clone = template.clone();
             clone.attr('id', user.id);

             // Buttons.
             clone.find('.wbdv-remove').click(deleteUser);
             clone.find('.wbdv-edit').click(findUserById);

             clone.find('.wbdv-username')
                 .html(user.username);
             clone.find('.wbdv-password')
                 .html(user.password);
             clone.find('.wbdv-firstName')
                 .html(user.firstName);
             clone.find('.wbdv-lastName')
                 .html(user.lastName);
             clone.find('.wbdv-role')
                 .html(user.role);

             tbody.append(clone);
         }






})();

