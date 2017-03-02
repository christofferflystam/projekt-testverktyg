class App {

  

  constructor(){

    new Router({
      "/": function(){
        new LoadLoginContent((loginView)=>{
          App.login(loginView);
        });
      },
      "/teacher": function(){
        new LoadTeacherContent((resultView)=>{
          App.startTeacher(resultView);
        });
      },
      "/student": function(){
        new LoadStudentContent((studentView)=>{
          App.startStudentView(studentView);
        });
      },
      "/test": function(){
        new LoadTestContent((testView)=>{
          App.startTest(testView);
        });
      }
    });

    // new LoadLoginContent((loginView)=>{
    //   this.login(loginView);
    // });

    // new LoadTeacherContent((resultView)=>{
    //   this.startTeacher(resultView);
    // });

    // new LoadTestContent((testView)=>{
    //   this.startTest(testView);
    // });

    // new LoadStudentContent((studentView)=>{
    //   this.startStudentView(studentView);
    // });

  }

  static startStudentView(studentView){
    $('body').empty();
    this.HeaderFooter = new HeaderFooter();

    console.log(studentView);

    this.HeaderFooter.display('body');
    
    $(function() {
      studentView.display('.content');
    });   
    
  }

  static startTeacher(resultView){
    $('body').empty();
    this.HeaderFooter = new HeaderFooter();

    console.log(resultView);

    this.HeaderFooter.display('body');
    
    $(function() {
      resultView.display('.content');
    }); 
    
  }

  static login(loginView){

    this.HeaderFooter = new HeaderFooter();

    this.HeaderFooter.display('body');

    $(function(){
      loginView.display('.content');
    });

  }


  static startTest(testView){
    $('body').empty();
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
