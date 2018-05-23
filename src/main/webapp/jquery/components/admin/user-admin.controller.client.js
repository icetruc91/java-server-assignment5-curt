(function () {
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

    function main() { … }
    function createUser() { … }
    function findAllUsers() { … }
    function findUserById() { … }
    function deleteUser() { … }
    function selectUser() { … }
    function updateUser() { … }
    function renderUser(user) { … }
    function renderUsers(users) { … }
    function AdminUserServiceClient() {
        this.createUser = createUser;
        this.findAllUsers = findAllUsers;
        this.findUserById = findUserById;
        this.deleteUser = deleteUser;
        this.updateUser = updateUser;
        this.url =
            'http://localhost:8080/api/user';
        var self = this;
    }
})();
