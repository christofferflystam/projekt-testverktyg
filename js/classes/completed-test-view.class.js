class CompletedTestView extends Base {

  defaultPropertyValues(){
    return {
      completedTest: new CompletedTestList()
    }
  }

  constructor(propertyValues = {}){
    super(propertyValues);
  }

}