function validation(){
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    let confirm = document.getElementById('confirmPassword').value;


    if(user == "")
    {
        document.getElementById('user').innerHTML = "Please fill the username field";
        return false;
    }
    
    if((user.length <=2) || (user.length > 15))
    {
        document.getElementById('user').innerHTML = "username length must be between 2 and 15";
        return false;
    }

    if(!isNaN(user))
    {
        document.getElementById('user').innerHTML = "only characters are allowed";
        return false;
    }

    if(pass == "")
    {
        document.getElementById('pass').innerHTML = "Please fill the password field";
        return false;
    }

    if((pass.length <=5) || (pass.length > 15))
    {
        document.getElementById('pass').innerHTML = "password length must be between 5 and 15";
        return false;
    }

    if(pass!=confirm)
    {
        document.getElementById('conpass').innerHTML = "pass are not matching";
        return false;
    }

    if(confirm == "")
    {
        document.getElementById('conpass').innerHTML = "Please fill the confirmPassword field";
        return false;
    }
}