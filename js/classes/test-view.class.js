class TestView extends Base {

  defaultPropertyValues(){
    return {
      tests: new TestList()
    }
  }

  constructor(propertyValues = {}){
    super(propertyValues);
  }

}