class App {

  constructor(){
    new LoadLoginContent((loginView)=>{
      this.login(loginView);
      $("#loggin").hide();
    });

    // new LoadTeacherContent((resultView)=>{
    //   this.startTeacher(resultView);
    // });

    /* new LoadTestContent((testView)=>{
       this.startTest(testView);
     });*/

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
    
  }

  startTeacher(resultView){
    this.HeaderFooter = new HeaderFooter();

    console.log(resultView);

    this.HeaderFooter.display('body');
    
    $(function() {
      resultView.display('.content');
    }); 
    
  }

  login(loginView){

    this.HeaderFooter = loginView.HeaderFooter;
    console.log('blargh', this.HeaderFooter);


    this.HeaderFooter.display('body');

    $(function(){
      loginView.display('.content');
      console.log(loginView);
    });

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
    $(function() {
      testView.display('.content');
    });

  }

}
