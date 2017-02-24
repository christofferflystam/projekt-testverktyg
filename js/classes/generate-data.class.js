class GenerateData extends Base{

  constructor(callback){
    super();
    this.callback = callback;
    this.generateStudents();
  }

  generateStudents(){
  	var studentsFromDb = new StudentList();
  	studentsFromDb.readStudentsFromDb(()=>{
    console.log("Read from DB",studentsFromDb);

    var theResultView = new ResultView({
        students: studentsFromDb
    });

    // All testdata is generated, so run the 
    // callback and send theTestView to it
    this.callback(theResultView);    

  });

}
}