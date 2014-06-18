function validate()
{
    var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
	var user=document.signin.username.value;
	var pass=document.signin.password.value;
	var e=document.getElementById("errormessage");
	if(user=="")
	{
		document.signin.username.focus();
		e.innerHTML="Please Enter Your Username";
		return false;
	}
	else if(!emailRegex.test(user))
	{		
		document.signin.username.focus();
		e.innerHTML="Please Enter a Valid Email Address";		
		return false;
	}
	else if(pass=="")
	{
		document.signin.password.focus();
    	e.innerHTML="Please Enter Your Password";
		return false;	
	}
	else if(pass.length<6)
	{
		document.signin.password.focus();
    	e.innerHTML="Please Enter a Valid Password";
		return false;	
	}	
	else
	{
		e.style.display=none;
		return true;
	}	
}
function reset()
{
	document.signin.reset();	
}