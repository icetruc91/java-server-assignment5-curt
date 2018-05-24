// (function () {
//     $(init);
//
//     var $usernameFld;
//     var $passwordFld;
//     var $firstNameFld;
//     var $lastNameFld;
//     var $roleFld;
//
//     var $searchBtn;
//     var $addBtn;
//     var $updateBtn;
//     var $deleteBtn;
//     var $editBtn;
//
//     var $userRowTemplate;
//     var $tbody;
//     var userService = new AdminUserServiceClient();
//
//     $(main);
//
//     function init() {
//         $usernameFld=$('#usernameFld');
//         $passwordFld=$('#passwordFld');
//         $tbody = $('.wbdv-tbody');
//
//         $userRowTemplate =
//             $('.wbdv-template.wbdv-user')
//                 .clone()
//                 .removeClass('wbdv-hidden');
//
//         $addBtn = $('.wbdv-create');
//         $addBtn.click(createUser);
//         userService
//             .findAllUsers(renderUsers);
//     }
//
//
//     function main() { … }
//     function createUser() { … }
//     function findAllUsers() { … }
//     function findUserById() { … }
//     function deleteUser() { … }
//     function selectUser() { … }
//     function updateUser() { … }
//     function renderUser(user) { … }
//
//     function renderUsers(users) {
//         $tbody.empty();
//         for(var u in users) {
//             var user = users[u];
//             var $row = $userRowTemplate.clone();
//             $row.find('.wbdv-username')
//                 .html(user.username);
//             $tbody.append($row);
//         }
//     }
//
// })();
//
//
(function () {

        var tbody;
        var template;
        var username;

        $(main);

        var userAdminService;

        function main() {
            $('h1').html('User Administration');
            tbody = $('.wbdv-tbody');
            template = $('.wbdv-userRowTemplate');

            userAdminService = new UserServiceClient();
            var promise = userAdminService.findAllUsers();
            promise.then(renderUsers);
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

        userService
            .createUser(user)
            .then(findAllUsers);

    }

    function findAllUsers() {
        userService
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
    function deleteUser(userId) {
            console.log('delete click event');
            userAdminService.deleteUser(userId)
                .then(renderUsers);
    }

    function editUser(userId) {
        console.log('edit click event');
    }


    function updateUser(userId) {
            console.log('update click event');
            }

     function renderUser(userId) {
         console.log('renderUser click event');
     }






})();

