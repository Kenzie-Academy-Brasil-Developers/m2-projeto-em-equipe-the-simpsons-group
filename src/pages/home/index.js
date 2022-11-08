import { menu } from "../../scripts/menu.js"

function page(){
    localStorage.setItem("page", "home")
}

page()

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
    });

}




renderListAllPets ()
menu()