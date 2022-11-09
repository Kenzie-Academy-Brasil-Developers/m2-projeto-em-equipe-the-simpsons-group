import {apiRequestAllPets} from "../../scripts/apiPets.js"
import {apiRequestCreateAdoption} from "../../scripts/apiAdoptions.js"


export async function renderListAllPetsForAdoption(){

    const data = await apiRequestAllPets ()
    
    const ul =document.querySelector(".listAllPetsForAdoption")
    ul.innerHTML= ""
    
    data.forEach(element => {
        

        if (element.available_for_adoption == true){
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

                const btnAdoption = document.createElement("button")
                li.appendChild(btnAdoption)
                btnAdoption.classList = "button-default-green-1"
                btnAdoption.innerText = "Me adota?"

                    btnAdoption.addEventListener("click",async (e)=>{
                        console.log()
                        await apiRequestCreateAdoption(element.id)
                        await renderListAllPetsForAdoption()
                    })

        }
     
    });

}




window.addEventListener("DOMContentLoaded",()=>{
        
    const logo = document.querySelector("#logoTitle")
    const tagHtml = document.querySelector("html")
    const tagBody = document.querySelector("body")
    const audio = new Audio('../../assets/music/audio1.mp3');

        if(localStorage.getItem("@KenziePets:SimpsonsMode")){
            tagHtml.classList = "simpsonsMode"
            tagBody.classList = "flex flex-col justify-between bodyImg"
            logo.title = "Desativar Simpsons Mode"
        }

       
            logo.addEventListener("click",(e)=>{
            
                if (tagHtml.classList.contains("simpsonsMode")){
                    tagHtml.classList = ""
                    tagBody.classList = "flex flex-col justify-between"
                    logo.title = "Ativar Simpsons Mode"
                    localStorage.removeItem("@KenziePets:SimpsonsMode")
                    audio.pause()
                    audio.currentTime =0
                }else{
                    tagHtml.classList = "simpsonsMode"
                    tagBody.classList = "flex flex-col justify-between bodyImg"
                    logo.title = "Desativar Simpsons Mode"
                    localStorage.setItem("@KenziePets:SimpsonsMode","true")
                    audio.play();
                }
    
            })
   

    if(localStorage.getItem("@kenziePet:Token")){
        renderListAllPetsForAdoption()

        const btnBurguer = document.querySelector("#btn-burguer")
        const headerBoxRight = document.querySelector(".headerBoxRight")
        const btnPerfil = document.querySelector("#btn-perfil")
        const btnLogout = document.querySelector("#btn-logout")
    
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
    
        btnPerfil.addEventListener("click",(e)=>{
            window.location.replace("../home-profile/index.html")
        })
    
        btnLogout.addEventListener("click",(e)=>{
            window.location.replace("../home/index.html")
            localStorage.removeItem("@kenziePet:Token")
            localStorage.removeItem("@KenziePets:SimpsonsMode")
        })
    }else{
        window.location.replace("../home/index.html")
    }

  
})