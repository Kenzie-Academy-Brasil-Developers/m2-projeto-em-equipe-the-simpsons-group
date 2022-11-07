export async function getMyPets (token) {

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
    const response = await fetch("https://m2-api-adot-pet.herokuapp.com/pets", {
        "method": "GET",
        "headers": {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc2ODYzMDksImV4cCI6MTY2ODI5MTEwOSwic3ViIjoiYTI1YjAxZmEtZWFmNS00NDExLWFiZDktOTJkNTJjODQzZjg3In0.c9y8SCMeFiuIqms0U2a1IWruh0A6NPoqMqcHCo-4ubw"
    }
    })
    const responseJson = await response.json()
   return responseJson
}
