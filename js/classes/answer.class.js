class Answer extends Base{



/*Add Array for completed tests*/
constructor(propertyValues){
  super(propertyValues);
  
}



  static get sqlQueries(){
    return {
      //example of sqlquery
      newUser: `
        INSERT answers SET ?
      ` 
    }
  }

}