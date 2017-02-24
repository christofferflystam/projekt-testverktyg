class QuestionView extends Base {

  defaultPropertyValues(){
    return {
      question: new QuestionList()
    }
  }

  constructor(propertyValues = {}){
    super(propertyValues);
  }

}