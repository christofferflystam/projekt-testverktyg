class HeaderFooter extends Base {

	defaultPropertyValues(){
		return{
			user: new User()	
		}
	}

	constructor(propertyValues={}){
		super(propertyValues);
		this.user = new User();

	}
	
}