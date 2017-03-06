class Option extends Base{

  static defaultPropertyValues(){
      return {
        option_id: 0,
        option_text: 'standard',
        questions_question_id: 0,
        correct_or_wrong: 'wrong'
      }
  }

  /*Add Array for completed tests*/
  constructor(propertyValues){
    super(propertyValues);
    
  }

  static get sqlQueries(){
    return {
      //example of sqlquery
      newOption: `
        INSERT options SET ?
      ` 
    }
  }
}