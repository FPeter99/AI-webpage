

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