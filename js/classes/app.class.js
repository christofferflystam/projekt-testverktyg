class App {

  constructor(){

    
    var a = new HeaderFooter();
    a.display('body');

    /*
    var teacherview = new TeacherView();
    teacherview.display('.content');
    */

    /*
    var login = new Login();
    login.display('.content');
    */

    /*
    var b = new Test();
    b.display('.content');
    */

    /*
    var result = new ResultPage();
    result.display('.content');
    */

    var testUserList = new UserList();
      testUserList.readAllFromDb(()=>{
        console.log("Read from DB",testUserList);
      });
    
    var testTestList = new TestList();
      testTestList.readAllFromDb(()=>{
        console.log("Read from DB",testTestList);
      });
    var testQuestionList = new QuestionList();
      testQuestionList.readAllFromDb(()=>{
        console.log("Read from DB",testQuestionList);
      });
    var testOptionList = new OptionList();
      testOptionList.readAllFromDb(()=>{
        console.log("Read from DB",testOptionList);
      });
    
    var testCompletedTestList = new CompletedTestList();
      testCompletedTestList.readAllFromDb(()=>{
        console.log("Read from DB",testCompletedTestList);
      });
    var testCompletedQuestionList = new CompletedQuestionList();
      testCompletedQuestionList.readAllFromDb(()=>{
        console.log("Read from DB",testCompletedQuestionList);
      });
    var testAnswerList = new AnswerList();
      testAnswerList.readAllFromDb(()=>{
        console.log("Read from DB",testAnswerList);
      });
    
    
    
    






 
    
  }
}
