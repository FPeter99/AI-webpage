

const API_URL ="http://127.0.0.1:8000/chat";


const messages =document.getElementById("messages");


const input =document.getElementById("input");


const send =document.getElementById("send");



function addMessage(text,type){

    const message =document.createElement("div");

    message.className ="message " + type;

    message.innerHTML =`<div class="bubble">${text}</div>`;

    messages.appendChild(message);

    messages.scrollTop = messages.scrollHeight;

}





async function sendMessage(){

    const text =input.value.trim();

    if(!text) return;

    addMessage(text,"user");

    input.value="";

    const response = await fetch(API_URL,{

    method:"POST",

    headers:{

    "Content-Type":"application/json"

    },
    body:JSON.stringify({message:text})
});
    const data = await response.json();
    addMessage(data.answer, "ai");
}



send.onclick = sendMessage;



input.addEventListener("keydown",(e)=>{
    if(e.key==="Enter" && !e.shiftKey){
        e.preventDefault();
        sendMessage();
    }
});

const saveApiButton =
document.getElementById("saveApiKey");



async function saveGroqKey(){


const key =
document.getElementById(
"groqApiKey"
).value.trim();



if(!key){

alert("Adj meg API kulcsot!");

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
"Bearer "+token

},

body:JSON.stringify({

api_key:key

})

});


const data =
await response.json();


console.log(data);



if(data.success){

alert(
"API kulcs elmentve!"
);

}


}



saveApiButton.onclick =
saveGroqKey;