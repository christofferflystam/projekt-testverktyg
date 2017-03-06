class LoadStudentContent extends Base {

	constructor(callback){
		super();
		this.callback=callback;
		this.generateStudentView();

	}

	generateStudentView(){
		var availableTestsFromDb = new AvailableTestList();
		availableTestsFromDb.readAllFromDb(()=>{
			console.log('Read from db');
		});
		
		var studentsFromDb = new StudentList();
		studentsFromDb.readStudentsFromDb(()=>{
			
			var theStudentView = new StudentView({
				students: studentsFromDb,
				availableTestList: availableTestsFromDb
			});

		//Get index of the student i want to laod
		for(let i = 0; i < theStudentView.students.length; i++) {
			if(theStudentView.students[i].user_id == sessionStorage.user_id) {
				sessionStorage.indexOfCurrentlyLoggedInStudent = i;
			}
		}

		var allCompletedTestsFromDb = new CompletedTestList();

		var allCompletedQuestion = new CompletedQuestionList();

		var allCompletedAnswer = new AnswerList();

		allCompletedAnswer.readAllFromDb(()=>{
			console.log('Read from db');
		});

		allCompletedQuestion.readAllFromDb(() =>{

			for(let x = 0; x < allCompletedQuestion.length; x++){
				for(let y = 0; y < allCompletedAnswer.length; y++){
					if(allCompletedQuestion[x].question_id === allCompletedAnswer[y].answer_id){
						allCompletedQuestion[x].answers.push(allCompletedAnswer[y]);
					}
				}
			}
		});


		allCompletedTestsFromDb.readAllFromDb(()=>{
    		//For evry student i will loop thrue completed tests and look for matching user_id. 
   			//Then assign matches to the right list. 
   			for(let j = 0; j < allCompletedTestsFromDb.length; j++){
   				let NumOfQuestions = 0;
   				let NumOfCorrectAnswers = 0;

   				for(let z = 0; z < allCompletedQuestion.length; z++){

   					if(allCompletedTestsFromDb[j].test_id === allCompletedQuestion[z].completed_tests_test_id){

   						allCompletedTestsFromDb[j].completedquestions.push(allCompletedQuestion[z]);
   						
   						if(allCompletedQuestion[z].answers[0].correct_or_wrong === 'correct') {
   							NumOfCorrectAnswers++;
   						}
   						NumOfQuestions++;
   					}
   				}
   				
   				allCompletedTestsFromDb[j].NumberOfQuestions = NumOfQuestions;
   				
   				allCompletedTestsFromDb[j].NumberOfCorrectAnswers = NumOfCorrectAnswers;
   			}

   				//After everything has loaded in terms of tests from the DB, we start to sort out how many correct answers the students have
		      	for(let i = 0; i < theStudentView.students.length; i++){ //Go through all the students
		        	let score = []; //Start an array for each student
		        	for(let j = 0; j < allCompletedTestsFromDb.length; j++) { //iterate through all completed tests from the DB to find the users

			        //Run a check to see that the users Id is correct to that of the test completed
			        if(theStudentView.students[i].user_id === allCompletedTestsFromDb[j].users_user_id) {
				          //Push the populated completed tests unto each student
				          theStudentView.students[i].completedTests.push(allCompletedTestsFromDb[j]);

				      }
				  }
				}

				this.callback(theStudentView);

			});
	});
	}
}
