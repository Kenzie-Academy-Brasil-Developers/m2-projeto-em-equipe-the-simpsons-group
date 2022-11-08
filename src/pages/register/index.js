import { menu } from "../../scripts/menu.js"

function page(){
    localStorage.setItem("page", "register")
}

function callFunctions(){
    page()
    menu()
}

callFunctions()

