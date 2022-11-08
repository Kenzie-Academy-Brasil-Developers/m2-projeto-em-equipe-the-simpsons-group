
import { getProfile } from "../../scripts/apiUser.js";
import { getMyPets } from "../../scripts/apiPets.js";
import {createModal, modalAttPet, modalRegisterPet} from "../../scripts/modal.js"


async function renderCardsPets(){

    const pets =  await getMyPets("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc4NDkzNzYsImV4cCI6MTY2ODQ1NDE3Niwic3ViIjoiYzQ4YjNiZGUtZjNmZS00NDRjLWIwMzAtYTg3YTFiZTQ2OWU1In0.1Uvf8Wx7TYKBBIcHE9H-Rp4Npt8p2BcjtbgcDVvOD-4");
    const ul = document.getElementById("ulCardsPets");
    ul.innerHTML = ""

    pets.forEach(element => {
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
        btnAtt.classList.add("button-default-brand-1");

        btnAtt.addEventListener("click",() => {

            modalAttPet();

        })

        pName.innerText = "Nome:";
        pSpecie.innerText = "Espécies:";
        pAvailable.innerText = "Adotável:";
        btnAtt.innerText = "Atualizar";
        if(element.available_for_adoption === true){

            spanAvailable.innerText = "Sim";

        }else {

            spanAvailable.innerText = "Não";

        }
        imgPets.src = element.avatar_url;
            
            imgPets.addEventListener("error",(e)=>{
                imgPets.src = "https://cdn3.iconfinder.com/data/icons/web-development-and-programming-2/64/development_Not_Found-1024.png"
            })

        spanName.innerText = element.name;
        spanSpecie.innerText = element.species;

        pAvailable.append(spanAvailable);
        pName.append(spanName);
        pSpecie.append(spanSpecie);
        divDescription.append(pName, pSpecie, pAvailable, btnAtt);
        li.append(imgPets, divDescription);

        ul.append(li);
    });

}

const btnRegister = document.getElementById("btnRegisterNewPet");

btnRegister.addEventListener("click",() => {

    modalRegisterPet();

})


renderCardsPets()



async function renderInfoProfile(){
    const infoProfile = await getProfile("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc4NDkzNzYsImV4cCI6MTY2ODQ1NDE3Niwic3ViIjoiYzQ4YjNiZGUtZjNmZS00NDRjLWIwMzAtYTg3YTFiZTQ2OWU1In0.1Uvf8Wx7TYKBBIcHE9H-Rp4Npt8p2BcjtbgcDVvOD-4")
    const sectionUserProfile = document.querySelector(".sectionUserProfile")

    sectionUserProfile.insertAdjacentHTML("beforeend",`
    <div class="boxProfile flex flex-col items-center justify-center">                
        <img src=${infoProfile.avatar_url} alt="" class="imgProfile margin-bottom-small">
        <div class="boxText flex flex-col gap-small items-center">
            <h2 class="textTitle color-brand-1 font-size-2">Dados pessoais</h2>
            <div class="textCont flex flex-col margin-bottom-small">
                <p class="textName font-weight-3"><strong class="color-brand-1">Nome: </strong>${infoProfile.name}</p>
                <p class="textEmail font-weight-3"><strong class="color-brand-1">E-mail: </strong>${infoProfile.email}</p>
            </div>
            <div class="TextBtns flex gap-small">
                <button class="refreshBtn button-default-brand-1">Atualizar informações</button>
                <button class="deleteBtn button-outline-red-1">Deletar conta</button>
            </div>
        </div>
    </div>`)

    const refreshBtn = document.querySelector(".refreshBtn")    
    const deleteBtn = document.querySelector(".deleteBtn")

    refreshBtn.addEventListener("click",()=>{
        createModal()
    })

    deleteBtn.addEventListener("click",()=>{
        createModal()
    })
    
}

renderInfoProfile()



    const btnBurguer = document.querySelector("#btn-burguer")
    const headerBoxRight = document.querySelector(".headerBoxRight")
    const btnHome = document.querySelector("#btn-home")
    const btnLogout = document.querySelector("#btn-logout")

    btnBurguer.addEventListener("click",(e)=>{

        if (headerBoxRight.classList.contains("show")){
            headerBoxRight.classList = "headerBoxRight justify-around items-center"
        }else{
            headerBoxRight.classList = "headerBoxRight justify-around items-center show"
        }
        
    })

    btnLogout.addEventListener("click",(e)=>{
        window.location.replace("../../index.html");
        localStorage.removeItem("@kenziePet:Token");
    })

    btnHome.addEventListener("click",(e)=>{
        window.location.replace("../home-user/index.html");
    })


