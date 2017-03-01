class App {

  constructor(){
    new LoadTeacherContent((resultView)=>{
      this.startTeacher(resultView);
    });

    // new LoadTestContent((testView)=>{
    //   this.startTest(testView);
    // });
       
    // new LoadStudentContent((studentView)=>{
    //   this.startStudentView(studentView);
    // });

  }

  startStudentView(studentView){
    this.HeaderFooter = new HeaderFooter();

    console.log(studentView);

    this.HeaderFooter.display('body');
    
    $(function() {
    studentView.display('.content');
    }); 
    this.loadUsersFromDb(this.login);
    
  }

  startTeacher(resultView){
    this.HeaderFooter = new HeaderFooter();

    console.log(resultView);
 loadUsersFromDb(callback){
    this.callback = callback;

    this.HeaderFooter.display('body');
    
    $(function() {
    resultView.display('.content');
    }); 
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

  }
        this.HeaderFooter = new HeaderFooter();

  startTest(testView){
    
    //creates a HeaderFooter object
    this.HeaderFooter = new HeaderFooter();
    
    //sets its own TestView variable to the TestView
    //created back in loadTestsFromDb
    //this.testView = testView;
    
    //displays the HeaderFooter object in the body
    //of the document
    this.HeaderFooter.display('body');
    
    //displays the TestView object in the content div
    //that belongs to the HeaderFooter object
    //this starts the chain of checking templates
    //to see how it is supposed to be displayed
    $(function() {
    this.testView = testView;
    this.testView.display('.content');
    });
    
        this.loginView = loginView;

        this.HeaderFooter.display('body');


  }


        this.loginView.display('.content');
    }
}
