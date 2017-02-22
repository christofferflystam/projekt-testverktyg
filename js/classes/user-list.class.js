class UserList extends List {

  constructor(items){
    super(User,items);
    console.log('skapad');
  }

  writeToDb(callback){
    var co = 0, listLength = this.length;
    function callbackEach(res){
      co++;
      if(co == listLength){ callback(); }
    }
    for(let user of this){
      user.insertInDb(callbackEach);
    }
  }

  readAllFromDb(callback){
    this.db.readAll((data)=>{
      this.push.apply(this,data);
      console.log('step 1');
      callback();
    });
  }

  readAllFromDBWithTests(callback){
    this.db.readAllWithTests((data)=>{
      console.log('hej');
      console.log(data);

      // collect all users in a new array
      var usersById = {};
      for(let item of data){

        // create user and store by username
        usersByUsername[item.username] = usersByUsername[item.username] || {
          user_id: item.user_id,
          username: item.username,
          password: item.password,
          first_name: item.first_name,
          last_name: item.last_name,
          role: item.role,
         // tests: [],
         // completed_tests: []
        }
        // add the current test
     /*   if(item.test_id){
          usersById[item.user_id].tests.push({
            test_id: item.test_id,
            test_name: item.test_name,
            user_id: item.users_user_id
          });
        }*/

      }

     /* this.db.readAllWithCompletedTests((data)=>{
      console.log(data);
        if(item.test_id){
          usersById[item.user_id].completed_tests.push({
            test_id: item.test_id,
            test_name: item.test_name,
            user_id: item.users_user_id
          });
      }*/

      // Loop through usersById
      // and push the user to this list
      for(let user_id in usersById){
        this.push(usersById[user_id]);
      }
      console.log('step 2');
      callback();
    });
  }

  static get sqlQueries(){
    return {
      readAll: `
        SELECT * FROM users
      `,
      readAllWithTests: `
        SELECT * FROM users, tests where user_id = users_user_id
      `,
      readAllWithCompletedTests: `
        SELECT * FROM users, completed_tests where user_id = users_user_id
      `
    }
  }

}
