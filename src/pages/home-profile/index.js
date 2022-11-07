import {getProfile} from "../../scripts/apiUser.js"
import {createModal} from "../../scripts/modal.js"

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