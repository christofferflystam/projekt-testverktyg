class CompletedTest extends Base{

static defaultPropertyValues(){
	return{
		completedquestions: new CompletedQuestionList(),
    NumberOfQuestions: 0,
    NumberOfCorrectAnswers: 0
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