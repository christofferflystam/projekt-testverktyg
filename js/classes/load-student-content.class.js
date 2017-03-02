class LoadStudentContent extends Base {

	constructor(callback){
		super();
		this.callback=callback;
		this.generateStudentView();

	}
	generateStudentView(){
		var availableTestsFromDb = new AvailableTestList();
		availableTestsFromDb.readAllFromDb(()=>{

		});
		console.log('ATDB', availableTestsFromDb);
		var studentsFromDb = new StudentList();
		studentsFromDb.readStudentsFromDb(()=>{
			console.log("Read from DB",studentsFromDb);

			var theStudentView = new StudentView({
				students: studentsFromDb,
				availableTestList: availableTestsFromDb
			});

		//Get index of the student i want to laod
		console.log('Christoffer',theStudentView.students);
		for(let i = 0; i < theStudentView.students.length; i++) {
			if(theStudentView.students[i].user_id == sessionStorage.user_id) {
				console.log('match!', theStudentView.students[i].user_id);
				sessionStorage.indexOfCurrentlyLoggedInStudent = i;
			}
		}

		var allCompletedTestsFromDb = new CompletedTestList();
		allCompletedTestsFromDb.readAllFromDb(()=>{
    		//For evry student i will loop thrue completed tests and look for matching user_id. 
   			//Then assign matches to the right list. 
    		for (let i = 0; i < theStudentView.students.length; i++) {
    			console.log('3');

    			for(let j = 0; j < allCompletedTestsFromDb.length; j++) {
    				console.log('9');

        			//push matching completed test to students completed test list
        			if(theStudentView.students[i].user_id === allCompletedTestsFromDb[j].users_user_id) {
        			console.log('Bujamin');
        			console.log(theStudentView.students[i].completedTests);
        			theStudentView.students[i].completedTests.push(allCompletedTestsFromDb[j]);
        }

    }
}

  this.callback(theStudentView);
	});
	

	});
}
}
