let display = document.querySelector('p')
const keypad = document.querySelectorAll('.key')
const mathOps = document.querySelectorAll('.op')
const button = document.querySelector('button')
const enterButton = document.getElementById('enter')
const clearDisplay = document.getElementById('clear')


const operationElements = []

let keyValue
let operValue
display.innerText = Number('0')

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

function calculus() {
    data1 = Number(operationElements[0])
    data2 = Number(operationElements[1])
    if (operValue === '+') {
        result = data1 + data2
    } else if (operValue === "-") {
        result = data1- data2
    } else if (operValue === "*") {
        result = data1*data2
    } else {
        if (data2 === 0) {
            result = "Error: operation impossible"
        } else {
            result = data1 / data2
        }
    }
    console.log(result)
    display.innerText = result
    operationElements.splice(1)
    console.log(operationElements.length)
    operationElements[0] = result
    console.log(operationElements[0])
}

function clearScreen() {
    display.innerText = Number('0')
    operationElements.length = 0
    console.log(operationElements)
}

enterButton.addEventListener('click', calculus)
clearDisplay.addEventListener('click', clearScreen)