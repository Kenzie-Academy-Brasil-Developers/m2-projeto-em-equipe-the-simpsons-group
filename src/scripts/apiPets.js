import {toast} from "./toastfy.js"

export async function getMyPets () {
    const token = localStorage.getItem("@kenziePet:Token")
    try {

        const request = await fetch("https://m2-api-adot-pet.herokuapp.com/pets/my_pets", {

            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }

        });

        const response = await request.json();

        return response;

    }catch(err) {

        console.log(err);

    }

}

export async function apiRequestAllPets (){
    const token = localStorage.getItem("@kenziePet:Token")
    const response = await fetch("https://m2-api-adot-pet.herokuapp.com/pets", {
        "method": "GET",
        "headers": {
        "Authorization": `Bearer ${token}`
    }
    })
    const responseJson = await response.json()
   return responseJson
}

export async function patchUpdatePet (id,body) {

   
    const token = localStorage.getItem("@kenziePet:Token")
    try {

        const request = await fetch("https://m2-api-adot-pet.herokuapp.com/pets/" + id, {

            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body)
        });

        if(request.ok){
            toast("sucess","Pet atualizado com sucesso")
            setTimeout(() => {
                document.location.reload(true);                
            }, 3500);

        }
        else{
            toast("fail","Não foi possível atualizar seu Pet")
        }

    }catch(err) {

        console.log(err);

    }

}

const baseURL = "https://m2-api-adot-pet.herokuapp.com"

export async function postCreatePet (body) {

    const token = localStorage.getItem("@kenziePet:Token")
    try {

        const request = await fetch(`${baseURL}/pets`, {

            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body)
        });

        if(request.ok){
            toast("sucess","Pet criado com sucesso")
            setTimeout(() => {
                document.location.reload(true);                
            }, 3500);
        }
        else{
            toast("fail","Não foi possível atualizar seu Pet")
        }

    }catch(err) {

        console.log(err);

    }

}

export async function deletePet (id) {

    const token = localStorage.getItem("@kenziePet:Token")
    try {

        const request = await fetch(`${baseURL}/pets/` + id, {

            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if(request.ok){
            toast("sucess","Pet removido com sucesso")
            setTimeout(() => {
                document.location.reload(true);                
            }, 3500);

        }
        else{
            toast("fail","Não foi possível remover o seu Pet")
        }
    }catch(err) {

        console.log(err);

    }

}