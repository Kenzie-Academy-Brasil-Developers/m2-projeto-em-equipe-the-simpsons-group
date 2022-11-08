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
