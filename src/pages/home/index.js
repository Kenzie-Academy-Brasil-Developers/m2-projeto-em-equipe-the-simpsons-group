
import {apiRequestAllPets} from "../../scripts/apiPets.js"




export async function renderListAllPets (){

    const data = await apiRequestAllPets ()
    
    const ul =document.querySelector(".list-all-pets")

    console.log(data)

    data.forEach(element => {
        
        const li = document.createElement("li")
        ul.appendChild(li)
        li.classList = "card-pet flex flex-col justify-between items-center"

            const img = document.createElement("img")
            li.appendChild(img)
            img.src = element.avatar_url

                img.addEventListener("error",(e)=>{
                    img.src = "https://cdn3.iconfinder.com/data/icons/web-development-and-programming-2/64/development_Not_Found-1024.png"
                })

            const h3 = document.createElement("h3")
            li.appendChild(h3)
            h3.classList = "font-size-2 color-brand-1"
            h3.innerText = element.name

            const span = document.createElement("span")
            li.appendChild(span)
            span.classList = "font-size-3 color-brand-1"
            span.innerText = element.species

            const span2 = document.createElement("span")
            li.appendChild(span2)
            span2.classList = "font-size-4 color-white-1 CardTagAdoption"
            
            if(element.available_for_adoption == true){
                span2.innerText = "Disponível para adoção!"
            } else{
                span2.innerText = "Já fui adotado!"
            }
            
            
    });

}



window.addEventListener("DOMContentLoaded",()=>{
    renderListAllPets ()

    const btnBurguer = document.querySelector("#btn-burguer")
    const headerBoxRight = document.querySelector(".headerBoxRight")
    const btnLogin = document.querySelector("#btn-login")
    const btnRegister = document.querySelector("#btn-register")

    btnBurguer.addEventListener("click",(e)=>{
     
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

    btnLogin.addEventListener("click",(e)=>{
        window.location.replace("../login/index.html")
    })

    btnRegister.addEventListener("click",(e)=>{
        window.location.replace("../register/index.html")
    })
})