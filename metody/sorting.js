let digits = [123.56, 87.44, 37.03, 22, 213, 90]
console.log(digits)

let newDigits = digits.filter((digit) => {
    return Number.isInteger(digit)
})

console.log(newDigits)

// newDigits.sort((a, b) => {

//     if (a > b) {
//         return -1
//     } else if (a < 1) {
//         return 1
//     } else {
//         return 0
//     }
// })


newDigits.sort((a, b) => {

    return a - b

})





console.log(newDigits)