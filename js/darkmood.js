


// For Show NavBar
let menu = document.querySelector(".menu") ; 

menu.onclick = ()=>{
document.querySelector(".links").classList.toggle("show") ; 
}




let darkBtn = document.querySelector(".btn") ; 

darkBtn.onclick = ()=>{
    document.body.classList.toggle("dark-mode") ;
    if(document.body.classList.contains("dark-mode"))
    {
        darkBtn.innerHTML ="White Mood"
    } else{
        darkBtn.innerHTML = "Dark Mood" ;
    }

}









