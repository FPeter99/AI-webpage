async function saveGroqKey(){


const key =
document.getElementById(
"groqApiKey"
).value.trim();



if(!key){

alert(
"Adj meg API kulcsot!"
);

return;

}



const token =
localStorage.getItem("token");



const response =
await fetch(
"http://127.0.0.1:8000/save-groq-key",
{

method:"POST",

headers:{

"Content-Type":"application/json",

"Authorization":
"Bearer " + token

},


body:JSON.stringify({

api_key:key

})


});



if(response.status===401 ||
response.status===403){


localStorage.clear();

window.location.href="login.html";

return;


}




const data =
await response.json();



console.log(data);



if(data.success){


document.getElementById(
"message"
).innerText =
"API kulcs elmentve";


}

else{


document.getElementById(
"message"
).innerText =
data.error;


}



}



document
.getElementById("saveApiKey")
.onclick =
saveGroqKey;