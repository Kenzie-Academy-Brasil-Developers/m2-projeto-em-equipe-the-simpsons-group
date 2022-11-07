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