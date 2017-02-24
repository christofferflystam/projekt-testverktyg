class OptionView extends Base {

  defaultPropertyValues(){
    return {
      option: new OptionList()
    }
  }

  constructor(propertyValues = {}){
    super(propertyValues);
  }

}