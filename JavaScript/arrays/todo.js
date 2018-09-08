const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

todos.splice(2, 1)
console.log(todos)
todos.push('Buy coffee')
console.log(todos)
todos.shift()
console.log(todos)
console.log(`You have ${todos.length} todos!`)
console.log(todos)