let button = document.querySelector("main .container .text .btn" ) ; 



button.onclick = ()=>{

    if(document.documentElement.style.getPropertyValue("--mainColor" ) != "#000000")
    {
        document.documentElement.style.setProperty("--mainColor" , "#000000") ; 
        document.documentElement.style.setProperty("--font-color" , "#ffffff") ; 
        button.innerHTML = "White Mood"
    }
    else{
        document.documentElement.style.setProperty("--mainColor" , "#ffffff") ; 
        document.documentElement.style.setProperty("--font-color" , "#000000") ; 
        button.innerHTML = "Dark Mood"
    }
}


// For Show NavBar
let menu = document.querySelector(".menu") ; 

menu.onclick = ()=>{
document.querySelector(".links").classList.toggle("show") ; 
}