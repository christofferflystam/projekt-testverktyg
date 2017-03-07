class LoadTestContent extends Base{


  constructor(callback){
    super();
    this.callback = callback;
    

      this.loadTestData((generatedData)=>{
          this.pushDataToLists();
      });

  }


  //loads all tests then runs the callback function
  //to display it
  //in this example the callback keyword will be equal
  //to the function this.start
  loadTestData(pushData){
      
    //creates an empty TestList
    //that will contain the Test objects
    this.testListFromDb = new TestList();
    this.questionsListFromDb = new QuestionList();
    this.optionsListFromDb = new OptionList();

    //populates the empty TestList using
    //its readALLFromDb function
    this.testListFromDb.readAllFromDb(()=>{    

    //creates a TestView that takes one TestList
    //as argument
    this.theTestView = new TestView({
      tests: this.testListFromDb
    });   

//creates lists from database to loop through
    this.optionsListFromDb.readAllFromDb(()=>{
      console.log('Read from db');
    });

    this.questionsListFromDb.readAllFromDb(()=>{
      console.log('Read from db');
    });


    //uses the callback function that was sent
    //as an argument in this function, and then
    //applies the newly created TestView as
    //an argument

    setTimeout(function() {
    pushData();
    }, 50); 
    
   });
  }


  pushDataToLists(){
      for (let j = 0; j < this.questionsListFromDb.length; j++){

        for (let i = 0; i < this.optionsListFromDb.length; i++){
          if(this.questionsListFromDb[j].question_id == this.optionsListFromDb[i].questions_question_id){
            this.questionsListFromDb[j].options.push(this.optionsListFromDb[i]);
          }
        }
      }



      for (let i = 0; i < this.theTestView.tests.length; i++){

        var question_number_count = 1;

        for (let j = 0; j < this.questionsListFromDb.length; j++){



          if(this.theTestView.tests[i].test_id == this.questionsListFromDb[j].tests_test_id){

            this.questionsListFromDb[j].question_number = question_number_count;
            this.theTestView.tests[i].questions.push(this.questionsListFromDb[j]);
            this.theTestView.tests[i].sidebaritems.push({

              question_number: question_number_count

            });
            question_number_count++;
          }

        }
        console.log(this.theTestView.tests[i].questions);

      }
      this.callback(this.theTestView);
  }

}