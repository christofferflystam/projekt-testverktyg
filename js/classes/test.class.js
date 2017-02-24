class Test extends Base{

  static defaultPropertyValues(){
    return {
      test_id: 0,
      test_name: 'standard',
      users_user_id: 0,
      questions: new QuestionList()
    }
  }

/*Add Array for completed tests*/
  constructor(propertyValues){
 	super(propertyValues);
 	this.questions.push({
 	  question_id: 0,
      question_text: 'standard',
      tests_test_id: 0
 	})
 	
  
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