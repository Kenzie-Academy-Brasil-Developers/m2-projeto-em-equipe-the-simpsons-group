import {apiRequestAllPets} from "../../scripts/apiPets.js"
import {apiRequestCreateAdoption} from "../../scripts/apiAdoptions.js"


export async function renderListAllPetsForAdoption(){

    const data = await apiRequestAllPets ()
    
    const ul =document.querySelector(".listAllPetsForAdoption")
    ul.innerHTML= ""
     console.log(data)

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
    

    if(localStorage.getItem("@kenziePet:Token")){
        renderListAllPetsForAdoption()

        const btnBurguer = document.querySelector("#btn-burguer")
        const headerBoxRight = document.querySelector(".headerBoxRight")
        const btnPerfil = document.querySelector("#btn-perfil")
        const btnLogout = document.querySelector("#btn-logout")
    
        btnBurguer.addEventListener("click",(e)=>{
         
            if (headerBoxRight.classList.contains("show")){
                headerBoxRight.classList = "headerBoxRight justify-around items-center"
            }else{
                headerBoxRight.classList = "headerBoxRight justify-around items-center show"
            }
            
        })
    
        btnPerfil.addEventListener("click",(e)=>{
            window.location.replace("../home-profile/index.html")
        })
    
        btnLogout.addEventListener("click",(e)=>{
            window.location.replace("../home/index.html")
            localStorage.removeItem("@kenziePet:Token")
        })
    }else{
        window.location.replace("../home/index.html")
    }

  
})