// AI Hub Theme System


const defaultTheme = "#8b5cf6";



function applyTheme(){


    const color =
        localStorage.getItem("themeColor")
        || defaultTheme;



    document.documentElement.style
        .setProperty(
            "--primary",
            color
        );



}



function setTheme(color){


    localStorage.setItem(
        "themeColor",
        color
    );


    applyTheme();

}



applyTheme();