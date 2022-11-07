
import { getMyPets } from "../../scripts/apiPets";

async function renderCardsPets(){

    const ul = document.getElementById("ulCardsPets");

    const li = document.createElement("li");
    const imgPets = document.createElement("img");
    const divDescription = document.createElement("div");
    const pName = document.createElement("p");
    const pSpecie = document.createElement("p");
    const pAvailable = document.createElement("p");
    const spanName = document.createElement("span");
    const spanSpecie = document.createElement("span");
    const spanAvailable = document.createElement("span");
    const btnAtt = document.createElement("button");

    li.classList.add("cardPet", "flex");
    imgPets.classList.add("imgPets");
    divDescription.classList.add("divDescription", "flex", "flex-col", "justify-center");
    pName.classList.add("font-size-4", "color-brand-1");
    spanName.classList.add("font-size-4", "color-black-1");
    pSpecie.classList.add("font-size-4", "color-brand-1");
    spanSpecie.classList.add("font-size-4", "color-black-1");
    pAvailable.classList.add("font-size-4", "color-brand-1");
    spanAvailable.classList.add("font-size-4", "color-black-1");

    pName.innerText = "Nome:";
    pSpecie.innerText = "Espécies:";
    pAvailable.innerText = "Adotável:";
    btnAtt.innerText = "Atualizar";
    spanAvailable.innerText = "Sim";
    spanName.innerText = "Bidu";
    spanSpecie.innerText = "Cachorro";

    pAvailable.append(spanAvailable);
    pName.append(spanName);
    pSpecie.append(spanSpecie);
    divDescription.append(pName, pSpecie, pAvailable, btnAtt);
    li.append(imgPets, divDescription);

    ul.append(li);

}

renderCardsPets()

/*

<li class="cardPet flex">
    <div class="imgPets"></div>
    <div class="divDescription flex flex-col justify-center">
        <p id="" class="font-size-4 color-brand-1">Nome: <span class="font-size-4 color-black-1">Bidu</span></p>
        <p id="" class="font-size-4 color-brand-1">Espécie: <span class="font-size-4 color-black-1">Cachorro</span></p>
        <p id="" class="font-size-4 color-brand-1">Adotável: <span class="font-size-4 color-black-1">Sim</span></p>
        <button>Atualizar</button>
    </div>
</li>

*/

import {getProfile} from "../../scripts/apiUser.js"

async function renderInfoProfile(){
    const infoProfile = await getProfile("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc4NDEwMjksImV4cCI6MTY2ODQ0NTgyOSwic3ViIjoiYzQ4YjNiZGUtZjNmZS00NDRjLWIwMzAtYTg3YTFiZTQ2OWU1In0.BBH4C2YBhqecLR1LBlB0UAEXah0OtLUeECasEGsMTUk")
    const sectionUserProfile = document.querySelector(".sectionUserProfile")

    sectionUserProfile.insertAdjacentHTML("beforeend",`
    <div class="boxProfile flex flex-col items-center justify-center">                
        <img src=${infoProfile.avatar_url} alt="" class="imgProfile margin-bottom-small">
        <div class="boxText flex flex-col gap-small items-center">
            <h2 class="TextTitle color-brand-1 font-size-2">Dados pessoais</h2>
            <div class="TextCont flex flex-col margin-bottom-small">
                <p class="textName font-weight-3"><strong class="color-brand-1">Nome: </strong>${infoProfile.name}</p>
                <p class="textEmail font-weight-3"><strong class="color-brand-1">E-mail: </strong>${infoProfile.email}</p>
            </div>
            <div class="TextBtns flex gap-small">
                <button class="refreshBtn">Atualizar informações</button>
                <button class="deleteBtn">Deletar conta</button>
            </div>
        </div>
    </div>`)
}

renderInfoProfile()


