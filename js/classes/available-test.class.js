class AvailableTest extends Base {

	constructor(propertyValues){
 	super(propertyValues);

	}

	updateTestId(){
		/*Updatera currentTestId utifrån det prov som klickades på*/

		console.log('Vilket id klickade jag på? ', this.test_id);

		App.currentTestId = this.test_id;
	}
}