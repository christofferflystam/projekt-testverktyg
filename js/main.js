$(document).ready(function() {
	var html = [
		'<div class ="complete-login-form">',
		'<form class="form-horizontal">',


		      '<div class="control-group">',
		        '<label class="control-label" for="inputEmail">Email</label>',
		        '<div class="controls">',
		          '<input type="text" id="inputEmail" placeholder="Email">',
		        '</div>',
		      '</div>',

		      '<div class="control-group">',
		        '<label class="control-label" for="inputPassword">Password</label>',
		        '<div class="controls">',
		          '<input type="password" id="inputPassword" placeholder="Password">',
		        '</div>',
		      '</div>',

		      '<div class="control-group">',
		        '<div class="controls">',
		        '<button type="cancel" class="btn">Cancel</button>',
		          '<button id="SubmitButton" class="btn">Sign in</button>',
		        '</div>',
		      '</div>',
		    '</div>',
		  '</div>',
		'</div>',
		'</div>',
		'</form>'
].join("\n");


	$("body").append(html);

	$("button:submit").bind("click", function(e) {

			var test1 = $("#inputEmail");

			var test = $("#inputPassword");

			if(test1.val() !== ValidateEmail() || test.val() !== Validate()){
				alert("That was an errornous Username/Password. Please try again.")
				return false;
			}
			else{
				alert("Access Granted.");
			}



			e.preventDefault();
			$("body").empty();

			

			

			var html2 = [
				'<nav class="navbar navbar-inverse">', 
				  '<div class="container-fluid">',
				    '<div class="navbar-header">',
				      '<a class="navbar-brand" href="#">Newtons Testverktyg</a>',
				    '</div>',
				    '<ul class="nav navbar-nav">',
				      '<li>Du är inloggad som:', User(), '</li>',
				    '</ul>',
				  '</div>',
				'</nav>',

				'<main class="page-row page-row-expanded">',  /* This is where we retrieve the body content */
				    Body(),
				'</main>',

				<!-- Begin page content -->
				'<footer class="page-row footerClass">', /* This is where we retrieve the footer content */
				    Footer(), 
				'</footer>'
].join("\n");


	$("body").append(html2);
		});
	
	function ValidateEmail(){
		return "John@gmail.com"; /*Can be set to relevant E-mail to check against from DB */
	}
	function Validate(){
		return "Root"; /* Can be set to relevant password to check against from DB */
	}

	function User(){
		return "Temp Name"; /* Can be set to relevant content to check against from DB */
	}

	function Footer(){
		return "This is what we want!"; /* Can be set to relevant content to return */
	}

	function Body(){ /* can be set to relevant body content to return */
		return "This is the body!"; 
	}

	function GetTest(){
		/* Call User() to call against DB to retrieve tests for User */
		return "Temp";
	}

	function ReturnQuestion(){
		/*Run query against DB with User, return the result of Query against User's Test */
		var user = User();

		/* Just pass the user to the DB query and handle the results */
		

	}


});
