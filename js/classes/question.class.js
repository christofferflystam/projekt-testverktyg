class Question extends Base{

static defaultPropertyValues(){
    return {
      question_id: 0,
      question_text: 'standard',
      tests_test_id: 0,
      options: new OptionList()
    }
  }


/*Add Array for completed tests*/
constructor(propertyValues){
  super(propertyValues);
  this.options = new OptionList();
}



  static get sqlQueries(){
    return {
      //example of sqlquery
      newQuestion: `
        INSERT questions SET ?
      ` 
    }
  }

}