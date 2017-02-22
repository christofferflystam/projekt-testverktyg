class AnswerView extends Base {

  defaultPropertyValues(){
    return {
      answers: new AnswerList()
    }
  }

  constructor(propertyValues = {}){
    super(propertyValues);
  }

}