let inputfield=document.querySelector('.inputfield')
let submitButton=document.querySelector('.btn-submit')
let output=document.querySelector('.output')
let displayArea=document.querySelector('.display-shopping-list')


submitButton.addEventListener('click',function(){
    let li=document.createElement('li')
    li.innerText=inputfield.value

    displayArea.style.display="block"
    output.append(li)

    inputfield.value=""

    li.addEventListener('dblclick',function(){
        li.remove()
    })
    
})

inputfield.addEventListener('keypress',function(e){
    if(e.key==="Enter"){
         let li=document.createElement('li')
         li.innerText=inputfield.value

         displayArea.style.display="block"
         output.append(li)

         inputfield.value=""

         li.addEventListener('dblclick',function(){
            li.remove()
         })
    }
    
})