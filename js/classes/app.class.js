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

    // this.HeaderFooter = new HeaderFooter();

    // this.HeaderFooter.display('body');

    $(function(){
      loginView.display('body');
    });

  }


  static startTest(testView){
    $('body').empty();

    this.HeaderFooter = new HeaderFooter();

    this.HeaderFooter.display('body');
    
    $(function() {
      testView.display('.content');
      $('#question-sidebaritem_1').addClass('active');
      $('#question-item_1').removeClass('hidden');
    });

  }

}
