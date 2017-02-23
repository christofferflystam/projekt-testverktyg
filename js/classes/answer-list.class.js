class AnswerList extends List {

  constructor(items){
    super(Answer,items);
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
        SELECT * FROM answers
      `,

    }
  }

}
