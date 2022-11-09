import {toast} from "../../scripts/toastfy.js"


//Add a informação home no localstroage.
function page(){
    localStorage.setItem("page", "login")
}


//Troca as imagens ao passar o cursor do mouse.
function changeImg(){
    let img = document.querySelector("#change-img")
    
    img.addEventListener("mouseenter", ()=>{
        img.setAttribute("src", "https://i.ibb.co/7Cp9WyQ/Passa-A-senha-1.png")
    })

    img.addEventListener("mouseleave", ()=>{
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
            toast("fail", "Não foi possível realizar o login!")
        }else{
            localStorage.setItem("@kenziePet:Token", resp.token)            
            toast("sucess", "Login Realizado com Sucesso!")
            setTimeout(() => {
                window.location.replace("../home-user/index.html")
            }, 3500);
        }

    })
}


//Monitora a minha tela.
function pageWindow(){

    const btnBurguer = document.querySelector("#btn-burguer")
    const headerBoxRight = document.querySelector(".headerBoxRight")
    const btnHome = document.querySelector("#btn-home")
    const btnRegister = document.querySelector("#btn-register")

    btnBurguer.addEventListener("click",()=>{
     
        if (headerBoxRight.classList.contains("show")){
            headerBoxRight.classList = "headerBoxRight justify-between items-center"
            btnBurguer.src = "../../assets/img/menu-burguer.svg"
        }else{
            headerBoxRight.classList = "headerBoxRight justify-between items-center show"
            btnBurguer.src = "../../assets/img/close.svg"
        }
        
    })

    window.addEventListener("resize", ()=>{
        if(window.screen.width >= 500){
            headerBoxRight.classList = "headerBoxRight justify-between items-center"
            btnBurguer.src = "../../assets/img/menu-burguer.svg"
        }
    })

    btnHome.addEventListener("click",(e)=>{
        window.location.replace("../home/index.html")
    })

    btnRegister.addEventListener("click",(e)=>{
        window.location.replace("../register/index.html")
    })
}


//Chama todas as funções.
function callFunctions(){
    page()
    changeImg()
    login()
    pageWindow()
}


callFunctions()

