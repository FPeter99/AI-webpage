async function login(){

    const email =
        document.getElementById("email").value;


    const password =
        document.getElementById("password").value;



    const response = await fetch(
        "http://127.0.0.1:8000/login",
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                email,
                password
            })
        }
    );


    const data = await response.json();


    console.log(data);


    if(data.success){

        localStorage.setItem(
            "token",
            data.session
        );


        localStorage.setItem(
            "user",
            JSON.stringify(data.user)
        );


        window.location.href="index.html";

    }
    else{

        document.getElementById("message").innerText =
            data.error;

    }

}



const button = document.getElementById("loginButton");

if(button){

    button.addEventListener(
        "click",
        login
    );

}