function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username =="admin" && password =="user")
    {
        alert("Log in succesfully.");
        return false;
    }
    else{
        alert("Log in failed");
    }
}