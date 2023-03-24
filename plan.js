let plan = document.querySelectorAll('.plan')

for (let i = 0; i < plan.length; i++) {
    plan[i].addEventListener('click', () => {
        if (plan[i].style.border == '1px solid rgb(64, 12, 209)') {
            plan[i].style.border = '1px solid gainsboro'
            plan[i].style.backgroundColor = "white"
            step2Btn.setAttribute('disabled','true')
        } else {
            step2Btn.removeAttribute('disabled')
            plan[i].style.border = '1px solid rgb(64, 12, 209)'
            plan[i].style.backgroundColor = "rgba(248,249,254,255)"
            for (let j = 0; j < plan.length; j++) {
                if (j != i) {
                    plan[j].style.border = '1px solid gainsboro'
                    plan[j].style.backgroundColor = "white"
                }
            }
        }
    })
}

console.log('script-plan')