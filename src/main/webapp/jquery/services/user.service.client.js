function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.deleteUser = deleteUser;
    this.findUserById = findUserById;
    this.updateUser = updateUser;
    this.login = login;
    this.findUserByUsername = findUserByUsername;
    this.logout = logout;
    this.register = register;
    this.updateProfile = updateProfile;
    this.url = '/api/user';
    this.registerUrl = '/api/register';
    this.loginUrl = '/api/login';
    this.logoutUrl = '/api/logout';
    this.updateProfileUrl =  "/api/profile";
    var self = this;

    // Login service.
    function login(username, password) {
        return fetch(self.loginUrl, {
            method: 'post',
            body: JSON.stringify({username: username, password: password}),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();

        });
    }

    // Implemented logout.
    function logout() {
        return fetch(self.logoutUrl);
    }

    function updateUser(userId, user) {
        return fetch(self.url + '/' + userId, {
            method: 'put',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) {
                if (response.bodyUsed) {
                    return response.json();
                } else {
                    return null;
                }
            });
    }

    function updateProfile(user, userId) {
        return fetch(self.updateProfileUrl + "/" + userId, {
            method: 'put',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) {
                if (response.bodyUsed) {
                    return response.json();
                } else {
                    return null;
                }
            });
    }

    function findUserById(userId) {
        return fetch(self.url + '/id/' + userId)
            .then(function (response) {
                return response.json();
            });
    }

    // Finds user by username.
    function findUserByUsername(username) {
        return fetch(self.url + '/username/' + username)
            .then(function (response) {
                console.log(response);
                // if (response.bodyUsed)
                    return response.json();
                // else
                //     return null;
            });
    }

    function deleteUser(userId) {
        return fetch(self.url + '/' + userId, {
            method: 'delete'
        })
    }

    function findAllUsers() {
        return fetch(self.url)
            .then(function (response) {
                return response.json();
            });
    }

    function createUser(user) {

        return fetch(self.url, {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    // Registers user and posts to the server when a new patron registers.
    function register(user) {
        return fetch(self.registerUrl, {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    }
}