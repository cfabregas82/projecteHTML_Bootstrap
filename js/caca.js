// SELECTING ALL TEXT ELEMENTS
var email = document.forms['vform']['email'];
var password = document.forms['vform']['password'];
// SELECTING ALL ERROR DISPLAY ELEMENTS
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');
// SETTING ALL EVENT LISTENERS
email.addEventListener('blur', emailVerify, true);
password.addEventListener('blur', passwordVerify, true);
// validation function
function isValidEmail(mail) {
return /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
}

function Validate() 
{    
    var num_errores = 0;	

// validate email
    if (email.value == "") 
    {
        email.style.border = "1px solid red";
        email_error.textContent = "Es necessaria una adreça de correu";
        email.focus();
        num_errores++;

    }else if (!isValidEmail(email.value)){
        email.style.border = "1px solid red";
        email_error.textContent = "Es necessari una adreça valida de correu";
        email.focus();
        num_errores++;

    }
    
    
// validate password
    if (password.value == "")
    {
        password.style.border = "1px solid red";
        password_error.textContent = "Es necessari introduir la contrasenya";
        password.focus();
        num_errores++;

    }else if (password.value.length < 6){
        password.style.border = "1px solid red";
        password_error.textContent = "Es necessari introduir al menys 6 caràcters";
        password.focus();
        num_errores++;
    }
        
    
        if (num_errores>0) {
            return false;
    }
        else
    {
            return true;
    }
}
// event handler functions

function emailVerify() 
{
  if (email.value != "") 
  {
  	email.style.border = "1px solid #5e6e66";
  	document.getElementById('email_div').style.color = "#5e6e66";
  	email_error.innerHTML = "";
  	return true;
  }
}
function passwordVerify() 
{
  if (password.value != "") 
  {
  	password.style.border = "1px solid #5e6e66";
  	document.getElementById('password_div').style.color = "#5e6e66";
  	password_error.innerHTML = "";
  	return true;
  }
}