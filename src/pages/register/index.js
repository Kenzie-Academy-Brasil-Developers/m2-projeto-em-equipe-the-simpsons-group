import { toast } from "../../scripts/toastfy.js"

//Add a informação home no localstroage.
function page(){
    localStorage.setItem("page", "register")
}


//Troca a imagem
function changeImg(){

    let changeImg = document.getElementById("change-img")

    let input = document.getElementById("input-img")

    input.addEventListener("keyup", ()=>{
        changeImg.setAttribute("src", input.value)

        if(input.value === ""){
            changeImg.setAttribute("src", "https://i.ibb.co/bJjYV8s/Passa-A-senha-2.png")
        }
    })

    changeImg.addEventListener("error", ()=>{
        changeImg.setAttribute("src", "https://i.ibb.co/vVVHB1k/erro.png")
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

//Puxa os dados do input e manda para Api.
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
            toast("fail", "Não foi possível cadastrar esse usuário")
            
        }else{
            setTimeout(() => {
                window.location.replace("../login/index.html")
                
            }, 3500);
            toast("sucess", "Usuário cadastrado com Sucesso!")
            
        }
    })
}

//Faz o registro.
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

//Monitora minha tela.
function pageWindow(){

    const btnBurguer = document.querySelector("#btn-burguer")
    const headerBoxRight = document.querySelector(".headerBoxRight")
    const btnHome = document.querySelector("#btn-home")
    const btnLogin = document.querySelector("#btn-login")
    console.log(btnLogin)

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

    btnHome.addEventListener("click",()=>{
        window.location.replace("../home/index.html")
    })

    btnLogin.addEventListener("click",()=>{
            window.location.replace("../login/index.html")
    })


}

//Chama todas as funções.
function callFunctions(){
    page()
    register()
    pageWindow()
    catsAnimations()
}

callFunctions()

