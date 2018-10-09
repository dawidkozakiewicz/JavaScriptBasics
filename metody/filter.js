let digits = [123, 87, 90, 37, 22, 213]

let newDigits = digits.filter(function(digit) {
  return (digit * 2) < 300
})

console.log(newDigits)