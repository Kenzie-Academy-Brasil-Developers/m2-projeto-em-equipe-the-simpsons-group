


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
            span2.classList = "font-size-3 color-white-1 CardTagAdoption"
            
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
            headerBoxRight.classList = "headerBoxRight justify-around items-center"
        }else{
            headerBoxRight.classList = "headerBoxRight justify-around items-center show"
        }
        
    })

    btnLogin.addEventListener("click",(e)=>{
        window.location.replace("../login/index.html")
    })

    btnRegister.addEventListener("click",(e)=>{
        window.location.replace("../register/index.html")
    })
})