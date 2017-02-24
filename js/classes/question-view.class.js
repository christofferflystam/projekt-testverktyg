class QuestionView extends Base {

  defaultPropertyValues(){
    return {
      questions: new QuestionList()
    }
  }

  constructor(propertyValues = {}){
    super(propertyValues);
  }

}