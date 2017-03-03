class ResultView extends Base{

	defaultPropertyValues(){
		return {
			students: new StudentList()
		}
	}

	constructor(propertyValues = {}){
		super(propertyValues);
		
	}


}

