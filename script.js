
// menu hendeler 
function menuHendeler(){
    const menu = document.querySelector(".fa-bars");
    const navList = document.querySelector(".navlist");
    menu.addEventListener("click",()=>{
        navList.classList.toggle("active")
        console.log(navList)
    })
}
menuHendeler();



// ScrollReavel start 
ScrollReveal().reveal(".logo",{delay:100,origin:'left',distance:"100px"})

// for animation 

// 1.animation name // name
// 2.animation duration // kotokkon cholbe //time/
// 3. animation delay koto kon pore hobe 