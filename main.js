const menu = document.getElementById("navbarNav")
const linkMenu = document.querySelectorAll(".nav-link")

fechaMenu()

function fechaMenu() {
    for (let i = 0; i < linkMenu.length; i++) {

        linkMenu[i].addEventListener("click", function(){
            menu.classList.toggle("show")
            console.log(i)
        })
        
        
    }
}