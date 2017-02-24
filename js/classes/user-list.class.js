class UserList extends List {

  constructor(items){
    super(User,items);
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
        SELECT * FROM users
      `,

    }
  }

}
