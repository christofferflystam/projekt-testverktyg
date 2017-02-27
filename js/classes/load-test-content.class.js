class loadTestContent extends Base{


  constructor(callback){
    super();
    this.callback = callback;
    this.loadTestData();
  }


  //loads all tests then runs the callback function
  //to display it
  //in this example the callback keyword will be equal
  //to the function this.start
  loadTestData(){
      
    //creates an empty TestList
    //that will contain the Test objects
    var testListFromDb = new TestList();
    var questionsListFromDb = new QuestionList();
    var optionsListFromDb = new OptionList();

    //populates the empty TestList using
    //its readALLFromDb function
    testListFromDb.readAllFromDb(()=>{
    console.log("Read from DB",testListFromDb);

    //creates a TestView that takes one TestList
    //as argument
    var theTestView = new TestView({
      tests: testListFromDb
    });   


    optionsListFromDb.readAllFromDb();

    console.log('did i get options', optionsListFromDb);

    questionsListFromDb.readAllFromDb(()=>{
      console.log("Read from DB", questionsListFromDb);

      for (let j = 0; j < questionsListFromDb.length; j++){

        for (let i = 0; i < optionsListFromDb.length; i++){
          if(questionsListFromDb[j].question_id == optionsListFromDb[i].questions_question_id){
            questionsListFromDb[j].options.push(optionsListFromDb[i]);
          }
        }
      }



      for (let i = 0; i < theTestView.tests.length; i++){

        var question_number_count = 1;

        for (let j = 0; j < questionsListFromDb.length; j++){



          if(theTestView.tests[i].test_id == questionsListFromDb[j].tests_test_id){
            console.log('Match');
            questionsListFromDb[j].question_number = question_number_count;
            theTestView.tests[i].questions.push(questionsListFromDb[j]);
            theTestView.tests[i].sidebaritems.push({

              question_number: question_number_count

            });
            question_number_count++;


          }

        
        }
        console.log(theTestView.tests[i].questions);

      }



    });

    console.log('last reading', theTestView);

    //uses the callback function that was sent
    //as an argument in this function, and then
    //applies the newly created TestView as
    //an argument
    //remember that callback in this case is the 
    //function we supplied before which was this.start
    console.log('log fourth test', theTestView.tests[0].questions);
    this.callback(theTestView);
    
    

  });
  }
}