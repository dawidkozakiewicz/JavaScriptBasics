let vegetables = ['tomato', 'carrot', 'potato', 'cucumber', 'pumpkin', 'carrot']

let firstMatchingVegetable = vegetables.find(function(vegetable) {
  return vegetable === 'carrot'
})

console.log(firstMatchingVegetable)
