import { refreshUsers, deleteUsers } from "./apiUser.js";
import { deletePet } from "../scripts/apiPets.js";
import {apiRequestAllAdoptions,apiRequestDeleteAdoption} from "./apiAdoptions.js"

export function modalRegisterPet() {

    const body = document.querySelector("body");

    const modalWrapper = document.createElement("div");
    const modal = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalBody = document.createElement("div");
    const title = document.createElement("p");
    const btnClose = document.createElement("img");
    const inputName = document.createElement("input");
    const selectSpecies = document.createElement("select");
    const inputBread = document.createElement("input");
    const inputAvatar = document.createElement("input");
    const btnRegister = document.createElement("button");
    const form = document.createElement("form");

    modalWrapper.classList.add("modalWrapper", "flex", "justify-center", "items-center");
    modal.classList.add("modalAttPet");
    modalHeader.classList.add("modalHeader", "flex", "justify-end", "items-center");
    modalBody.classList.add("modalBody", "flex", "justify-center", "items-center", "flex-col");
    title.classList.add("font-size-1", "color-brand-1");
    form.classList.add("flex", "flex-col");
    inputName.id = "name";
    inputAvatar.id = "avatar_url";
    inputBread.id = "bread";
    inputAvatar.required = "true";
    inputBread.required = "true";
    inputName.required = "true";
    selectSpecies.required = "true";
    selectSpecies.id = "species";
    btnRegister.classList.add("button-default-brand-1");
    btnRegister.type = "submit";

    btnRegister.innerText = "Cadastrar";
    inputAvatar.placeholder = "Avatar";
    inputBread.placeholder = "Raça";
    inputName.placeholder = "Nome";
    selectSpecies.placeholder = "Espécie";
    btnClose.src = "../../assets/img/Vector.svg";
    title.innerText = "Cadastrar Pet";

    selectSpecies.insertAdjacentHTML("beforeend",`
    <option value="">Espécie</option>
    <option value="Cachorro">Cachorro</option>
    <option value="Gato">Gato</option>
    <option value="Aves">Ave</option>
    <option value="Repteis">Réptil</option>
    <option value="Outros">Outros</option>
    `)

    btnClose.addEventListener("click",() => {

        modalWrapper.remove();

    })

    form.append(inputName, selectSpecies, inputAvatar, inputBread,btnRegister);
    modalBody.append(title, form);
    modalHeader.append(btnClose);
    modal.append(modalHeader, modalBody);
    modalWrapper.append(modal);

    body.append(modalWrapper);

}

export function modalAttPet(id) {    
    const body = document.querySelector("body");

    const modalWrapper = document.createElement("div");
    const boxDelete = document.createElement("div");
    const modal = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalBody = document.createElement("div");
    const title = document.createElement("p");
    const pDelete = document.createElement("p");
    const btnClose = document.createElement("img");
    const inputName = document.createElement("input");
    const inputBread = document.createElement("input");
    const inputAvatar = document.createElement("input");
    const selectSpecies = document.createElement("select");
    const btnRegister = document.createElement("button");
    const btnDelete = document.createElement("button");
    const form = document.createElement("form");
    
    boxDelete.classList.add("boxDelete", "flex", "flex-col", "items-center", "gap-small");
    modalWrapper.classList.add("modalWrapper", "flex", "justify-center", "items-center");
    modal.classList.add("modalAttPet");
    modalHeader.classList.add("modalHeader", "flex", "justify-end", "items-center");
    modalBody.classList.add("modalBody", "flex", "justify-center", "items-center", "flex-col");
    title.classList.add("font-size-1", "color-brand-1");
    pDelete.classList.add("color-brand-1");
    form.classList.add("flex", "flex-col");
    inputAvatar.id = "avatar_url";
    inputName.id = "name";
    inputBread.id = "bread";
    selectSpecies.id = "species";
    btnRegister.classList.add("button-default-brand-1");
    btnDelete.classList.add("button-outline-red-1");
    btnRegister.type = "submit";

    inputAvatar.required = "true";
    inputBread.required = "true";
    inputName.required = "true";
    selectSpecies.required = "true";

    inputName.placeholder = "Nome";    
    inputAvatar.placeholder = "Avatar";
    inputBread.placeholder = "Raça";
    btnRegister.innerText = "Atualizar";
    btnDelete.innerText = "Excluir";
    btnClose.src = "../../assets/img/Vector.svg";
    title.innerText = "Atualizar Pet";
    pDelete.innerText = "ou"
    

    selectSpecies.insertAdjacentHTML("beforeend",`
    <option value="">Espécie</option>
    <option value="Cachorro">Cachorro</option>
    <option value="Gato">Gato</option>
    <option value="Aves">Ave</option>
    <option value="Repteis">Réptil</option>
    <option value="Outros">Outros</option>
    `)

    btnClose.addEventListener("click",() => {

        modalWrapper.remove();

    })

    btnDelete.addEventListener("click", async() => {

        deletePet(id);

    })

    boxDelete.append(pDelete, btnDelete);
    form.append(inputName, selectSpecies,inputBread,inputAvatar, btnRegister);
    modalBody.append(title, form, boxDelete);
    modalHeader.append(btnClose);
    modal.append(modalHeader, modalBody);
    modalWrapper.append(modal);

    body.append(modalWrapper);

}

