class User{

constructor(username, firstName, lastName, role){
  this.username = username;
  this.firstName = firstName;
  this.lastName = lastName;
  this.role = role;
}
get username(){ //getter
  return this.username; 
}

get name(){ 
	return this.firstName  + ' ' + this.lastName;
}

get role(){
	return this.role;
}

}