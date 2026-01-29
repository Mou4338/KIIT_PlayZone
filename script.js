document.getElementById("signupForm").addEventListener("submit",function(e){
    e.preventDefault();
let username=document.getElementById("username").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;
let message=document.getElementById("message");
if(password.lenght<6){
    message.style.color="red";
    message.innerText="password must be 6 character long";
    return;
}
message.style.color="green";
message.innerText="sign up succesfull"
}
);