class CompletedQuestions extends Base{



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