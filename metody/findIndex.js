let numbers = [4238, 4738, 4553, 22, 980, 1098, 111]

let indexOfFirstMatchingNumber = numbers.findIndex(function (number) {
  return (number - 1000) > 3000
})

console.log(indexOfFirstMatchingNumber)