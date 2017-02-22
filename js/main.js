new App();

$(this).delay(5).queue(function(){
	document.getElementById('clickMe').addEventListener("click", test, false);
	document.getElementById('cancelMe').addEventListener("click", clear, false);
});

function test(e){
	e.preventDefault();
	
	let inputEmail = (document.getElementById('inputEmail').value);
	let inputPW = (document.getElementById('inputPassword').value);
	let listEmail = ["temp"]; /* Populate this list with query to DB */
	let listPW = ["root"]; /* Populate this list with query to DB */
	/* Other possibility for safety is just to replace all of the relevant places of lists, to be function calls instead */
	if(inputEmail.length == 0 || inputPW.length == 0){
		alert("Username/Password may not be empty."); /* Triggers if the length of either element is 0. Which means it's empty */
		return false;
	}
	else if(validateEmail(inputEmail, inputPW, listEmail, listPW) === "fail"){ /* checks against if the value is within the array */
		alert("Failed to authenticate E-mail/Password."); 
		return false;
	}

	/* Could replace with relevant function call to DB or akin. */
	alert("Welcome " + listEmail[validateEmail(inputEmail, inputPW, listEmail, listPW)] + ".");	
}

function validateEmail(email, pw, listEmail, listPW){ /* Validator */
	if((listEmail.indexOf(email)) < 0 || (listPW.indexOf(pw)) < 0){
		return "fail";
	}
	else if ((listEmail.indexOf(email)) >= 0 && (listPW.indexOf(pw)) >= 0){
		return (listEmail.indexOf(email));
	}
	/* If it's less than 0, return "fail", otherwise, return the index of email */
}

function clear(e){
	e.preventDefault();

	document.getElementById('inputPassword').value = "";
	document.getElementById('inputEmail').value = "";
}