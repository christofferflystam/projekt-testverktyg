class User extends Base{

  static defaultPropertyValues(){
    return {
      user_id: 0,
      username: 'standard',
      first_name: 'John',
      last_name: 'Doe',
      role: 'student',
     // tests: new TestList(),
     // completed_tests: new completed_TestList()
    }
  }

/*Add Array for completed tests*/
constructor(propertyValues){
  super(propertyValues);
  
  if(!(this.tests instanceof TestList)){
      this.tests = new TestList(this.tests);
    }
  if(!(this.completed_tests instanceof completed_TestList)){
      this.completed_tests = new completed_TestList(this.completed_tests);
    }

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
      user_id: this.user_id,
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