(function () {
    $(init);

    var $usernameFld;
    var $passwordFld;
    var $firstNameFld;
    var $lastNameFld;
    var $roleFld;

    var $searchBtn;
    var $addBtn;
    var $updateBtn;
    var $deleteBtn;
    var $editBtn;

    var $userRowTemplate;
    var $tbody;
    var userService = new AdminUserServiceClient();

    $(main);

    function init() {
        $usernameFld=$('#usernameFld');
        $passwordFld=$('#passwordFld');
        $tbody = $('.wbdv-tbody');

        $userRowTemplate =
            $('.wbdv-template.wbdv-user')
                .clone()
                .removeClass('wbdv-hidden');

        $addBtn = $('.wbdv-create');
        $addBtn.click(createUser);
        userService
            .findAllUsers(renderUsers);
    }


    function main() { … }
    function createUser() { … }
    function findAllUsers() { … }
    function findUserById() { … }
    function deleteUser() { … }
    function selectUser() { … }
    function updateUser() { … }
    function renderUser(user) { … }

    function renderUsers(users) {
        $tbody.empty();
        for(var u in users) {
            var user = users[u];
            var $row = $userRowTemplate.clone();
            $row.find('.wbdv-username')
                .html(user.username);
            $tbody.append($row);
        }
    }

})();
