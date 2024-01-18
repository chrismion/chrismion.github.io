
const burgerIcon = document.querySelector("#burger")
const burgerDraw = document.querySelector('.navbar-burger')
const navLink = document.querySelector("#navbarBasicExample") 


burgerIcon.addEventListener("click",()=>{
    navLink.classList.toggle("is-active")
    burgerDraw.classList.toggle("is-active")
    
})

