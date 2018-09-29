const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['a', 't']
    this.getPuzzle = function () {
        let puzzle = ''
    
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
    
        return puzzle
    }
}



const game1 = new Hangman('Cat', 2)
console.log(game1.getPuzzle())

const game2 = new Hangman('New Jersey', 4)
console.log(game2)
console.log(game2.getPuzzle())


console.log(game1.guessedLetters)