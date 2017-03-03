class CompletedQuestion extends Base{


static defaultPropertyValues(){
	return{
		answers: new AnswerList()
	}
}

/*Add Array for completed tests*/
constructor(propertyValues){
  super(propertyValues);
  
}



  static get sqlQueries(){
    return {
      //example of sqlquery
      newCompletedQuestion: `
        INSERT completed_questions SET ?
      ` 
    }
  }

}