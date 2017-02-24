class GenerateData extends Base{

  constructor(callback){
    super();
    this.callback = callback;
    this.generateStudents();
  }

  generateStudents(){
  	var studentsFromDb = new StudentList();
  	studentsFromDb.readStudentsFromDb(()=>{
      console.log("Read from DB",studentsFromDb);

    var theResultView = new ResultView({
      students: studentsFromDb
    });

    console.log(theResultView);

    //Get completed tests from database and insert into the students lists of completed tests
    var allCompletedTestsFromDb = new CompletedTestList();
    allCompletedTestsFromDb.readAllFromDb(()=>{
    //For evry student i will loop thrue completed tests and look for matching user_id. 
    //Then assign matches to the right list. 
    for (let i = 0; i < theResultView.students.length; i++) {
      console.log('3');
      
      for(let j = 0; j < allCompletedTestsFromDb.length; j++) {
        console.log('9');

        //push matching completed test to students completed test list
        if(theResultView.students[i].user_id === allCompletedTestsFromDb[j].users_user_id) {
          console.log('Match');
          console.log(theResultView.students[i].completedTests);
          theResultView.students[i].completedTests.push(allCompletedTestsFromDb[j]);
        }

      }
    }

    console.log(studentsFromDb);

  });





    // All testdata is generated, so run the 
    // callback and send theTestView to it
    console.log(theResultView);
    this.callback(theResultView);    

  });



  }
}