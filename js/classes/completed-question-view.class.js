class CompletedQuestionView extends Base {

  defaultPropertyValues(){
    return {
      completedQuestion: new CompletedQuestionList()
    }
  }

  constructor(propertyValues = {}){
    super(propertyValues);
  }

}