class TestView extends Base {

  defaultPropertyValues(){
    return {
      tests: new TestList(),
    }
  }

  constructor(propertyValues = {}){
    super(propertyValues);
  }


//Function for going to the next question
  next(){
 
//loops through all questionsidebaritems and hides or shows them depending on the value found 
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

//Function for going to the previous question
  previous(){
    
//loops through all questionsidebaritems and hides or shows them depending on the value found 
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

//Function that writes a test to the database but only if all questions has been answered
  finish(){

 	  if($('input:radio:checked').length === document.querySelectorAll(".list-group-item").length){

//calls the writeThingsToDb function after the data has been generated
      this.generateDataFromDb((generatedData)=>{
        this.writeThingsToDb((generatedData)=>{
//redirects to the resultview
          this.redirect();
        })
        
      });
  
	}
	else{
    alert('Test incomplete, you need to fill out all the questions.');

	}

 } 

//Generates all relevant lists from the database that will be used to loop and compare values
  generateDataFromDb(writeData){
    this.completedQuestionListFromDb = new CompletedQuestionList();
    this.questionListFromDb = new QuestionList();
    this.optionListFromDb = new OptionList();
    this.completedTestListFromDb = new CompletedTestList();
    this.answerListFromDb = new AnswerList();
      
    this.questionListFromDb.readAllFromDb(()=>{
      console.log('Read from db');
    });
    this.optionListFromDb.readAllFromDb(()=>{
      console.log('Read from db');
    });
    this.answerListFromDb.readAllFromDb(()=>{
      console.log('Read from db');
    });
    this.completedTestListFromDb.readAllFromDb(()=>{
      console.log('Read from db');
    });
    this.completedQuestionListFromDb.readAllFromDb(()=>{
      console.log('Read from db');
    });

//sets a delay to make sure all lists has been made before the callback is run
    setTimeout(function() {
    writeData();
    }, 50); 

      


}

//loops through lists generated from database and then writes to the database once
//all new values has been decided
  writeThingsToDb(redirectToResult){

//calculates the next primary key for the completed_test table by checking the current length
//sets the new test name to the current displayed test name
//also checks which user is currently logged in before finally inserting the test
    this.new_test_id = this.completedTestListFromDb.length;
    this.new_test_name = $('h1[id=test-name-title]').text();
    this.new_user_id = sessionStorage.user_id;
    this.insertCompletedTestInDb();
      
//does the same thing as above but for the completed_questions table
    this.amountofcompletedquestions = this.completedQuestionListFromDb.length;
    this.amountofanswers = this.answerListFromDb.length;
    this.amountofcompletedquestions--;
    this.amountofanswers--;

//loops through all questions on the page and insert the new completed question
    for(let i = 1; i <= document.querySelectorAll(".list-group-item").length; i++){
      this.amountofcompletedquestions++;
      this.new_question_id = this.amountofcompletedquestions;
      this.new_question_text = $('div[id=question-text-' + i +']').text();
      this.insertCompletedQuestionInDb();

//assigns a variabel to the current question text, this is then used to compare with all
//question_text values in the database to retrieve the foreign key
//this foreign key number is then used to identify which group of radio buttons it should retrieve
//its answer from
      let temp_question_text = $('div[id=question-text-' + i +']').text();
          
      for(let j = 0; j < this.questionListFromDb.length; j++) {
        if(this.questionListFromDb[j]['question_text'] === temp_question_text) {
            this.id_for_radio_button = this.questionListFromDb[j].question_id;
            this.new_answer_text = $('input[name=radio-option-' + this.id_for_radio_button +']:checked').parent().find('label').text();
            
//another loop that compares the newly found answer_text with all possible option_text values
//that also shares the same newly found foreign key in case there are multiple options
//in the database with the same value, it then inserts the answer in the database
            for(let k = 0; k < this.optionListFromDb.length; k++){
              if(this.optionListFromDb[k]['option_text'] === this.new_answer_text && 
                this.optionListFromDb[k]['questions_question_id'] === this.id_for_radio_button){
                this.amountofanswers++;
                this.new_answer_id = this.amountofanswers;
                this.new_correct_or_wrong = this.optionListFromDb[k].correct_or_wrong;
                this.insertCompletedAnswerInDb();                   
                  }
                }
              }
            }
          } 

    redirectToResult();
  }

//redirects to the resultview
  redirect(){
      document.location.href = '/student';
    
  }


  insertCompletedTestInDb(){
    this.db.newCompletedTest({
      test_id: this.new_test_id,
      test_name: this.new_test_name,
      users_user_id: this.new_user_id
    });
  }

  insertCompletedQuestionInDb(){
    this.db.newCompletedQuestion({
      question_id: this.new_question_id,
      question_text: this.new_question_text,
      completed_tests_test_id: this.new_test_id
    });
  }

   insertCompletedAnswerInDb(){
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