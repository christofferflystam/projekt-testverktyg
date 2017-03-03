class App {

  constructor(){
    // new LoadTeacherContent((resultView)=>{
    //   this.startTeacher(resultView);
    // });

    new LoadTestContent((testView)=>{
      this.startTest(testView);
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

    $('li[id=question-sidebaritem_1]').removeClass("list-group-item").addClass("list-group-item active");

    for(let i = 1; i <= document.querySelectorAll(".question-item").length; i++){

      $('div[id=question-item_' + i +']').addClass("hidden");
    }

    $('div[id=question-item_1]').removeClass("hidden");

    

    });
    


  }


}
