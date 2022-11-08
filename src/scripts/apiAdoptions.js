import { toast } from "./toastfy.js"

export async function apiRequestCreateAdoption(petId){
    const token = localStorage.getItem("@kenziePet:Token")
    const data = {
        "pet_id": petId  
    }

    const options = {
        method: 'POST', // Indicamos o método
        headers: {
            'Content-Type': 'application/json', // Definimos o formato do body que enviaremos
            'Authorization': `Bearer ${token}` // Definimos o formato do body que enviaremos
        },
        body: JSON.stringify(data) // Passamos os dados para JSON e colocamos no body para enviarmos
    }
        
    const response = await fetch('https://m2-api-adot-pet.herokuapp.com/adoptions', options) // endpoint de registro 
    const responseJson = await response.json()

    if(response.ok){
        toast("sucess","Pet Adotado com Sucesso!")
    }
    else{
        toast("fail","Não foi possível adotar esse pet!")
    }
    console.log(responseJson)
   return responseJson
}

export async function apiRequestAllAdoptions(){
    const token = localStorage.getItem("@kenziePet:Token")
   
    const options = {
        method: 'GET', // Indicamos o método
        headers: {
            'Content-Type': 'application/json', // Definimos o formato do body que enviaremos
            'Authorization': `Bearer ${token}` // Definimos o formato do body que enviaremos
        }
    }
        
    const response = await fetch('https://m2-api-adot-pet.herokuapp.com/adoptions', options) // endpoint de registro 
    const responseJson = await response.json()

   return responseJson
}

export async function apiRequestDeleteAdoption(idAdoption){
    const token = localStorage.getItem("@kenziePet:Token")
   
    const options = {
        method: 'DELETE', // Indicamos o método
        headers: {
            'Content-Type': 'application/json', // Definimos o formato do body que enviaremos
            'Authorization': `Bearer ${token}` // Definimos o formato do body que enviaremos
        }
    }
        
    const response = await fetch(`https://m2-api-adot-pet.herokuapp.com/adoptions/delete/${idAdoption}`, options) // endpoint de registro 
    const responseJson = await response.json()
    console.log(responseJson)
   return responseJson
}
