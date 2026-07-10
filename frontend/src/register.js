async function register(){


const username =
document.getElementById("username").value;


const email =
document.getElementById("email").value;


const password =
document.getElementById("password").value;


const password2 =
document.getElementById("password2").value;



if(password !== password2){

document.getElementById("message").innerText =
"A két jelszó nem egyezik";

return;

}



const response = await fetch(
"http://127.0.0.1:8000/register",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},


body:JSON.stringify({

username,
email,
password

})

});



const data = await response.json();



if(data.success){

document.getElementById("message").innerText =
"Ellenőrizd az email címedet!";


}

else{

document.getElementById("message").innerText =
data.error;

}


}



document
.getElementById("registerButton")
.addEventListener(
"click",
register
);