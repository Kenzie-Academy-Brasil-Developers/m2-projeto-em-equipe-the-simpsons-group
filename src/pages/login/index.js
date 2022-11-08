//Add a informação home no localstroage.
function page(){
    localStorage.setItem("page", "login")
}

//Cria buttons para o formato de tela desktop
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
    }

    container.append(a1, a2,)
}

//Cria buttons para o formato de tela mobile.
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
    }

    div.append(a1, a2)
    container.append(div)
}

//Cria o menu hamburger
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

//Fica monitorando a tela para a troca de buttons.
function menu(){

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


//Troca as imagens ao passar o cursor do mouse.
function changeImg(){
    let img = document.querySelector("#change-img")
    
    img.addEventListener("mouseenter", ()=>{
        console.log("teste")
        img.setAttribute("src", "https://i.ibb.co/7Cp9WyQ/Passa-A-senha-1.png")
    })

    img.addEventListener("mouseleave", ()=>{
        console.log("teste")
        img.setAttribute("src", "https://i.ibb.co/RbwQyDv/Passa-A-senha-2.png")
    })
}


//Faz o login do usuário.
async function loginApi(data) {
    
    try{
        
         const options = {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json', 
             },
             body: JSON.stringify(data) 
         }
 
         const responseJSON = await fetch('https://m2-api-adot-pet.herokuapp.com/session/login', options)
         const response = await responseJSON.json(responseJSON)
         return response
    
    }catch{
         return "Ocorreu um erro. tente novamente mais tarde"
    }
}

//Passa os dados do input e chama a função de loginApi.
function login(){

    let form = document.querySelector("form")

    form.addEventListener("submit", async (e)=>{
        e.preventDefault()

        let inputs = document.querySelectorAll("input")
        inputs = Array.from(inputs)
        
        let data = {
            "email": inputs[0].value,
            "password": inputs[1].value
        }

        let resp = await loginApi(data)

        if(resp.message){
            console.log("Erro")
        }else{
            console.log(resp)
            localStorage.setItem("@kenziePet:Token", resp.token)
            window.location.replace("../home-user/index.html")
        }

    
       
    })
}

function pageWindow(){

    let screenViewPort = document.querySelector(".screen-viewport")
    let contLogin = document.querySelector(".cont-login")
    let imgCat = document.querySelector(".img-cat")
    let body = document.querySelector("body")

    document.addEventListener("DOMContentLoaded", ()=>{
        if(window.screen.width >= 800){

            let contImg = document.querySelector(".cont-img")

            if(contImg !== null){
                screenViewPort.removeChild(contImg)
            }

            let div = document.createElement("div")
            div.classList.add("cont-img", "flex", "items-center", "justify-center")

            let img = document.createElement("img")
            img.setAttribute("class", "img-dog")
            img.setAttribute("alt", "cachorro")
            img.setAttribute("src", "https://i.ibb.co/GHCbfvp/e-II-Humano-VOC-vai-logar.png")

            div.append(img)
            screenViewPort.append(div)

            imgCat.style.borderRadius="50%"
            contLogin.style.padding="3rem"
            contLogin.style.borderRadius="3rem"
            body.style.backgroundImage="none"
            
        }else{
            let contImg = document.querySelector(".cont-img")

            if(contImg !== null){
                screenViewPort.removeChild(contImg)
            }
            imgCat.style.borderRadius="0rem"
            contLogin.style.padding="1rem"
            contLogin.style.borderRadius="0rem"
            body.style.backgroundImage="url(https://i.ibb.co/4Js3fQc/Design-sem-nome-min.png)"
        }
    })
    
    window.addEventListener("resize", ()=>{
        if(window.screen.width >= 800){

            let contImg = document.querySelector(".cont-img")

            let div = document.createElement("div")
            div.classList.add("cont-img", "flex", "items-center", "justify-center")

            if(contImg !== null){
                screenViewPort.removeChild(contImg)
            }

            let img = document.createElement("img")
            img.classList.add("img-dog")
            img.setAttribute("alt", "cachorro")
            img.setAttribute("src", "https://i.ibb.co/GHCbfvp/e-II-Humano-VOC-vai-logar.png")

            div.append(img)
            screenViewPort.append(div)

            imgCat.style.borderRadius="50%"
            contLogin.style.padding="3rem"
            contLogin.style.borderRadius="3rem"
            body.style.backgroundImage="none"
        }else{
            let contImg = document.querySelector(".cont-img")

            if(contImg !== null){
                screenViewPort.removeChild(contImg)
            }
            imgCat.style.borderRadius="0rem"
            contLogin.style.padding="1rem"
            contLogin.style.borderRadius="0rem"
            body.style.backgroundImage="url(https://i.ibb.co/4Js3fQc/Design-sem-nome-min.png)"
        }
    })
}

//Chama todas as funções.
function callFunctions(){
    page()
    menu()
    changeImg()
    login()
    pageWindow()
}

callFunctions()

