
let homepage=document.querySelector('.homepage')
let calcIcon=document.querySelector('.calc-icon')
let bmiIcon=document.querySelector('.bmi-icon')
let basketIcon=document.querySelector('.basket-icon')



let plusIconSearch=document.querySelector('.plus-search')
let searchContainer=document.querySelector('.search-container')
let searchIcon=document.querySelector('.search-icon')




searchIcon.addEventListener('click',function(){
    searchContainer.style.display="block"
    searchContainer.classList.add('util-class')
})

plusIconSearch.addEventListener('click',function(){
    searchContainer.classList.remove('util-class')
})

calcIcon.addEventListener('click',function(){
    window.location.href="calculator.html"
})


bmiIcon.addEventListener('click',function(){
    window.location.href="bmi.html"
})

basketIcon.addEventListener('click',function(){
    window.location.href="basket.html"
})

homepage.addEventListener('click',function(){
    window.location.href="index.html"
})




let buttonSearch=document.querySelector('.btn-search')


buttonSearch.addEventListener('click',function(e){
    e.preventDefault()
      
        window.location.href="https://www.google.com/search"

})

