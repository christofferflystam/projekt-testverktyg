class UserView extends Base {

  defaultPropertyValues(){
    return {
      users: new UserList()
    }
  }

  constructor(propertyValues = {}){
    super(propertyValues);
  }

}