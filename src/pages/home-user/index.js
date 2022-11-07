

export async function apiRequestAllPets (){
    const response = await fetch("https://m2-api-adot-pet.herokuapp.com/pets", {
        "method": "GET",
        "headers": {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc2ODYzMDksImV4cCI6MTY2ODI5MTEwOSwic3ViIjoiYTI1YjAxZmEtZWFmNS00NDExLWFiZDktOTJkNTJjODQzZjg3In0.c9y8SCMeFiuIqms0U2a1IWruh0A6NPoqMqcHCo-4ubw"
    }
    })
    const responseJson = await response.json()
   return responseJson
}


export async function renderListAllPetsForAdoption(){

    const data = await apiRequestAllPets ()
    
    const ul =document.querySelector(".listAllPetsForAdoption")

    console.log(data)

    data.forEach(element => {
        

        if (element.available_for_adoption == true){
            const li = document.createElement("li")
            ul.appendChild(li)
            li.classList = "card-pet flex flex-col"
    
                const img = document.createElement("img")
                li.appendChild(img)
                img.src = element.avatar_url
    
                const h3 = document.createElement("h3")
                li.appendChild(h3)
                h3.classList = "font-size-2 color-brand-1"
                h3.innerText = element.name
    
                const span = document.createElement("span")
                li.appendChild(span)
                span.classList = "font-size-6 color-black-1"
                span.innerText = element.species

                const btnAdoption = document.createElement("button")
                li.appendChild(btnAdoption)
                btnAdoption.classList = "button-default-green-1"
                btnAdoption.innerText = "Me adota?"

                    btnAdoption.addEventListener("click",(e)=>{
                        console.log(element.id)
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