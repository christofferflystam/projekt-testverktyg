class LoadLoginContent extends Base {

	constructor(callback){
		super();
		this.callback=callback;
		this.generateLoginView();

	}
	
	generateLoginView(){
		var usersFromDb = new UserList();

	    usersFromDb.readAllFromDb(()=>{
	        console.log("Read users from DB: " , usersFromDb);

	        var theLoginView = new LoginView({
	            users: usersFromDb 
	        });

	        this.callback(theLoginView);

	    });
 
	}
		
}