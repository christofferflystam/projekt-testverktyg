class Test extends Base{

  static defaultPropertyValues(){
    return {
      test_id: 0,
      test_name: 'standard',
      users_user_id: 0,
      questions: new QuestionList(),
      sidebaritems: new QuestionSidebarList()
    }
  }

/*Add Array for completed tests*/
  constructor(propertyValues){
 	super(propertyValues);
 	
 	
  
	}



  static get sqlQueries(){
    return {
      //example of sqlquery
      newTest: `
        INSERT tests SET ?
      ` 
    }
  }

}