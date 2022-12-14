const form = document.querySelector('#form-app')
const btnAdd = document.querySelector("#btn-add")
const input = document.querySelector("#input-app")
const nothingHere = document.querySelector("#nothing")
const appsContainer = document.querySelector("#apps-container")

const maxLimit = document.querySelector('#max-limit')
const limit = 5
maxLimit.innerHTML = `(max app to build: ${limit})`

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    nothingHere.classList.add('hidden')
    const appsCount = appsContainer.childElementCount + 1
    if (appsCount <= limit) {
    console.log(appsCount)

    // Create div container
    const appContainer = document.createElement('div')
        appContainer.classList.add("app-container")
        appsContainer.appendChild(appContainer)    

    // Create checkbox 
    const newAppcheckBox = document.createElement('input')
        newAppcheckBox.title = "Check if done"
        newAppcheckBox.classList.add("done")
        newAppcheckBox.type = "checkbox"
        appContainer.appendChild(newAppcheckBox)    

        newAppcheckBox.addEventListener('click', ()=>{
            if (newAppcheckBox.checked) {
                newAppText.style.textDecoration = "line-through"
                newAppBtnEdit.classList.add('hidden')
                newAppBtnDelete.classList.remove('hidden')
            } else {
                newAppText.style.textDecoration = "none"
                newAppBtnEdit.classList.remove('hidden')
                newAppBtnDelete.classList.add('hidden')
            }
        })

    // Create text input
    const newAppText = document.createElement('input')
        newAppText.classList.add('the-app')
        newAppText.value = input.value
        newAppText.readOnly = true
        appContainer.appendChild(newAppText)
    
    // Create edit button
    const newAppBtnEdit = document.createElement('button')
        newAppBtnEdit.classList.add("btn")
        newAppBtnEdit.title = "Edit"
        newAppBtnEdit.innerHTML = "<i class='fa-regular fa-pen-to-square'></i>"
        appContainer.appendChild(newAppBtnEdit)
        newAppBtnEdit.addEventListener('click', ()=>{
            newAppBtnEdit.classList.add('hidden')
            newAppcheckBox.classList.add('hidden')
            newAppBtnDone.classList.remove('hidden')
            newAppText.readOnly = false
            newAppText.style.color = 'orange' 
            newAppText.focus()
        })

    // Create save/done button
    const newAppBtnDone = document.createElement('button')
        newAppBtnDone.classList.add("btn")
        newAppBtnDone.title = "Save edit"
        newAppBtnDone.classList.add("hidden")
        newAppBtnDone.innerHTML = "<i class='fa-regular fa-square-check'></i>"
        appContainer.appendChild(newAppBtnDone)
        newAppBtnDone.addEventListener('click', ()=>{
            newAppBtnDone.classList.add('hidden')
            newAppcheckBox.classList.remove('hidden')
            newAppBtnEdit.classList.remove('hidden')
            newAppText.style.color = 'white' 
            newAppText.readOnly = true
        })

    // Create delete button
    const newAppBtnDelete = document.createElement('button')
        newAppBtnDelete.title = "delete task"
        newAppBtnDelete.classList.add("btn")
        newAppBtnDelete.classList.add("btn-delete")
        newAppBtnDelete.classList.add("hidden")
        newAppBtnDelete.innerHTML = "<i class='fa-regular fa-trash-can'></i>"
        appContainer.appendChild(newAppBtnDelete)
        
        newAppBtnDelete.addEventListener('click', ()=>{
            appContainer.remove()
            if (appsCount <= limit){
                input.disabled = false
                btnAdd.disabled = false
                input.value = ""
                input.style.color = "white"
            }
        })

    // Reset input value to ""
    input.value = ""
    
    // Set task limit
        
    } else {
        btnAdd.disabled=true
        input.disabled=true
        input.value = "You've reached your max app to build"
        alert("max app to build")
        input.style.color = "red"
    } 
})


// Creating the clock

const dateToday = document.querySelector("#date-today")
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function updateTime() {
    let today = new Date();
    let day = days[today.getDay()];
    let month = today.getMonth();
    let date = today.getDate();
    let hour = today.getHours()
    let min = today.getMinutes()
    let sec = today.getSeconds();
    
    dateToday.innerHTML = `${month}/${date} ${day} ${hour}:${min}:${sec}`
}

setInterval(updateTime, 1000)


