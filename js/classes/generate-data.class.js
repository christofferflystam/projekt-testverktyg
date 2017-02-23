class GenerateData extends Base{

  constructor(callback){
    super();
    this.callback = callback;
    this.generateTests();
  }

  generateTests(){
  	var listFromDb = new TestList();
  	listFromDb.readAllFromDb(()=>{
    console.log("Read from DB",listFromDb);

    var theTestView = new TestView({
        tests: listFromDb
    });

    // All testdata is generated, so run the 
    // callback and send theTestView to it
    this.callback(theTestView);    

  });

}
}