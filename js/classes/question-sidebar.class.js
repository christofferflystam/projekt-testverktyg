class QuestionSidebar extends Base {

  defaultPropertyValues(){
    return {
    	question_number: 0
    }
  }

  constructor(propertyValues = {}){
    super(propertyValues);
  }


  changeActive(){
	  	this.clickedQuestion = (document.getElementById('question_'+this.question_number));
	  	console.log('which question did I click?', this.clickedQuestion);
	  	$(function() {
    		console.log('what is this1', this.clickedQuestion);
    	}); 
    	console.log('what is this', this);
	  	this.clickedQuestion.removeClass('list-group-item');
	
  }

}