class Student extends Base{

  defaultPropertyValues(){
      return {
        completedTests: new CompletedTestList()
      }
    }
    
  /*Add Array for completed tests*/
  constructor(propertyValues){
    super(propertyValues);
    this.completedTests = new CompletedTestList();
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