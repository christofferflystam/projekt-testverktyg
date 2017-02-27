class App {

  constructor(){
    new LoadTeacherContent((resultView)=>{
      this.startTeacher(resultView);
    });
  }

  startTeacher(resultView){
    this.HeaderFooter = new HeaderFooter();
     //<<<<------------------------------------------------------------------->>>>

    console.log(resultView);
    //to clarify, every time an object is to be displayed
    //using a template, it calls the template corresponding
    //to that object

    this.HeaderFooter.display('body');
    
    //Without this all content wont load on time
    setTimeout(function() {
    resultView.display('.content');
    }, 50);
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
    new LoadTestContent((testView)=>{
      this.startTest(testView);
    })

  }





  //function that takes a TestView as an argument
  //and then creates the base shell which is used
  //to display everything
  startTest(testView){
    
    //creates a HeaderFooter object
    this.HeaderFooter = new HeaderFooter();
    
    //sets its own TestView variable to the TestView
    //created back in loadTestsFromDb
    //this.testView = testView;
    
    //logs to see that all data is there
    console.log('newest', testView);
    console.log('checking length', testView.tests[0])

    console.log('log first test', testView.tests[0].questions);
    console.log('log second test', testView.tests[1].questions);
    console.log('log third test', testView.tests[2].questions);

    console.log('log everything again', testView)
    //displays the HeaderFooter object in the body
    //of the document
    this.HeaderFooter.display('body');
    
    //displays the TestView object in the content div
    //that belongs to the HeaderFooter object
    //this starts the chain of checking templates
    //to see how it is supposed to be displayed
    setTimeout(function() {
    this.testView = testView;
    this.testView.display('.content');
    }, 5);
    


  }


}
