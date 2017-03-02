class ResultView extends Base{

	defaultPropertyValues(){
		return {
			students: new StudentList()
		}
	}

	constructor(propertyValues = {}){
		super(propertyValues);
		this.logger();
	}

	logger(){
		
		for(let x in this.students){
			console.log("This is x in loop", x);
		}
	}

}

