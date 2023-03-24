let secY1 = document.getElementById('sec-1')
let secY2 = document.getElementById('sec-2')
let secY3 = document.getElementById('sec-3')
let checkboxY1 = document.getElementById('checkbox-1')
let checkboxY2 = document.getElementById('checkbox-2')
let checkboxY3 = document.getElementById('checkbox-3')

//yearly
checkboxY1.addEventListener('click', () => {
    if (checkboxY1.checked) {
        secY1.style.border = '1px solid rgb(64, 12, 209)'
        secY1.style.backgroundColor = "rgba(248,249,254,255)"
    } else {
        secY1.style.border = '1px solid gainsboro'
        secY1.style.backgroundColor = "white"
    }
})
checkboxY2.addEventListener('click', () => {
    if (checkboxY2.checked) {
        secY2.style.border = '1px solid rgb(64, 12, 209)'
        secY2.style.backgroundColor = "rgba(248,249,254,255)"
    } else {
        secY2.style.border = '1px solid gainsboro'
        secY2.style.backgroundColor = "white"
    }
})
checkboxY3.addEventListener('click', () => {
    if (checkboxY3.checked) {
        secY3.style.border = '1px solid rgb(64, 12, 209)'
        secY3.style.backgroundColor = "rgba(248,249,254,255)"
    } else {
        secY3.style.border = '1px solid gainsboro'
        secY3.style.backgroundColor = "white"
    }
})

let secM1 = document.getElementById('sec-m-1')
let secM2 = document.getElementById('sec-m-2')
let secM3 = document.getElementById('sec-m-3')
let checkboxM1 = document.getElementById('checkbox-m-1')
let checkboxM2 = document.getElementById('checkbox-m-2')
let checkboxM3 = document.getElementById('checkbox-m-3')

checkboxM1.addEventListener('click', () => {
    if (checkboxM1.checked) {
        secM1.style.border = '1px solid rgb(64, 12, 209)'
        secM1.style.backgroundColor = "rgba(248,249,254,255)"
    } else {
        secM1.style.border = '1px solid gainsboro'
        secM1.style.backgroundColor = "white"
    }
})
checkboxM2.addEventListener('click', () => {
    if (checkboxM2.checked) {
        secM2.style.border = '1px solid rgb(64, 12, 209)'
        secM2.style.backgroundColor = "rgba(248,249,254,255)"
    } else {
        secM2.style.border = '1px solid gainsboro'
        secM2.style.backgroundColor = "white"
    }
})
checkboxM3.addEventListener('click', () => {
    if (checkboxM3.checked) {
        secM3.style.border = '1px solid rgb(64, 12, 209)'
        secM3.style.backgroundColor = "rgba(248,249,254,255)"
    } else {
        secM3.style.border = '1px solid gainsboro'
        secM3.style.backgroundColor = "white"
    }
})