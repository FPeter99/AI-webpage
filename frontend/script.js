async function sendMessage(){

    let input = document.getElementById("input");

    let message = input.value;


    document.getElementById("messages").innerHTML +=
    "<p><b>Te:</b> " + message + "</p>";


    let response = await fetch(
        "http://127.0.0.1:8000/chat",
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                message: message
            })
        }
    );


    let data = await response.json();


    document.getElementById("messages").innerHTML +=
    "<p><b>AI:</b> " + data.answer + "</p>";


    input.value="";
}