class OptionList extends List {

  constructor(items){
    super(Option,items);
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
        SELECT * FROM options
      `,

    }
  }

}
