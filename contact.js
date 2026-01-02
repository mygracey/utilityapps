
let homepage=document.querySelector('.homepage')
  

homepage.addEventListener('click',function(){
    window.location.href="index.html"
})


// Contact form program



let yourname=document.getElementById('name')
let email=document.getElementById('email')
let mobileNumber=document.getElementById('mobile')
let message=document.getElementById('message')
let buttonSend=document.querySelector('.btn-send')
let messageStatus=document.getElementById('message-status')

let emailRegex=/[0-9a-zA-Z]+@[a-z]+\.[a-z]/

buttonSend.addEventListener('click',function(e){
e.preventDefault()

if(yourname.value=="" || email.value=="" || mobileNumber.value==""||message.value==""){
    messageStatus.innerText="Please fill all fields in this form."
    messageStatus.style.color="rgb(230, 13, 49)"
}
else if(emailRegex.test(email.value) && isFinite(+mobileNumber.value)){
    messageStatus.innerText="Your message is being sent..."
    messageStatus.style.color="yellowgreen"
    setTimeout(()=>{
         messageStatus.innerText="Your form was submitted successfully!"
         messageStatus.style.color="yellowgreen"
         
    },5000)
   
    setTimeout(()=>{
        window.location.href="index.html"
    },9000)
    
}

else{
    messageStatus.innerHTML="Please enter email and mobile number correctly"
    messageStatus.style.color="rgb(230, 13, 49)"
}
    
       
    
})
