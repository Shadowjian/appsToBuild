window.addEventListener('load', ()=>{
    const form = document.querySelector('#form-app')
    const btnAdd = document.querySelector("#btn-add")
    const input = document.querySelector("#input-app")
    const appsContainer = document.querySelector("#apps-container")
    const nothingHere = document.querySelector("#nothing")
    
    
    
    
    // nothingHere.classList.remove('hidden')
    
    
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    nothingHere.classList.add('hidden')
    const appContainer = document.createElement('div')
        appContainer.classList.add("app-container")
        appsContainer.appendChild(appContainer)    

    const newAppcheckBox = document.createElement('input')
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

    const newAppText = document.createElement('input')
        newAppText.classList.add('the-app')
        newAppText.value = input.value
        newAppText.readOnly = true
        appContainer.appendChild(newAppText)
    
    const newAppBtnEdit = document.createElement('button')
        newAppBtnEdit.classList.add("btn")
        newAppBtnEdit.innerHTML = "<i class='fa-regular fa-pen-to-square'></i>"
        appContainer.appendChild(newAppBtnEdit)
        newAppBtnEdit.addEventListener('click', ()=>{
            newAppBtnEdit.classList.add('hidden')
            newAppBtnDone.classList.remove('hidden')
            newAppText.readOnly = false
        })

    const newAppBtnDone = document.createElement('button')
        newAppBtnDone.classList.add("btn")
        newAppBtnDone.classList.add("hidden")
        newAppBtnDone.innerHTML = "<i class='fa-regular fa-square-check'></i>"
        appContainer.appendChild(newAppBtnDone)
        newAppBtnDone.addEventListener('click', ()=>{
            newAppBtnDone.classList.add('hidden')
            newAppBtnEdit.classList.remove('hidden')
            newAppText.readOnly = true
        })

    const newAppBtnDelete = document.createElement('button')
        newAppBtnDelete.classList.add("btn")
        newAppBtnDelete.classList.add("btn-delete")
        newAppBtnDelete.classList.add("hidden")
        newAppBtnDelete.innerHTML = "<i class='fa-regular fa-trash-can'></i>"
        appContainer.appendChild(newAppBtnDelete)
        
        newAppBtnDelete.addEventListener('click', ()=>{
            appContainer.remove()
        })

    input.value = ""
    const appsCount = appsContainer.childElementCount
    if (appsCount == 3) {
        btnAdd.disabled=true
        input.disabled=true
        input.placeholder = "You've reached your max app to build"
        alert("max app to build")
    } 

   
      
})
    
})
