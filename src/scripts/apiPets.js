async function getMyPets (token) {

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

export { getMyPets }