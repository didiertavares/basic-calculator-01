const numberDisplay = document.querySelector('p')
const keypad = document.querySelectorAll('.key')
const mathOps = document.querySelectorAll('.op')
const button = document.querySelector('button')
const enterButton = document.getElementById('enter')

const operationElements = []

let keyValue

keypad.forEach(button => {
    button.addEventListener('click', function() {
        keyValue = this.value
        console.log('clicked button value:', keyValue)
    })
})

mathOps.forEach(button => {
    button.addEventListener('click', function() {
        keyValue = this.value
        console.log('clicked button op value:', keyValue)
    })
})

let result
let data1
let data2


function add()  {
    result = data1 + data2 
}
function sub()  {
    result = data1 - data2
}
function mult() {
    result = data1 * data2
}
function div()  {
    if (data2=0) {
        alert("Error: impossible operation")
    } else {result = data1 / data2}
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