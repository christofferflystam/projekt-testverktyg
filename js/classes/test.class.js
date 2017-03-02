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

  next(){

    console.log('testarrr', document.querySelectorAll(".list-group-item active"));

    for(let i = 1; i <= document.querySelectorAll(".list-group-item").length; i++){
      $('li[id=question-sidebaritem_' + i +']').removeClass("list-group-item active").addClass("list-group-item");

    }

    for(let i = 1; i <= document.querySelectorAll(".question-item").length; i++){

      $('div[id=question-item_' + i +']').addClass("hidden");
    }

  }

  previous(){
    for(let i = 1; i <= document.querySelectorAll(".list-group-item").length; i++){
      $('li[id=question-sidebaritem_' + i +']').removeClass("list-group-item active").addClass("list-group-item");

    }

    for(let i = 1; i <= document.querySelectorAll(".question-item").length; i++){

      $('div[id=question-item_' + i +']').addClass("hidden");
    }
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