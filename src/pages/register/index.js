//Add a informação home no localstroage.
function page(){
    localStorage.setItem("page", "register")
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

    if(page === "register"){
        a1.setAttribute("href", "../../pages/login/index.html")
        a2.setAttribute("href", "../../pages/home/index.html")

        a1.innerText="Login"
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

    if(page === "register"){
        a1.setAttribute("href", "../../pages/login/index.html")
        a2.setAttribute("href", "../../pages/home/index.html")

        a1.innerText="Login"
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

function changeImg(){

    let changeImg = document.getElementById("change-img")

    let input = document.getElementById("input-img")

    input.addEventListener("keyup", ()=>{
        changeImg.setAttribute("src", input.value)
    })

    changeImg.addEventListener("error", ()=>{
        changeImg.setAttribute("src", "https://i.ibb.co/GQ71gJz/Passa-A-senha-1.png")
    })

}

//Animações 
function catsAnimations(){

    let catSpying = document.querySelector(".cat-spying")
    let petsTalking = document.querySelector(".img-pets-talking")

    setTimeout(() => {
        let valueSpying = catSpying.getBoundingClientRect().x 
        catSpying.style.left= `${valueSpying+130}px`
        setTimeout(()=>{
            catSpying.setAttribute("src", "https://i.ibb.co/2jqZbbc/gato.png")
        }, 1000)
    },7000)

    setTimeout(() => {
        petsTalking.setAttribute("src", "https://i.ibb.co/wWV0zSP/Acho-que-isso-n-o-um-gato.png")
    },3000)
    
}

function register(){

    let form = document.querySelector("form")

    form.addEventListener("submit", async (e)=>{
        e.preventDefault()

        let inputs = document.querySelectorAll("input")
        inputs = Array.from(inputs)
        
        let data = {
            "name": inputs[0].value,
            "email": inputs[2].value,
            "password": inputs[3].value,
            "avatar_url": inputs[1].value
          }

        let resp = await registerApi(data)

        if(resp.message){
            console.log("Erro")
        }else{
            console.log(resp)
            console.log("Deu certo!!!")
        }
    })
}

async function registerApi(data) {
    
    try{
        
         const options = {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json', 
             },
             body: JSON.stringify(data) 
         }
 
         const responseJSON = await fetch('https://m2-api-adot-pet.herokuapp.com/users', options)
         const response = await responseJSON.json(responseJSON)
         return response
    
    }catch{
         return "Ocorreu um erro. tente novamente mais tarde"
    }
}

function pageWindow(){

    let main = document.querySelector("main")
    let body = document.querySelector("body")
    let form = document.querySelector("form")
    let contRegister = document.querySelector(".cont-register")

    document.addEventListener("DOMContentLoaded", ()=>{
        if(window.screen.width >= 1400){

            let imgSpying = document.querySelector(".cat-spying")
            let imgTalking = document.querySelector(".cont-pets-talking")
            let contChangeImg = document.querySelector(".cont-change-img")

            if(imgSpying !== null || imgTalking !== null){
               main.removeChild(imgSpying)
               main.removeChild(imgTalking)
            }

            if(contChangeImg !== null){
                form.removeChild(contChangeImg)
             }

            let div = document.createElement("div")
            div.classList.add("cont-pets-talking")

            let div2 = document.createElement("div")
            div2.classList.add("cont-change-img")

            let img3 = document.createElement("img")
            img3.classList.add("img-cat")
            img3.setAttribute("alt", "gato")
            img3.setAttribute("id", "change-img")
            img3.setAttribute("src", "https://i.ibb.co/bJjYV8s/Passa-A-senha-2.png")

            div2.append(img3)

            contRegister.style.height="45rem"
            contRegister.style.width="30rem"

            let img1 = document.createElement("img")
            let img2 = document.createElement("img")

            img1.classList.add("cat-spying")
            img2.classList.add("img-pets-talking")

            img1.setAttribute("alt", "gato espiando")
            img2.setAttribute("alt", "pets conversando")

            img1.setAttribute("src", "https://i.ibb.co/p12YxdS/gato-1.png")
            img2.setAttribute("src", "https://i.ibb.co/KGN52Xr/Design-sem-nome.png")

            div.append(img2)

            main.append(img1, div)
            form.append(div2)

            catsAnimations()
            changeImg()

            contRegister.style.padding="3rem"
            contRegister.style.borderRadius="3rem"
            body.style.backgroundImage="none"
            

        }else{
            let imgSpying = document.querySelector(".cat-spying")
            let imgTalking = document.querySelector(".cont-pets-talking")
            let contChangeImg = document.querySelector(".cont-change-img")

            if(imgSpying !== null || imgTalking !== null){
                main.removeChild(imgSpying)
                main.removeChild(imgTalking)
             }

             if(contChangeImg !== null){
                form.removeChild(contChangeImg)
             }

            contRegister.style.maxHeight="45rem"
            contRegister.style.maxWidth="30rem"

            
             contRegister.style.padding="1rem"
             contRegister.style.borderRadius="0rem"
             body.style.backgroundImage="url(https://i.ibb.co/4Js3fQc/Design-sem-nome-min.png)"
        }

        if(window.screen.height <= 750){
            body.style.height=`${window.screen.height+100}px`
            body.style.overflow="auto"
        }else{
            body.style.height="100vh"
            body.style.overflow="hidden"
        }
      
    })
    
    window.addEventListener("resize", ()=>{
        if(window.screen.width >= 1400){
            let imgSpying = document.querySelector(".cat-spying")
            let imgTalking = document.querySelector(".cont-pets-talking")
            let contChangeImg = document.querySelector(".cont-change-img")

            if(imgSpying !== null || imgTalking !== null){
               main.removeChild(imgSpying)
               main.removeChild(imgTalking)
            }

            if(contChangeImg !== null){
                form.removeChild(contChangeImg)
             }

            let div = document.createElement("div")
            div.classList.add("cont-pets-talking")

            let div2 = document.createElement("div")
            div2.classList.add("cont-change-img")

            let img3 = document.createElement("img")
            img3.classList.add("img-cat")
            img3.setAttribute("alt", "gato")
            img3.setAttribute("id", "change-img")
            img3.setAttribute("src", "https://i.ibb.co/bJjYV8s/Passa-A-senha-2.png")

            div2.append(img3)

            contRegister.style.height="45rem"
            contRegister.style.width="30rem"

            let img1 = document.createElement("img")
            let img2 = document.createElement("img")

            img1.classList.add("cat-spying")
            img2.classList.add("img-pets-talking")

            img1.setAttribute("alt", "gato espiando")
            img2.setAttribute("alt", "pets conversando")

            img1.setAttribute("src", "https://i.ibb.co/p12YxdS/gato-1.png")
            img2.setAttribute("src", "https://i.ibb.co/KGN52Xr/Design-sem-nome.png")

            div.append(img2)

            main.append(img1, div)
            form.append(div2)

            catsAnimations()
            changeImg()

            contRegister.style.padding="3rem"
            contRegister.style.borderRadius="3rem"
            body.style.backgroundImage="none"
           
        }else{
            let imgSpying = document.querySelector(".cat-spying")
            let imgTalking = document.querySelector(".cont-pets-talking")
            let contChangeImg = document.querySelector(".cont-change-img")

            if(imgSpying !== null || imgTalking !== null){
               main.removeChild(imgSpying)
               main.removeChild(imgTalking)
            }


            if(contChangeImg !== null){
                form.removeChild(contChangeImg)
             }

             contRegister.style.maxHeight="45rem"
             contRegister.style.maxWidth="30rem" 

             contRegister.style.padding="1rem"
             contRegister.style.borderRadius="0rem"
             body.style.backgroundImage="url(https://i.ibb.co/4Js3fQc/Design-sem-nome-min.png)"
        }
    })

    if(window.screen.height <= 750){
        body.style.height=`${window.screen.height+100}px`
        body.style.overflow="auto"
    }else{
        body.style.height="100vh"
        body.style.overflow="hidden"
    }
}



//Chama todas as funções.
function callFunctions(){
    page()
    menu()
    register()
    pageWindow()
}

callFunctions()

