/*
Sign In
*/
function validatesignin()
{
    var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
    var user=document.getElementById("uname").value;
	//var user=document.signin.username.value;
	var pass=document.getElementById("pwd").value;
	//var pass=document.signin.password.value;
	var e=document.getElementById("errormessage");
	if(user=="")
	{
		document.getElementById("uname").focus();
		e.innerHTML="Please Enter Your Username";
		return false;
	}
	else if(!emailRegex.test(user))
	{		
		document.getElementById("uname").focus();
		e.innerHTML="Please Enter a Valid Email Address";		
		return false;
	}
	else if(pass=="")
	{
		document.getElementById("pwd").focus();
    	e.innerHTML="Please Enter Your Password";
		return false;	
	}
	else if(pass.length<6)
	{
		document.getElementById("pwd").focus();
    	e.innerHTML="Please Enter a Valid Password";
		return false;	
	}	
	else
	{
		e.style.display="none";
		return true;
	}	
}
function resetsignin()
{
	document.signin.reset();	
}

/*

Sign Up

*/
function onlynumber()
{
	phone=document.getElementById("phn");
	pin=document.getElementById("pn");	
	phone.value=phone.value.replace(/[^0-9]/g,'');
	pin.value=pin.value.replace(/[^0-9]/g,'');
}
function onlyalpha()
{
	fname=document.getElementById("first");
	mname=document.getElementById("middle");
	lname=document.getElementById("last");	
	city=document.getElementById("cty");
	country=document.getElementById("cnt");	
	fname.value=fname.value.replace(/[^A-Za-z]/g,'');
	mname.value=mname.value.replace(/[^A-Za-z]/g,'');
	lname.value=lname.value.replace(/[^A-Za-z]/g,'');
	city.value=city.value.replace(/[^A-Za-z]/g,'');
	country.value=country.value.replace(/[^A-Za-z]/g,'');    
}
function removepass()
{
    password=document.getElementById("pwd");
	cpassword=document.getElementById("cpwd");	
	password.value=password.value.replace(/[^A-Za-z0-9]/g,'');
	cpassword.value=cpassword.value.replace(/[^A-Za-z0-9]/g,'');
}
function removegenerror()
{
	g=document.getElementById("sex");
	g.style.display="none";
}
function validatesignup()
{	
	fname=document.getElementById("first");
	mname=document.getElementById("middle");
	lname=document.getElementById("last");	
	male=document.getElementById("male");
	female=document.getElementById("female");
	password=document.getElementById("pwd");
	cpassword=document.getElementById("cpwd");
	city=document.getElementById("cty");
	country=document.getElementById("cnt");
	phone=document.getElementById("phn");
	pin=document.getElementById("pn");	

	f=document.getElementById("fname");
	m=document.getElementById("mname");
	l=document.getElementById("lname");
	g=document.getElementById("sex");
	p=document.getElementById("password");
	cp=document.getElementById("cpassword");
	ct=document.getElementById("city");
	cnt=document.getElementById("country");
	ph=document.getElementById("phone");
	pn=document.getElementById("pin");
    
    if(fname.value=="")
    {
    	fname.focus();
    	f.style.display="block";
    	f.innerHTML="Please enter your first name";
    	return false;
    }
    else if((fname.value.length<3)||(fname.value.length>15))
    {
    	fname.focus();
    	f.style.display="block";
    	f.innerHTML="Enter proper name(Length 3-15)";
    	return false;
    }
    else
    {
    	f.style.display="none";
    }
    if(lname.value=="")
    {
    	lname.focus();
    	l.style.display="block";
    	l.innerHTML="Please enter your last name";
    	return false;
    }
    else
    {
    	l.style.display="none";
    }
    if((male.checked==false)&&(female.checked==false))
    {
    	g.focus();    	
    	g.style.display="block";
    	g.innerHTML="Please select your gender";
    	return false;
    }
    if(password.value=="")
    {
    	password.focus();
    	p.style.display="block";
    	p.innerHTML="Please enter your password";
    	return false;
    }
    else if(password.value.length<6)
    {
    	password.focus();
    	p.style.display="block";
    	p.innerHTML="Password should be minimum 6 characters";
    	return false;
    }
    else
    {
    	p.style.display="none";
    }
    if(cpassword.value=="")
    {
    	cpassword.focus();
    	cp.style.display="block";
    	cp.innerHTML="Please re-enter your password";
    	return false;
    }
    else if(cpassword.value!=password.value)
    {
    	cpassword.focus();
    	cp.style.display="block";
    	cp.innerHTML="Password and Confirm Password doesn't match";
    	return false;
    }
    else
    {
    	cp.style.display="none";
    }
    if(city.value=="")
    {
    	city.focus();
    	ct.style.display="block";
    	ct.innerHTML="Please enter your city name";
    	return false;
    }
    else if(city.value.length<3)
    {
    	city.focus();
    	ct.style.display="block";
    	ct.innerHTML="Minimum 3 characters";
    	return false;
    }
    else
    {
    	ct.style.display="none";
    }
    if(country.value=="")
    {
    	country.focus();
    	cnt.style.display="block";
    	cnt.innerHTML="Please enter your country name";
    	return false;
    }
    else if(country.value.length<3)
    {
    	country.focus();
    	cnt.style.display="block";
    	cnt.innerHTML="Minimum 3 characters";
    	return false;
    }
    else
    {
    	cnt.style.display="none";
    }
    if(phone.value=="")
    {
    	phone.focus();
    	ph.style.display="block";
    	ph.innerHTML="Please enter your phone number";
    	return false;    	
    }
    else if((phone.value.length<10)||(phone.value.length>13))
    {
    	phone.focus();
    	ph.style.display="block";
    	ph.innerHTML="Please enter a vaild phone number";
    	return false;    	
    }
    else
    {
    	ph.style.display="none";
    }
    if(pin.value=="")
    {
    	pin.focus();
    	pn.style.display="block";
    	pn.innerHTML="Please enter your pin number";
    	return false;    	
    }
    else if(pin.value.length!=6)
    {
    	pin.focus();
    	pn.style.display="block";
    	pn.innerHTML="Please enter a vaild pin number";
    	return false;    	
    }
    else
    {
    	pn.style.display="none";
    }
return true;
}
function resetsignup()
{
	document.signup.reset();	
}