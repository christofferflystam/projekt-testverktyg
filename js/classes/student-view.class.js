class StudentView extends Base {
	
	defaultPropertyValues(){
		return{
			students: new StudentList(), 
			availableTestList: new AvailableTestList()
		}
	}

	constructor(propertyValues={}){
		super(propertyValues);
		this.title = 'Choose test - Student view';
    	this.information = 'You can choose a test or see result from an old test';
    	this.compledtedTestsSpan = 'Completed Tests';
    	this.AvailableTestsSpan = 'Available Tests';
    	
	}






}