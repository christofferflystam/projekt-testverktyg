class CompletedTest extends Base{

static defaultPropertyValues(){
	return{
		completedquestions: new CompletedQuestionList()
	}
}
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