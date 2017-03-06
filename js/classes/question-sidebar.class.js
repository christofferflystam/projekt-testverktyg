class QuestionSidebar extends Base {

  defaultPropertyValues(){
    return {
    	question_number: 0
    }
  }

  constructor(propertyValues = {}){
    super(propertyValues);
  }

//checks which element that was clicked and changes the classes assigned to that element
//it then loops though all other elements of a specific type of id
  changeActive(){

  	for(let i = 1; i <= document.querySelectorAll(".list-group-item").length; i++){
  		$('li[id=question-sidebaritem_' + i +']').removeClass("list-group-item active").addClass("list-group-item");

  	}

  	for(let i = 1; i <= document.querySelectorAll(".question-item").length; i++){

  		$('div[id=question-item_' + i +']').addClass("hidden");
  	}

  	$('li[id=question-sidebaritem_' + this.question_number +']').removeClass("list-group-item").addClass("list-group-item active");

  	$('div[id=question-item_' + this.question_number +']').removeClass("hidden");

  }

}