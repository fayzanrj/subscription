let step1Btn = document.getElementById('step-1-btn');
let step2Btn = document.getElementById('step-2-btn');
let step3Btn = document.getElementById('step-3-btn');
let step4Btn = document.getElementById('step-4-btn');
let step1Li = document.getElementById('step-1-li');
let step2Li = document.getElementById('step-2-li');
let step3Li = document.getElementById('step-3-li');
let step4Li = document.getElementById('step-4-li');

let step1 = document.getElementById('step-1')
let step2 = document.getElementById('step-2')
let step3 = document.getElementById('step-3')
let step4 = document.getElementById('step-4')

step4.style.display = "none"

let yearlyAdOns = document.getElementById('yearly-ad-ons')
let monthlyAdOns = document.getElementById('monthly-ad-ons')


// let plan = document.querySelectorAll('.plan')


// step-1 next btn function
const goToPage2 = (e)=>{
    e.preventDefault()
    step1Li.classList.remove('active');
    step2Li.classList.add('active')
    
    step1.style.display = "none"
    step2.style.display = "flex"
}

// step-2 next btn function
let selectedPlan;
let total ='';
let duration;
step2Btn.addEventListener('click',()=>{
    let moveToNext;    
    if(plan[0].style.border == '1px solid rgb(64, 12, 209)'){
        selectedPlan = 'arcade/mo'
        total = 9;
        duration = 'mo'
        moveToNext = true
    } else if(plan[1].style.border == '1px solid rgb(64, 12, 209)'){
        selectedPlan = 'advacned/mo'
        total = 12;
        duration = 'mo'
        moveToNext = true
    } else if(plan[2].style.border == '1px solid rgb(64, 12, 209)'){
        selectedPlan = 'pro/mo'
        total = 15;
        duration = 'mo'
        moveToNext = true
    } else if(plan[3].style.border == '1px solid rgb(64, 12, 209)'){
        selectedPlan = 'arcade/yr'
        total = 90;
        duration = 'yr'
        moveToNext = true
    } else if(plan[4].style.border == '1px solid rgb(64, 12, 209)'){
        selectedPlan = 'advanced/yr'
        total = 120;
        duration = 'yr'
        moveToNext = true
    } else if(plan[5].style.border == '1px solid rgb(64, 12, 209)'){
        selectedPlan = 'pro/yr'
        total = 150;
        duration = 'yr'
        moveToNext = true
    }

    if(moveToNext == true){
        step2.style.display = 'none'
        step3.style.display = 'flex';
    
        step2Li.classList.remove('active');
        step3Li.classList.add('active')
    
    }
})

let choosenPName =document.getElementById('choosen-p-name');
let choosenPPrice =document.getElementById('choosen-p-price');
let adOnS1N = document.getElementById('ad-on-s-1-n')
let adOnS1P = document.getElementById('ad-on-s-1-p')
let adOnS2N = document.getElementById('ad-on-s-2-n')
let adOnS2P = document.getElementById('ad-on-s-2-p')
let adOnS3N = document.getElementById('ad-on-s-3-n')
let adOnS3P = document.getElementById('ad-on-s-3-p')
let totalPer = document.getElementById('total-per');
let totalPrice = document.getElementById('total-p')
// let adOnSelected = document.getElementById('ad-ons-selected')
// step 3 next btn function
step3Btn.addEventListener('click',()=>{
    step3.style.display = "none"
    step4.style.display = 'flex'
    
    step3Li.classList.remove('active');
    step4Li.classList.add('active')

    if(checkboxM1.checked ){
        adOnS1N.style.display = 'block'
        adOnS1P.style.display = 'block'
        // adOnSelected.style.display = 'block'
        adOnS1N.innerHTML = "Online service"
        adOnS1P.innerHTML = "+$1/mo"
        total += 1
    } 
    if(checkboxM2.checked) {
        adOnS2N.style.display = 'flex'
        adOnS2P.style.display = 'flex'
        adOnS2N.innerHTML = "Larger storage"
        adOnS2P.innerHTML = "+$2/mo"
        total += 2
    } 
    if(checkboxM3.checked){
        adOnS3N.style.display = 'flex'
        adOnS3P.style.display = 'flex'
        adOnS3N.innerHTML = "Customizable profile"
        adOnS3P.innerHTML = "+$2/mo"
        total += 2
        
        // adOnSelected.style.display = 'block'
    } 
    if(checkboxY1.checked){
        adOnS1N.style.display = 'flex'
        adOnS1P.style.display = 'flex'
        adOnS1N.innerHTML = "Online service"
        adOnS1P.innerHTML = "+$10/mo"
        total += 10
        // adOnSelected.style.display = 'block'
    }
    if(checkboxY2.checked){
        adOnS2N.style.display = 'flex'
        adOnS2P.style.display = 'flex'
        adOnS2N.innerHTML = "Larger storage"
        adOnS2P.innerHTML = "+$20/mo"
        total += 20
        // adOnSelected.style.display = 'block'
    }
    if(checkboxY3.checked){
        adOnS3N.style.display = 'flex'
        adOnS3P.style.display = 'flex'
        adOnS3N.innerHTML = "Customizable profile"
        adOnS3P.innerHTML = "+$20/mo"
        total += 20
        // adOnSelected.style.display = 'block'
    }
    // console.log(adOnsSelected)
    if(selectedPlan == 'arcade/mo'){
        choosenPName.innerHTML = 'Arcade (Monthly)' 
        choosenPPrice.innerHTML = '9$/mo'
    } else if(selectedPlan == 'advacned/mo'){
        choosenPName.innerHTML = 'Advanced (Monthly)'
        choosenPPrice.innerHTML = '12$/mo'
    } else if(selectedPlan == 'pro/mo' ){
        choosenPName.innerHTML = 'Pro (Monthly)'
        choosenPPrice.innerHTML = '15$/mo'
    } else if(selectedPlan == 'arcade/yr'){
        choosenPName.innerHTML = 'Arcade (Yearly)'
        choosenPPrice.innerHTML = '90$/yr'
    } else if(selectedPlan == 'advanced/yr'){
        choosenPName.innerHTML = 'Advanced (Yearly)'
        choosenPPrice.innerHTML = '120$/yr'
    }else if(selectedPlan == 'pro/yr'){
        choosenPName.innerHTML = 'Pro (Yearly)'
        choosenPPrice.innerHTML = '150$/yr'
    }

    if(duration == 'mo'){
        totalPer.innerHTML = "Total (per month)"
        totalPrice.innerHTML = `$${total}/mo`;
    } else {
        totalPer.innerHTML = "Total (per year)"
        totalPrice.innerHTML = `$${total}/yr`;
    }

})
let thankYou = document.getElementById('thankyou')
step4Btn.addEventListener('click',()=>{
    step4.style.display = "none"
    thankYou.style.display = 'flex'
})

//switching b/w mothly and yearly plans and ad-ons
let monthlyBiling = document.getElementById('monthly-biling')
let yearlyBiling = document.getElementById('yearly-biling')
let bilingSwitch = document.getElementById('biling-switch')
bilingSwitch.addEventListener('click' , ()=>{
    if(bilingSwitch.checked){
        monthlyBiling.style.display = 'none'
        yearlyBiling.style.display = 'flex'

        monthlyAdOns.style.display = 'none'
        yearlyAdOns.style.display = 'block'
    } else {
        monthlyBiling.style.display = 'flex'
        yearlyBiling.style.display = 'none'

        monthlyAdOns.style.display = 'block'
        yearlyAdOns.style.display = 'none'
    }
})
