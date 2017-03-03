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
        
        for(let z = 0; z < allCompletedQuestion.length; z++){
              
          if(allCompletedTestsFromDb[j].test_id === allCompletedQuestion[z].completed_tests_test_id){
              
            allCompletedTestsFromDb[j].completedquestions.push(allCompletedQuestion[z]);

          }
        }
      }
      //After everything has loaded in terms of tests from the DB, we start to sort out how many correct answers the students have
      for(let i = 0; i < theResultView.students.length; i++){ //Go through all the students
        let score = []; //Start an array for each student
        for(let j = 0; j < allCompletedTestsFromDb.length; j++) { //iterate through all completed tests from the DB to find the users
        
        //Run a check to see that the users Id is correct to that of the test completed
        if(theResultView.students[i].user_id === allCompletedTestsFromDb[j].users_user_id) {
          
          //Push the populated completed tests unto each student
          theResultView.students[i].completedTests.push(allCompletedTestsFromDb[j]);
          
          
          //Assume that the respective student has done 1 test and assign respective student to be the one to be inspected
          let student = theResultView.students[i].completedTests[0]; 


          //This one is a bit trickier. Normally, we'd compare against length of completedquestions, but since this value is offset 
          //i prefer to run a comparison against the amount of keys the student object has, which means that we run against amount of attributes.
          //With the current setup of the DB, we find that this is actually 4 - Which under current structure does not change, thus, we keep to that, currently.
          //Could change, but not nessecary.
          for(let x = 0; x < Object.keys(student).length - 1; x++){

             //Push the value of correct or wrong unto the array
             score.push(student.completedquestions[x].answers[0].correct_or_wrong);
              //To skip repeating of assignment, we make a simple check against if we are at the "breaking" point, and assign stuff
              if(x === Object.keys(student).length - 2){
                
                //Dynamically assign the score array to students of theResultView, making it so that we do not need to declare standard prop values
                //or declare in the constructor that it has a score attribute, we just assign it straight up, allowing for much ease.
                theResultView.students[i].score = score;

                //Assign variables for counting what their current score is, and what the max is.
                let current = 0;
                let max = theResultView.students[i].score.length;
                
                //Iterate through the score array
                for(let total of theResultView.students[i].score){
                    if(total === "correct"){ //if it's correct, current score increases by 1
                      current += 1;
                    }
                }
                theResultView.students[i].score = []; //Empty the array
                theResultView.students[i].score.push(current); //Push the current score
                theResultView.students[i].score.push(max); //Push the max score
                
              }}
            }
          }
        }
    });


    // All testdata is generated, so run the 
    // callback and send theTestView to it
    
    this.callback(theResultView);    
  }
}