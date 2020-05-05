class Account {
    constructor(id, dateCreated, accountEmail, accountUsername, accountPassword,dateOfBirth,accountProfile, isSuspended, isEditor){
        this.id = id;
        this.dateCreated = dateCreated;
        this.email = accountEmail;
        this.username = accountUsername;
        this.password = accountPassword;
        this.birthDate = dateOfBirth;
        this.profile = accountProfile;
        this.suspended = isSuspended;
        this.editor = isEditor;
    }
    //Initialize constructor and class object 'Account'

    //Get Method
    getId(){
        return this.id
    }

    getCreationDate(){
        return this.dateCreated;
    }

    getEmail(){
        return this.email;
    }
    getUsername(){
        return this.username;
    }
    getPassword(){
        return this.password;
    }
    getBirthdate(){
        return this.birthDate;
    }
    getProfile(){
        return this.profile;
    }
    checkSuspended(){
        return this.suspended;
    }
    checkEditor(){
        return this.editor;
    }
    //Set method
    setId(numId){
        this.id = numId;
    }
    
    setCreationDate(date){
        this.dateCreated = date
    }
    setEmail(Email){
        this.email = Email
    }
    setUsername(user){
        this.username = user;
    }
    setPassword(pass){
        this.password = pass;
    }
    setBirthday(date){
        this.birthDate = date;
    }
    setSuspended(bool){
        this.suspended = bool
    }
    setEditor(bool){
        this.editor = bool;
    }
}

module.exports = Account;