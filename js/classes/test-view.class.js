class TestView extends Base {

  defaultPropertyValues(){
    return {
      tests: new TestList(),
    }
  }

  constructor(propertyValues = {}){
    super(propertyValues);
  }

   next(){
 
    var current_num = parseInt(document.querySelectorAll(".list-group-item.active")[0].innerText.replace( /^\D+/g, ''));
    current_num++;

    for(let i = 1; i <= document.querySelectorAll(".list-group-item").length; i++){
      $('li[id=question-sidebaritem_' + i +']').removeClass("list-group-item active").addClass("list-group-item");

    }

    for(let i = 1; i <= document.querySelectorAll(".question-item").length; i++){

      $('div[id=question-item_' + i +']').addClass("hidden");
    }

    if(current_num > document.querySelectorAll(".list-group-item").length){
    	current_num--;
    }

    $('li[id=question-sidebaritem_' + current_num +']').removeClass("list-group-item").addClass("list-group-item active");

  	$('div[id=question-item_' + current_num +']').removeClass("hidden");

  }

  previous(){
    
    let current_num = parseInt(document.querySelectorAll(".list-group-item.active")[0].innerText.replace( /^\D+/g, ''));
    current_num--;

    for(let i = 1; i <= document.querySelectorAll(".list-group-item").length; i++){
      $('li[id=question-sidebaritem_' + i +']').removeClass("list-group-item active").addClass("list-group-item");

    }

    for(let i = 1; i <= document.querySelectorAll(".question-item").length; i++){

      $('div[id=question-item_' + i +']').addClass("hidden");
    }

    if(current_num === 0){
    	current_num++;
    }

    $('li[id=question-sidebaritem_' + current_num +']').removeClass("list-group-item").addClass("list-group-item active");

  	$('div[id=question-item_' + current_num +']').removeClass("hidden");
  }

 finish(){

 	if($('input:radio:checked').length === document.querySelectorAll(".list-group-item").length){

 	 	let completedQuestionListFromDb = new CompletedQuestionList();
 	 	let questionListFromDb = new QuestionList();
 	 	let optionListFromDb = new OptionList();
 	   	let completedTestListFromDb = new CompletedTestList();
 	   	let answerListFromDb = new AnswerList();
 	   	
 	   	questionListFromDb.readAllFromDb(()=>{
 	   		console.log('Read from db');
 	   	});
 	   	optionListFromDb.readAllFromDb(()=>{
 	   		console.log('Read from db');
 	   	});
 	   	answerListFromDb.readAllFromDb(()=>{
 	   		console.log('Read from db');
 	   	});
 	   	completedTestListFromDb.readAllFromDb(()=>{
 	   		console.log('Read from db');
 	   	});
 	   	completedQuestionListFromDb.readAllFromDb(()=>{
 	   		console.log('Read from db');
 	   	});

 	   	new LoadTestContent((testView)=>{

 	   	this.new_test_id = completedTestListFromDb.length;
 	    this.new_test_name = $('h1[id=test-name-title]').text();
 	    this.new_user_id = sessionStorage.user_id;
      console.log(this.new_user_id);
 	    this.insertCompletedTestInDb();
 		console.log('this is a completed test', this.new_test_id, this.new_test_name, this.new_user_id);
 	   	
 	   	this.amountofcompletedquestions = completedQuestionListFromDb.length;
 	   	this.amountofanswers = answerListFromDb.length;
 	   	this.amountofcompletedquestions--;
 	   	this.amountofanswers--;

 	    for(let i = 1; i <= document.querySelectorAll(".list-group-item").length; i++){
 	  		this.amountofcompletedquestions++;
 	  		this.new_question_id = this.amountofcompletedquestions;
 	  		this.new_question_text = $('div[id=question-text-' + i +']').text();
 	  		console.log('this is a completed question', this.new_question_id, this.new_question_text, this.new_test_id);

 	  		this.insertCompletedQuestionInDb();
 	  		let temp_question_text = $('div[id=question-text-' + i +']').text();
 	  	  	
 	  	  	for(let j = 0; j < questionListFromDb.length; j++) {
 	        if(questionListFromDb[j]['question_text'] === temp_question_text) {
 	            this.id_for_radio_button = questionListFromDb[j].question_id;
 	            console.log('this is the id number for specific group of radio buttons', this.id_for_radio_button);
 	            this.new_answer_text = $('input[name=radio-option-' + this.id_for_radio_button +']:checked').parent().find('label').text();
 	            for(let k = 0; k < optionListFromDb.length; k++){
 	            	if(optionListFromDb[k]['option_text'] === this.new_answer_text && 
 	            		optionListFromDb[k]['questions_question_id'] === this.id_for_radio_button){
 	            		this.amountofanswers++;
 	            		this.new_answer_id = this.amountofanswers;
 	            		this.new_correct_or_wrong = optionListFromDb[k].correct_or_wrong;

 	            		this.insertCompletedAnswerInDb();
 	            		console.log('completed answer', this.new_answer_id, this.new_answer_text, this.new_question_id, this.new_correct_or_wrong);
 	            			
 	            			}
 	            		}
 	        		}
 	    		}
 	    	}	
 	 
 		});
	}
	else{
		console.log('test not complete');
	}

 } 

  insertCompletedTestInDb(){
  	console.log('logging test', this.new_test_id, this.new_test_name, this.new_user_id);
    this.db.newCompletedTest({
      test_id: this.new_test_id,
      test_name: this.new_test_name,
      users_user_id: this.new_user_id
    });
  }

   insertCompletedQuestionInDb(){
   	console.log('logging question', this.new_question_id, this.new_question_text, this.new_test_id);
    this.db.newCompletedQuestion({
      question_id: this.new_question_id,
      question_text: this.new_question_text,
      completed_tests_test_id: this.new_test_id
    });
  }

   insertCompletedAnswerInDb(){
   	console.log('logging answers', this.new_answer_id, this.new_answer_text, this.new_question_id, this.new_correct_or_wrong);
    this.db.newCompletedAnswer({
      answer_id: this.new_answer_id,
      answer_text: this.new_answer_text,
      completed_questions_question_id: this.new_question_id,
      correct_or_wrong: this.new_correct_or_wrong
    });
  }  

  static get sqlQueries(){
    return {
      newCompletedTest: `
        INSERT completed_tests SET ?
      `,
      newCompletedQuestion: `
        INSERT completed_questions SET ?
      `,
      newCompletedAnswer: `
        INSERT answers SET ?
      `
    }
  }

}