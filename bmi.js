let height=document.querySelector('.height')
let weight=document.querySelector('.weight')
let buttonBmi=document.querySelector('.btn-submit')
let weightCondition=document.querySelector('.weight-condition')
let bmiRemark=document.querySelector('.bmi-remark')




buttonBmi.addEventListener('click',function(e){
    e.preventDefault()
    
    heightValue=height.value/100
    weightValue=weight.value

    bmi=weightValue/(heightValue * heightValue)

    console.log(bmi)
    weightCondition.value=bmi

    if(bmi<18.5){
        bmiRemark.innerText="under weight"
        setTimeout(()=>{
            window.location.reload()
        },5000)
    }
    else if(bmi>18.5 && bmi<24.9){
        bmiRemark.innerText="normal weight"
          setTimeout(()=>{
            window.location.reload()
        },5000)
    }
    else if(bmi>=25 && bmi <=29.9){
        bmiRemark.innerText="over weight"
          setTimeout(()=>{
            window.location.reload()
        },5000)
    }
    else if(bmi>=30){
        bmiRemark.innerText="obese"
          setTimeout(()=>{
            window.location.reload()
        },5000)
    }

})