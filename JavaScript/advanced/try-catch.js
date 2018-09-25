const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25
    } else {
        throw Error('Argument must be a number')
    }
}

console.log(getTip('u'))
console.log('dalsza część kodu')

// try {
//     const result = getTip('a')
//     console.log(result)
// } catch (e) {
//     console.log('catch block is running')
// }

// console.log('i się zesrało')
