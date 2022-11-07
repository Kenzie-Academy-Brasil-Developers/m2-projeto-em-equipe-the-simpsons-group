
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
        }

    
       
    })
}

function callFunctions(){
    changeImg()
    login()
}

callFunctions()

