(function () {

    let tbody;
    let template;
    userAdminService = new UserServiceClient();

    $(main);

        var userAdminService;

        function main() {
            $('h1').html('User Administration');
            tbody = $('.wbdv-tbody');
            template = $('.wbdv-userRowTemplate');


            var promise = userAdminService.findAllUsers();
            promise.then(renderUsers);

            $('.addBtn').click(createUser);

            $('.updateBtn').click(updateUser);

            $('.searchBtn').click(updateUser);

            $('.deleteBtn').click(updateUser);

            $('.editBtn').click(updateUser);

            // document.getElementById('addBtn').onclick = function () {
            //     {createUser()}
            // };



            // document.getElementById('deleteBtn').onclick = function () {
            //     {deleteUser(userId)}
            // }


        }

        function renderUsers(users) {
            tbody.empty();

            for (var i = 0; i < users.length;i++) {
                var user = users[i];
                var clone = template.clone();

                clone.attr('id', user.id);

                // Buttons.
                clone.find('.delete').click(deleteUser);
                clone.find('.edit').click(editUser);

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

        }

    function createUser() {
        console.log('createUser');

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

        fetch('http://localhost:8080/api/user', {
            method: 'post',
                body: JSON.stringify(user),
                headers: {
                    'content-type': 'application/json'
                }

        })

        userAdminService
            .createUser(user)
            .then(findAllUsers);

    }

    function findAllUsers() {
        userAdminService
            .findAllUsers()
            .then(renderUsers);
    }

    function findUserById(userId) {
        tbody.empty();

        for (var i = 0; i < users.length;i++) {
            var user = users[i];
            var clone = template.clone();
            if (user[i].userId == userId) {
                clone.attr('id', user.id);

                // Buttons.
                clone.find('.wbdv-remove').click(deleteUser);
                clone.find('.wbdv-edit').click(editUser);

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
        }
    }
    function deleteUser(event) {

            var deleteBtn = $(event.currentTarget);
            var userId = deleteBtn
                .parent()
                .parent()
                .attr('id');

            userAdminService
                .deleteUser(userId)
                .then(findAllUsers);

    }

    function editUser(event) {
        console.log('edit click event');

        var editBtn = $(event.currentTarget);
        var userId = editBtn
            .parent()
            .parent()
            .attr('id');

        var user = userAdminService
            .findUserById(userId);

        document.getElementById("usernameFld").value = user.username;
        document.getElementById("passwordFld").value = user.password;
        document.getElementById("firstNameFld").value = user.firstName;
        document.getElementById("lastNameFld").value = user.lastName;
        document.getElementById("roleFld").value = user.role;



    }


    function updateUser(userId) {
        console.log('update click event');

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



            }

     function renderUser(userId) {
         console.log('renderUser click event');
         var user = userAdminService.findUserById(userId);
         tbody.empty();

         var clone = template.clone();
             clone.attr('id', user.id);

             // Buttons.
             clone.find('.wbdv-remove').click(deleteUser);
             clone.find('.wbdv-edit').click(editUser);

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

