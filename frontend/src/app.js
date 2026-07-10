async function checkUser(){


    const {data} =
        await supabaseClient.auth.getUser();



    if(!data.user){

        window.location.href =
            "login.html";

        return;

    }



    document.getElementById("userInfo").innerHTML =
    `
    ${data.user.email}
    `;


}



checkUser();