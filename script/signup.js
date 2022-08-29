function save(){    
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var password1 = document.getElementById("password1");


    var validEmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(username.value.length === 0)
    {
        alert("please enter user name")
       
        
    }
    else if(email.value.length  === 0)
    {
       alert("please enater email")
       

    }
    else if(validEmail.value.trim() === 0){
        alert("please enter valid email adress")

    }
    else if(password.value.length === 0)
    {
        alert("please enter the password")
       
        
    }
    else if(password.value.length < 8){
        alert("password must be in 8 characters")
       

    }
    else if(password1.value.length < 8){
        alert("password dooes not matching")
        
    }
    
   
    
    else if(username.Value.length === 0 && email.Value.length === 0 && password.Value.length === 0 ){
        alert("please fill the username & email & password")
    }
    else{
        Storalocalzge.setItem('username',username.Value);
        localStorage.setItem('email',email.Value);
        localStorage.setItem('password',password.Value);
        localStorage.setItem('password1',pass.Value);
        alert("sucessfully created an account");

    }

}
    

function check(){
    var checkedEmail = localStorage.getItem('email');
    var checkedPassword = localStorage.getItem('password');

    var userEmail = document.getElementById('email');
    var password = document.getElementById('password2');

    if(userEmail.Value === checkedEmail && password.Value === checkedPassword){
        alert("Logged in sucessfully");
    }
    else{
        alert("Invalid data please check");
    };
    

};
