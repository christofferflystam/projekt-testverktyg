class CompletedTestList extends List {

  constructor(items){
    super(CompletedTest,items);
  }


  readAllFromDb(callback){
    this.db.readAll((data)=>{
      this.push.apply(this,data);
      callback();
    });
  }

  

  static get sqlQueries(){
    return {
      readAll: `
        SELECT * FROM completed_tests
      `,

    }
  }

}
