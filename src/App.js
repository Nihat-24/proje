const h1 = document.getElementsByTagName("h1")[0]
const input = document.getElementById("input-add")
const addbutton = document.querySelector(".input-area").lastElementChild
const clearbutton = document.querySelector(".clear-btn")
const ul = document.querySelector(".todo-list")

let value = []
let idData = []
let isEditing = false
let editingSpan = null

input.addEventListener("change", text)
addbutton.addEventListener("click", addit)
clearbutton.addEventListener("click", deleteAll)



// tudulari duzeltme 
function fixs(editButton, span, li) {
    const buttonns = editButton;
    const textis = span
    buttonns.addEventListener("click", trues);
}

function trues(e) {
    isEditing = true
    editingSpan = e.target.parentElement.parentElement.querySelector(".remd")
    input.focus();
    input.value = ""
    input.style.backgroundColor = "#87ceeb"
    input.style.color = "#970000"
    input.addEventListener("keyup", function (e) {
        value = e.target.value
        console.log(value)
    })
    idData.push(e.target.parentElement.parentElement.id)
}



// todunu silme
function remove(e) {
    e.target.parentElement.parentElement.remove()

}
// todulari silme
function deleteAll(e) {
    const items = [...ul.children]
    items.forEach(item => {
        if (item.classList.contains("completed")) {
            item.remove()
        }
    })
}
// todu elave etme
function addit(e) {
    if (isEditing) {
        editingSpan.textContent = value
        isEditing = false
        editingSpan = null
        return
    }

    const { li, span, editButton } = List(value)
    span.textContent = value

    if (value === "") {
        alert("bir todo elave ediniz")
    }
    else if (value !== "") (
        ul.appendChild(li)
    )
    fixs(editButton, span, li)
}
// input texti
function text(e) {
    value = e.target.value

}
// list elementleri
function List() {
    const li = document.createElement("li");
    li.classList.add("completed");
    li.id = Math.floor(Math.random() * 100000)

    const span = document.createElement("span");
    span.classList.add("remd");


    const div = document.createElement("div");
    div.classList.add("actions");

    const editButton = document.createElement("button")
    editButton.classList.add("edit-btn");
    editButton.textContent = "Düzəlt"


    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "sil"
    deleteButton.addEventListener("click", remove)

    li.appendChild(span)
    li.appendChild(div)
    div.appendChild(editButton)
    div.appendChild(deleteButton)

    return { li, span, deleteButton, editButton }
}