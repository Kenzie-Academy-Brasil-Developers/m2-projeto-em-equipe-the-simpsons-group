export function toast (status,mensage){
    const body = document.querySelector("body");

    body.insertAdjacentHTML("beforeend",`
    <div class="toastContainer ${status} flex justify-center">
        <div class="toastHeader flex items-center justify-center gap3">
        <span class="toastTitle font-weight-2 font-size-3 color-white-1">${mensage}</span>
        </div>
    </div>
    `)
}