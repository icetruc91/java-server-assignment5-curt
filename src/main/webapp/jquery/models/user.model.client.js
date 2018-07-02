function User(username, password, firstName, lastName,  phone, role, dateOfBirth) {
    this.username =username;
    this.password = password;
    this.firstName =firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.role = role;
    this.dateOfBirth = dateOfBirth;

    // Setters for the above fields.
    this.setUsername = setUsername;
    this.setPassword = setPassword;
    this.setFirstName = setFirstName;
    this.setLastName = setLastName;
    this.setPhone = setPhone;
    this.setRole = setRole;
    this.setDateOfBirth = dateOfBirth;

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
    
    function setPhone(phone) {
    	this.phone = phone;
    }

    function setRole(role) {
        this.role =role;
    }
    
    function setDateOfBirth(dateOfBirth) {
    	this.dateOfBirth = dateOfBirth;
    }

    // Getters for the above fields.
    this.getUsername = getUsername;
    this.getPassword = getPassword;
    this.getFirstName = getFirstName;
    this.getLastName = getLastName;
    this.getPhone = getPhone;
    this.getRole = getRole;
    this.getDateOfBirth = getDateOfBirth;

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
    
    function getPhone() {
    	return this.phone;
    }

    function getRole () {
        return this.role;
    }
    
    function getDateOfBirth() {
    	return this.dateOfBirth;
    }


}

