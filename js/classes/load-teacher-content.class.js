class LoadTeacherContent extends Base{

  constructor(callback){
    super();
    this.callback = callback;
    this.generateStudents();
  }

  generateStudents(){
  	var studentsFromDb = new StudentList();
  	studentsFromDb.readStudentsFromDb(()=>{
      console.log("Read from DB",studentsFromDb);
    });

    var theResultView = new ResultView({
      students: studentsFromDb
    });

    //Get completed tests from database and insert into the students lists of completed tests
    var allCompletedTestsFromDb = new CompletedTestList();

    var allCompletedQuestion = new CompletedQuestionList();

    var allCompletedAnswer = new AnswerList();

    allCompletedAnswer.readAllFromDb();

    allCompletedQuestion.readAllFromDb(() =>{

      for(let x = 0; x < allCompletedQuestion.length; x++){
        for(let y = 0; y < allCompletedAnswer.length; y++){
          if(allCompletedQuestion[x].question_id === allCompletedAnswer[y].answer_id){
            allCompletedQuestion[x].answers.push(allCompletedAnswer[y]);
          }
        }
      }});

      allCompletedTestsFromDb.readAllFromDb(()=>{
        
      
    //For evry student i will loop thrue completed tests and look for matching user_id. 
    //Then assign matches to the right list. 
    
      for(let j = 0; j < allCompletedTestsFromDb.length; j++){
        let NumOfQuestions = 0;
        let NumOfCorrectAnswers = 0;

        for(let z = 0; z < allCompletedQuestion.length; z++){
              
          if(allCompletedTestsFromDb[j].test_id === allCompletedQuestion[z].completed_tests_test_id){
              
            allCompletedTestsFromDb[j].completedquestions.push(allCompletedQuestion[z]);
            console.log(allCompletedQuestion[z].answers[0].correct_or_wrong);
            if(allCompletedQuestion[z].answers[0].correct_or_wrong === 'correct') {
              NumOfCorrectAnswers++;
            }
            NumOfQuestions++;
          }
        }
        console.log(allCompletedTestsFromDb[j].test_name, 'Num Of Q:s ', NumOfQuestions);
        allCompletedTestsFromDb[j].NumberOfQuestions = NumOfQuestions;
        console.log(allCompletedTestsFromDb[j].test_name, 'Num Of Corrects ', NumOfCorrectAnswers);
        allCompletedTestsFromDb[j].NumberOfCorrectAnswers = NumOfCorrectAnswers;
      }
      //After everything has loaded in terms of tests from the DB, we start to sort out how many correct answers the students have
      for(let i = 0; i < theResultView.students.length; i++){ //Go through all the students
        let score = []; //Start an array for each student
        for(let j = 0; j < allCompletedTestsFromDb.length; j++) { //iterate through all completed tests from the DB to find the users
        
        //Run a check to see that the users Id is correct to that of the test completed
        if(theResultView.students[i].user_id === allCompletedTestsFromDb[j].users_user_id) {
          
          //Push the populated completed tests unto each student
          theResultView.students[i].completedTests.push(allCompletedTestsFromDb[j]);
          
          
          
            }
          }
        }
    });
    console.log('Resultatvy: ', theResultView);

    // All testdata is generated, so run the 
    // callback and send theTestView to it
    
    this.callback(theResultView);    
  }
}

