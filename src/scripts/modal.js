export function createModal(modalToRender){
    const body = document.querySelector("body");

    const modalBg = document.createElement("div");
    const modalBox = document.createElement("div");
    const modalClose = document.createElement("span");

    modalBg.classList = "modalBg flex items-center justify-center";
    modalBox.classList = "modalBox";
    modalClose.classList = "modalClose";

    modalClose.innerText = "X";
    modalClose.addEventListener("click",()=>{
        window.location.reload()
        modalBg.remove()
    })

    modalBox.append(modalToRender,modalClose)
    modalBg.appendChild(modalBox)
    body.appendChild(modalBg)

}

export function modalRegisterPet() {

    const body = document.querySelector("body");

    const modalWrapper = document.createElement("div");
    const modal = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalBody = document.createElement("div");
    const title = document.createElement("p");
    const btnClose = document.createElement("img");
    const inputName = document.createElement("input");
    const inputSpecies = document.createElement("input");
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
    inputSpecies.id = "species";
    btnRegister.classList.add("button-outline-brand-1");
    btnRegister.type = "submit";

    btnRegister.innerText = "Cadastrar";
    inputAvatar.placeholder = "Avatar";
    inputName.placeholder = "Nome";
    inputSpecies.placeholder = "Raça";
    btnClose.src = "../../assets/img/Vector.svg";
    title.innerText = "Cadastrar Pet";

    btnClose.addEventListener("click",() => {

        modalWrapper.remove();

    })

    form.append(inputName, inputSpecies, inputAvatar, btnRegister);
    modalBody.append(title, form);
    modalHeader.append(btnClose);
    modal.append(modalHeader, modalBody);
    modalWrapper.append(modal);

    body.append(modalWrapper);

}

export function modalAttPet() {

    const body = document.querySelector("body");

    const modalWrapper = document.createElement("div");
    const modal = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalBody = document.createElement("div");
    const title = document.createElement("p");
    const btnClose = document.createElement("img");
    const inputAvatar = document.createElement("input");
    const btnRegister = document.createElement("button");
    const form = document.createElement("form");

    modalWrapper.classList.add("modalWrapper", "flex", "justify-center", "items-center");
    modal.classList.add("modalAttPet");
    modalHeader.classList.add("modalHeader", "flex", "justify-end", "items-center");
    modalBody.classList.add("modalBody", "flex", "justify-center", "items-center", "flex-col");
    title.classList.add("font-size-1", "color-brand-1");
    form.classList.add("flex", "flex-col");
    inputAvatar.id = "avatar_url";
    btnRegister.classList.add("button-outline-brand-1");
    btnRegister.type = "submit";

    btnRegister.innerText = "Atualizar";
    inputAvatar.placeholder = "Avatar";
    btnClose.src = "../../assets/img/Vector.svg";
    title.innerText = "Atualizar Pet";

    btnClose.addEventListener("click",() => {

        modalWrapper.remove();

    })

    form.append(inputAvatar, btnRegister);
    modalBody.append(title, form);
    modalHeader.append(btnClose);
    modal.append(modalHeader, modalBody);
    modalWrapper.append(modal);

    body.append(modalWrapper);

}

/*

<div class="modalWrapper flex justify-center items-center">
    <div class="modalAttPet">
            <div class="modalHeader flex justify-end items-center">
                <img src="../../assets/img/Vector.svg" alt="">
            </div>
            <div class="modalBody flex justify-center items-center flex-col">
                <p class="font-size-1 color-brand-1">Cadastrar Pet</p>

                <form class="flex flex-col">
                    <input type="text" id="name" placeholder="Nome" >
                    <input type="text" id="species" placeholder="Raça">
                    <input type="text" id="avatar_url" placeholder="Avatar">
                    <button class="button-outline-brand-1">Cadastrar</button>
                </form>
            </div>
    </div>
</div>

*/