class LoginView extends Base {

  defaultPropertyValues(){
    return {
      users: new UserList()
    }
  }

  constructor(propertyValues = {}){
    super(propertyValues);
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
					console.log('Ursprungsvärde: ', App.currentUserId);
					updateUserId(key);
					console.log('Nytt värde: ', App.currentUserId);
					
					access = true; /* Do not display the fail screen */
					nextPage(count1); /* Move to next screen and set index for what user is current */
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

	clearIt(){ /* Function related to the cancel button */
		(document.getElementById('inputEmail').value) = "";
		(document.getElementById('inputPassword').value) = "";
	}

	

}

function nextPage(number){
	something = number; /* The index of the current logged in user to access */
	/* Activate Routing here */
}

function updateUserId(key) {
	App.currentUserId = key;
}
