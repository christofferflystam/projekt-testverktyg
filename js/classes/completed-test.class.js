class CompletedTest extends Base{

/*Add Array for completed tests*/
constructor(propertyValues){
  super(propertyValues);
  
}



  static get sqlQueries(){
    return {
      //example of sqlquery
      newCompletedTest: `
        INSERT completed_tests SET ?
      ` 
    }
  }

}