// function sum(a, b) {
//     return a + b
// }
//
// function cube (a) {
//     return a ** 3
// }

// const sum = (a, b) => a + b
// const cube = a => a ** 3

// console.log(sum(41, 1))
// console.log(cube(2))

// setTimeout(function() {
//     console.log('After 1 seconds')
// }, 1000)

// setTimeout(() => console.log('After 1 seconds'), 1000)

// Context
function log() {
    console.log(this)
}

const arrowLog = () => console.log(this)

const person = {
    name: 'elena',
    age: 20,
    log: log,
    arrowLog: arrowLog
}

person.log()