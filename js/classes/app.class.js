class App {

  constructor(){

     //<<<<------------------------------------------------------------------->>>>

    //to clarify, every time an object is to be displayed
    //using a template, it calls the template corresponding
    //to that object

    //in the below example a TestView object will be generated

    //that TestView object will in turn have a TestList object

    //the TestView class has a template (see the template folder)
    //that has the line "${this.tests.display()}", this line
    //basically says "this TestView object will display its 'tests' attribute"

    //the 'tests' attribute in this case is a TestList object
    //which in turn is a list of Test objects

    //Basically the TestView template can see it should display the
    //'tests' attribute (which is a TestList object), it then discovers it's a list of Test objects
    //Test in turn has its own template that tells the browser
    //how to display a Test object

    //I assume a TestList template is not currently needed since TestList doesn't
    //have any attributes except for the Test objects so there is nothing
    //belonging to TestList that needs to be displayed

    //if the Test objects have Question objects (which they don't at the moment)
    //they in turn are gonna need their own Question template

    //it's also possible to create a list of only Question objects without it
    //belonging to a Test object, it will still use the same Question template


    //<<<<------------------------------------------------------------------->>>>


    //calls function to load tests from database
    //with a callback to the "start" function
    //which in turn uses the TestView created from the
    //first function
    
    this.loadUsersFromDb(this.login);
    //this.loadTestsFromDb(this.start);

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

  //loads all tests then runs the callback function
  //to display it
  //in this example the callback keyword will be equal
  //to the function this.start
  loadTestsFromDb(callback){
    this.callback = callback;
    
    //creates an empty TestList
    //that will contain the Test objects
    var listFromDb = new TestList();
    
    //populates the empty TestList using
    //its readALLFromDb function
    listFromDb.readAllFromDb(()=>{
    console.log("Read from DB",listFromDb);


    //playing around with only retrieving specific test
    //before displaying it
    var onlyfirsttest = listFromDb[0];

    //creates a TestView that takes one TestList
    //as argument
    var theTestView = new TestView({
      tests: onlyfirsttest
    });   

    console.log(theTestView);

    //uses the callback function that was sent
    //as an argument in this function, and then
    //applies the newly created TestView as
    //an argument
    //remember that callback in this case is the 
    //function we supplied before which was this.start
    this.callback(theTestView);
    
    

  });
  }

  //function that takes a TestView as an argument
  //and then creates the base shell which is used
  //to display everything
  start(testView){
    
    //creates a HeaderFooter object
    this.HeaderFooter = new HeaderFooter();
    
    //sets its own TestView variable to the TestView
    //created back in loadTestsFromDb
    this.testView = testView;
    
    //logs to see that all data is there
    console.log(testView);
    
    //logs the specific name of the retrieved test
    //to make sure it got the correct test
    console.log(testView.tests.test_name);
    
    //displays the HeaderFooter object in the body
    //of the document
    this.HeaderFooter.display('body');
    
    //displays the TestView object in the content div
    //that belongs to the HeaderFooter object
    //this starts the chain of checking templates
    //to see how it is supposed to be displayed
    this.testView.display('.content');

    }

    login(loginView){

        this.HeaderFooter = new HeaderFooter();

        this.loginView = loginView;

        this.HeaderFooter.display('body');

        this.loginView.display('.content');
    }
}
