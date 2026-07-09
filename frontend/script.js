const API_URL = "http://127.0.0.1:8000/chat";


const messages = document.getElementById("messages");
const input = document.getElementById("input");
const send = document.getElementById("send");



function addMessage(text, type) {

    const message = document.createElement("div");

    message.className = "message " + type;


    if(type === "ai") {

        message.innerHTML = `
            <div class="avatar">
                AI
            </div>

            <div class="bubble">
                ${text}
            </div>
        `;

    } else {

        message.innerHTML = `
            <div class="bubble">
                ${text}
            </div>
        `;

    }


    messages.appendChild(message);


    messages.scrollTop = messages.scrollHeight;

}




async function sendMessage() {


    const text = input.value.trim();


    if(!text) return;



    addMessage(text,"user");


    input.value = "";



    try {


        const response = await fetch(API_URL, {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                message:text

            })

        });



        const data = await response.json();



        addMessage(
            data.answer,
            "ai"
        );



    }

    catch(error) {


        addMessage(
            "Hiba történt a szerver elérésénél.",
            "ai"
        );


        console.error(error);

    }


}



send.addEventListener(
    "click",
    sendMessage
);



input.addEventListener(
    "keydown",
    (event)=>{


        if(event.key==="Enter" && !event.shiftKey){

            event.preventDefault();

            sendMessage();

        }


    }
);