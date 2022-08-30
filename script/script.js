
    function save(){    
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let password1 = document.getElementById('password1');

    let validEmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(username.value.length === 0)
    {
        alert("please enter user name")
       
        
    }
    else if(email.value.length  === 0)
    {
       alert("please enter email")
       

    }
    else if(email.value.trim() === 0){
        alert("please enter valid email adress")

    }
    else if(password.value.length < 8 )
    {
        alert("please enter password")
       
        
    }
    else if(password === password1.value.length ){
        alert("password  matched")
       
    }
    else{
        localStorage.setItem('username',username.Value);
        localStorage.setItem('email',email.Value);
        localStorage.setItem('password',password.Value);
        localStorage.setItem('password1',password1.Value);
        alert("sucessfully created an account");

    }

};
    

function check(){
    let checkedEmail = localStorage.getItem('email');
    let checkedPassword = localStorage.getItem('password');

    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if(email.Value === checkedEmail && password.Value === checkedPassword){
        alert("Logged in sucessfully")
    }
    else{
        alert("Invalid data please check")
    }
    

};
















