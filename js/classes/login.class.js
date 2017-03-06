class Login extends Base{



/*Add Array for completed tests*/
  constructor(propertyValues){
    super(propertyValues);
    this.testing = new User();
    console.log(this.testing);
    
  }

  static get sqlQueries(){
    return {
      //example of sqlquery
      newUser: `
        INSERT users SET ?
      ` 
    }
  }
}