export function modalRefreshProfile() {

    const body = document.querySelector("body");

    const modalWrapper = document.createElement("div");
    const modal = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalBody = document.createElement("div");
    const title = document.createElement("p");
    const btnClose = document.createElement("img");
    const inputName = document.createElement("input");
    const inputAvatar = document.createElement("input");
    const btnRefresh = document.createElement("button");
    const form = document.createElement("form");

    modalWrapper.classList.add("modalWrapper", "flex", "justify-center", "items-center");
    modal.classList.add("modalAttPet");
    modalHeader.classList.add("modalHeader", "flex", "justify-end", "items-center");
    modalBody.classList.add("modalBody", "flex", "justify-center", "items-center", "flex-col");
    title.classList.add("font-size-1", "color-brand-1", "font-weight-2");
    form.classList.add("flex", "flex-col");
    inputName.id = "name";
    inputAvatar.id = "avatar_url";
    btnRefresh.classList.add("button-default-brand-1");
    btnRefresh.type = "submit";    

    btnRefresh.innerText = "Atualizar";    
    inputName.placeholder = "Nome";
    inputAvatar.placeholder = "Avatar";
    btnClose.src = "../../assets/img/Vector.svg";
    title.innerText = "Atualizar Perfil";

    btnRefresh.addEventListener("click", async(e)=>{
        const elements = [...form.elements];

        e.preventDefault()

        const body = {}

        elements.forEach((elem)=>{
            
            if (elem.value !="" && elem.tagName == "INPUT"){
                body[elem.id] = elem.value;
                
            }             

        })
        
        await refreshUsers(body)
        setTimeout(() => {
            window.location.reload()
        }, 3500);
    })

    btnClose.addEventListener("click",() => {

        modalWrapper.remove();

    })

    form.append(inputName,inputAvatar, btnRefresh);
    modalBody.append(title, form);
    modalHeader.append(btnClose);
    modal.append(modalHeader, modalBody);
    modalWrapper.append(modal);

    body.append(modalWrapper);

}

export function modalDeleteProfile() {

    const body = document.querySelector("body");

    const modalWrapper = document.createElement("div");
    const modal = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalBody = document.createElement("div");
    const title = document.createElement("p");
    const btnClose = document.createElement("img");
    const modalButtons = document.createElement("div")
    const btnCancel = document.createElement("button");
    const btnDelete = document.createElement("button");

    modalWrapper.classList.add("modalWrapper", "flex", "justify-center", "items-center");
    modal.classList.add("modalAttPet");
    modalHeader.classList.add("modalHeader", "flex", "justify-end", "items-center");
    modalBody.classList.add("modalBody", "flex", "justify-center", "items-center", "flex-col");
    title.classList.add("font-size-1", "color-brand-1", "font-weight-2");    
    modalButtons.classList.add("modalButtons", "flex", "flex-col", "gap-small")
    btnCancel.classList.add("button-default-brand-1");
    btnDelete.classList.add("button-outline-red-1");

    btnCancel.innerText = "Não desejo deletar minha conta"; 
    btnDelete.innerText = "Quero deletar minha conta"; 
    btnClose.src = "../../assets/img/Vector.svg";
    title.innerText = "Deseja mesmo deletar sua conta?";

    btnClose.addEventListener("click",() => {

        modalWrapper.remove();

    })

    btnDelete.addEventListener("click", async ()=>{
        await deleteUsers()
        setTimeout(() => {            
        localStorage.removeItem("@kenziePet:Token")
        localStorage.removeItem("@KenziePets:SimpsonsMode")
        window.location.replace("../home/index.html")
        }, 3500);
    })

    btnCancel.addEventListener("click",() => {

        modalWrapper.remove();

    })

    modalButtons.append(btnCancel,btnDelete)
    modalBody.append(title, modalButtons);
    modalHeader.append(btnClose);
    modal.append(modalHeader, modalBody);
    modalWrapper.append(modal);

    body.append(modalWrapper);

}
