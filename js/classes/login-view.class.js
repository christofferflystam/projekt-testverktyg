class LoginView extends Base {

  defaultPropertyValues(){
    return {
      users: new UserList(),

    }
  }

  constructor(propertyValues = {}){
    super(propertyValues);
    var roleCheckLogin = '';
    
    this.indexOfUser = 0;
    this.HeaderFooter = new HeaderFooter();

  }

  checkIt(){
  		

		let count1 = 0;

		let username = false;
		let pw = false;
		let access = false;

		let inputEmail = (document.getElementById('inputEmail').value);
		let inputPW = (document.getElementById('inputPassword').value);

		for( var key in this.users){ /* Current active element from db query list, iteraing over USER object */
			let count2 = 0;
			
			for (var second in this.users[key]){
				let something = this.users[key][second]; /* Current active element from the database query list, iterating over User attributes */

				if (inputEmail === something && count2 === 1){
					username = true;
				}
				else if(inputPW === something && count2 === 2){
					pw = true;
				}
				count2 += 1; /* One user has been checked, move up in the order */
				if(username === true && pw === true){
					alert("Access Granted, Welcome " + inputEmail + "."); /*Welcome the user */
					
					/*Sets current user id to logged in user*/
					updateUserId(key);
					
					
					this.indexOfUser = count1;
					this.HeaderFooter.user = this.users[this.indexOfUser];
					
					/*Stores name of logged in user to display in header*/
					sessionStorage.loggedInName = this.HeaderFooter.user.first_name + ' ' + this.HeaderFooter.user.last_name;
					access = true; /* Do not display the fail screen */
					this.roleCheckLogin = '/' + this.users[sessionStorage.user_id].role;
					console.log(this.roleCheckLogin);
					nextPage(this.roleCheckLogin); /* Move to next screen and set index for what user is current */
				}
				if(count2 === 3){
					username = false;
					pw = false;
					break;
				}				
			}			
			count1 += 1; /* Consider user object checked, move on to next */
			if(count1 === (Object.keys(this.users).length - 4)){ /* 4 last elements are DOm query elements, check length of the array */
				count1 = 0;
				break;
			}
		}

		if(!access){ /* If authentication failed */
			alert("Access Denied.");
		}
	}

}

function nextPage(href){
	console.log(href);
	document.location.href = href;	
}

function updateUserId(key) {
	sessionStorage.user_id = key;
}
