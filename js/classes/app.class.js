class App {

  constructor(){

    this.loadUsersFromDb(this.login);
    
  }


 loadUsersFromDb(callback){
    this.callback = callback;

    var usersFromDb = new UserList();

    usersFromDb.readAllFromDb(()=>{
        console.log("Read users from DB: " , usersFromDb);

        var theLoginView = new LoginView({
            users: usersFromDb 
        });

        this.callback(theLoginView);
    });
 }

    login(loginView){

        this.HeaderFooter = new HeaderFooter();

        this.loginView = loginView;

        this.HeaderFooter.display('body');

        this.loginView.display('.content');
    }
}
