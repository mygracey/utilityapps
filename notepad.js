let notepadContainer=document.querySelector('.notepad-container')
let faButton=document.querySelector('.plus-icon-notepad')
let notepadIcon=document.querySelector('.notepad-icon')
let textarea=document.querySelector('.textarea')
let output=document.querySelector('.output')
let buttonSubmit=document.querySelector('.btn-submit')
let buttonDelete=document.querySelector('.btn-delete')
let displayArea=document.querySelector('.display-area')
let buttonGroup=document.querySelector('.button-group')

notepadIcon.addEventListener('click',function(){
    // window.location.href="notepad.html"
    notepadContainer.style.display="block"
    notepadContainer.classList.add('util-class')
})
faButton.addEventListener('click',function(){
     notepadContainer.style.display="none"
    // notepadContainer.classList.remove('util-class')
   
})


buttonSubmit.addEventListener('click',function(){
    let li=document.createElement('li')
    
    li.innerText=textarea.value

    output.append(li)

    textarea.value=""


})


    buttonDelete.addEventListener('click',function(){
    textarea.style.opacity="0"
    displayArea.style.opacity="0"
    buttonGroup.style.opacity="0"
})

