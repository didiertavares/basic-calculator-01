const display = document.querySelector('p')
const keypad = document.querySelectorAll('.key')
const mathOps = document.querySelectorAll('.op')
const button = document.querySelector('button')
const enterButton = document.getElementById('enter')

const operationElements = []

let keyValue
let operValue

keypad.forEach(button => {
    button.addEventListener('click', function() {
        keyValue = this.value
        display.innerText = keyValue
        console.log('clicked button value:', keyValue)
        operationElements.push(keyValue)
        console.log(operationElements)
    })
})

mathOps.forEach(button => {
    button.addEventListener('click', function() {
        operValue = this.value
        display.innerText = operValue
        console.log('clicked button op value:', operValue)
    })
})

let result
let data1
let data2

// function enter()    {
//     button.addEventListener('click', function() {
//     if (operValue=+) {
//         add()
//     } else if (operValue=-) {
//         sub()
//     } else if (operValue = *) {
//         mult()
//     } else {
//         div()
//     }
//     })
// }

function add()  {
    result = operationElements[0] + operationElements[1] 
}
function sub()  {
    result = operationElements[0] - operationElements[1]
}
function mult() {
    result = operationElements[0] * operationElements[1]
}
function div()  {
    if (operationElements[1]=0) {
        alert("Error: impossible operation")
    } else {result = operationElements[0] / operationElements[1]}
}
let selectedNumOp

// function showClick()    {
//     console.log('keypad was clicked')
//     alert('clicked!')
// }

// function selection() {

//         operationElements.push(selectedNumOp)
//     console.log(selectedNumOp)
// }

// function display()  {
//     numberDisplay.innerText = 
// }