function validatePassword()
{
	var p=document.signup.password.value;
	var c=document.signup.cpassword.value;
	if(p!=c)
      {      	
      	var v=document.getElementById("validation");
      	//document.getElementById("validation").style.color="red";
      	//document.getElementById("validation").innerHTML="Password and Confirm password doesn't match";
      	v.style.color="red";
      	v.innerHTML="Password and Confirm password doesn't match";
      	//v.innerHTML="Password and Confirm password doesn't match"
      	//alert("Passwords doesn't match");
      	return false;
      }	 
    return true;      
}