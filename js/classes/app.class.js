class App {

  constructor(){

    //calls function to load tests from database
    //with a callback to the "start" function
    //which in turn uses the TestView created from the
    //first function
    this.loadTestsFromDb(this.start);

  }


  //loads all tests then runs the callback function
  //to display it
  loadTestsFromDb(callback){
    this.callback = callback;
    
    //creates an empty TestList
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
    this.callback(theTestView);
    
    

  });
  }

  //function that takes a TestView as an argument
  //and then creates the base shell which is used
  //to display everything
  start(testView){
    

    this.HeaderFooter = new HeaderFooter();
    
    //sets its own TestView variable to the TestView
    //created back in loadTestsFromDb
    this.testView = testView;
    
    console.log(testView);
    
    //logs the specific name of the retrieved test
    //to make sure it got the correct test
    console.log(testView.tests.test_name);
    
    //displays the HeaderFooter object in the body
    //of the document
    this.HeaderFooter.display('body');
    
    //displays the TestView object in the content div
    //that belongs to the HeaderFooter object
    this.testView.display('.content');

    




  }


}
