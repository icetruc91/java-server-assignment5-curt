function User(username, password, firstName, lastName, role) {
    this.username =username;
    this.password = password;
    this.firstName =firstName;
    this.lastName = lastName;
    this.role = role;

    // Setters for the above fields.
    this.setUsername = setUsername;
    this.setPassword = setPassword;
    this.setFirstName = setFirstName;
    this.setLastName = setLastName;
    this.setRole = setRole;

    // Function Setters for the above fields.
    function setUsername(username) {
        this.username = username;
    }

    function setPassword(password) {
        this.password = password;
    }

    function setFirstName(firstName) {
        this.firstName = firstName;
    }

    function setLastName(lastName) {
        this.lastName = lastName;
    }

    function setRole(role) {
        this.role =role;
    }

    // Getters for the above fields.
    this.getUsername = getUsername;
    this.getPassword = getPassword;
    this.getFirstName = getFirstName;
    this.getLastName = getLastName;
    this.getRole = getRole;

    // Function Getters for the above fields.
    function getUsername() {
        return this.username;
    }

    function getPassword() {
        return this.password;
    }

    function getFirstName() {
        return this.firstName;
    }

    function getLastName() {
        return this.lastName;
    }

    function getRole () {
        return this.role;
    }


}

