const baseURL = "https://m2-api-adot-pet.herokuapp.com"


export async function getProfile(token){
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
