class App {

  constructor(){
    new LoadTeacherContent((resultView)=>{
       this.startTeacher(resultView);
    });

    //new LoadTestContent((testView)=>{
    //  this.startTest(testView);
    //});
  }

  

  startTeacher(resultView){
    this.HeaderFooter = new HeaderFooter();

    console.log(resultView);

    this.HeaderFooter.display('body');
    
    setTimeout(function(){
        this.resultView = resultView;

        this.resultView.display('.content');
    }, 5); 

  }

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
    setTimeout(function() {
    this.testView = testView;
    this.testView.display('.content');
    }, 5);
    


  }


}
