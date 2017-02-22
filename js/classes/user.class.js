class User{

/*Add Array for completed tests*/
constructor(username, password, firstName, lastName, role){
  this.username = username;
  this.password = password;
  this.firstName = firstName;
  this.lastName = lastName;
  this.role = role;
}
get username(){ //getter
  return this.username; 
}

get password(){
	return this.password;
}

get name(){ 
	return this.firstName  + ' ' + this.lastName;
}

get role(){
	return this.role;
}

  insertInDb(callback){
    this.db.newUser({
      username: this.username,
      first_name: this.firstName,
      last_name: this.lastName,
      password: this.password,
      role: this.role
    },callback);
  }

  static get sqlQueries(){
    return {
      newUser: `
        INSERT users SET ?
      ` 
    }
  }

}