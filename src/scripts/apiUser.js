const baseURL = "https://m2-api-adot-pet.herokuapp.com"


export async function getProfile(){
    const token = localStorage.getItem("@kenziePet:Token")
    const request = await fetch(`${baseURL}/users/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
    });
  
    const response = await request.json();

    return response

}

export async function refreshUsers(body){
    const token = localStorage.getItem("@kenziePet:Token")
    const request = await fetch (`${baseURL}/users/profile`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body)
      })

    try{
        const response = await request.json()
        return response
    }catch{
        
    }
}

export async function deleteUsers(){
    const token = localStorage.getItem("@kenziePet:Token")
    const request = await fetch (`${baseURL}/users/profile`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      })

    try{
        const response = await request.json()
        return response
    }catch{
        
    }
}
