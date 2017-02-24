class Student extends Base{



/*Add Array for completed tests*/
constructor(propertyValues){
  super(propertyValues);
  var completedTests = new CompletedTestList();
  
}



  static get sqlQueries(){
    return {
      //example of sqlquery
      newTest: `
        INSERT tests SET ?
      ` 
    }
  }

}