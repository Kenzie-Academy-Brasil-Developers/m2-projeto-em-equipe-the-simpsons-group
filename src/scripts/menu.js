
function createButtonsDesktop(){

    let container = document.querySelector(".cont-header-buttons")

    container.innerHTML=""

    let page = localStorage.getItem("page")

    let a1 = document.createElement("a")
    let a2 = document.createElement("a")

    a1.classList.add("button-outline-brand-1", "font-size-3")
    a2.classList.add("button-default-brand-1", "font-size-3")

    if(page === "login"){
        a1.setAttribute("href", "../../pages/register/index.html")
        a2.setAttribute("href", "../../pages/home/index.html")

        a1.innerText="Registrar"
        a2.innerText="Home"
    }else if(page === "register"){
        a1.setAttribute("href", "../../pages/login/index.html")
        a2.setAttribute("href", "../../pages/home/index.html")

        a1.innerText="Login"
        a2.innerText="Home"
    }else if(page === "home"){
        a1.setAttribute("href", "../../pages/login/index.html")
        a2.setAttribute("href", "../../pages/register/index.html")

        a1.innerText="Login"
        a2.innerText="Registrar"
    }else if(page === "homeUser"){
        a1.setAttribute("href", "../../pages/home-profile/index.html")
        a2.setAttribute("href", "../../pages/home/index.html")
        a2.setAttribute("id", "btn-logout")

        a1.innerText="Perfil"
        a2.innerText="Sair"

        a2.addEventListener("click", ()=>{
            localStorage.clear()
        })
    }else if(page === "homeProfile"){
        a1.setAttribute("href", "../../pages/home-user/index.html")
        a2.setAttribute("href", "../../pages/home/index.html")
        a2.setAttribute("id", "btn-logout")
        
        a1.innerText="Adotar"
        a2.innerText="Sair"

        a2.addEventListener("click", ()=>{
            localStorage.clear()
        })
    }


    container.append(a1, a2,)
}

function createButtonsMobile(){

    let container = document.querySelector(".cont-header-buttons")

    let page = localStorage.getItem("page")

    let a1 = document.createElement("a")
    let a2 = document.createElement("a")
    let div = document.createElement("div") 

    a1.classList.add("button-outline-brand-1", "font-size-3")
    a2.classList.add("button-default-brand-1", "font-size-3")
    div.classList.add("cont-menu", "flex", "align-center", "justify-center", "gap-small")

    if(page === "login"){
        a1.setAttribute("href", "../../pages/register/index.html")
        a2.setAttribute("href", "../../pages/home/index.html")

        a1.innerText="Registrar"
        a2.innerText="Home"
    }else if(page === "register"){
        a1.setAttribute("href", "../../pages/login/index.html")
        a2.setAttribute("href", "../../pages/home/index.html")

        a1.innerText="Login"
        a2.innerText="Home"
    }else if(page === "home"){
        a1.setAttribute("href", "../../pages/login/index.html")
        a2.setAttribute("href", "../../pages/register/index.html")

        a1.innerText="Login"
        a2.innerText="Registrar"
    }else if(page === "homeUser"){
        a1.setAttribute("href", "../../pages/home-profile/index.html")
        a2.setAttribute("href", "../../pages/home/index.html")
        a2.setAttribute("id", "btn-logout")

        a1.innerText="Perfil"
        a2.innerText="Sair"

        a2.addEventListener("click", ()=>{
            localStorage.clear()
        })
    }else if(page === "homeProfile"){
        a1.setAttribute("href", "../../pages/home-user/index.html")
        a2.setAttribute("href", "../../pages/home/index.html")
        a2.setAttribute("id", "btn-logout")
        
        a1.innerText="Adotar"
        a2.innerText="Sair"

        a2.addEventListener("click", ()=>{
            localStorage.clear()
        })
    }

    div.append(a1, a2)
    container.append(div)
}

function createMenuHamburger(){
    let container = document.querySelector(".cont-header-buttons")

    container.innerHTML=""

    let value = false

    let img = document.createElement("img")

  
    img.setAttribute("src", "../../assets/img/menu-burguer.svg")
    

    img.addEventListener("click", ()=>{
        if(value === false){
            createButtonsMobile()
            value = true
        }else if(value === true){
            let menu = document.querySelector(".cont-menu")
            container.removeChild(menu)
            value = false
        }
    })

    container.append(img)

}


export function menu(){

    document.addEventListener("DOMContentLoaded", ()=>{
        if(window.screen.width >= 800){
            createButtonsDesktop()
        }else{
            createMenuHamburger()
        }
    })
    
    window.addEventListener("resize", ()=>{
        if(window.screen.width >= 800){
            createButtonsDesktop()
        }else{
            createMenuHamburger()
        }
    })
              
}


