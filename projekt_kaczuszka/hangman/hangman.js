// Create a method for making a guess
// 1. Should accept a character for guessing
// 2. Should add unique guesses to list of guesses
// 3. Should decrement the guesses left if a unique guess isn't a match

const Hangman = function (word, remainingGuesses) {                      //konstruktor, w 41. będzie stworzona instancja ('cat', 2)
    this.word = word.toLowerCase().split('')                             //robi małe litery. (W instancji z 41. z 'cat' i stworzy tablicę ze znakami ['c', 'a', 't'])
    this.remainingGuesses = remainingGuesses                             //pozostała ilość odgadnięć. Dla instancji z 41. jest to: 2 (błędne odgadnięcia ją zminusują)
    this.guessedLetters = []                                             //przechowuje litery, które zgadywano, wrzuca je tutaj funkcja z 27. (prototyp)
}

Hangman.prototype.getPuzzle = function () {                              //prototyp funkcji, która zwróci po próbie odgadnięcia hasło (np: *a* dla 'cat' po zgadnięciu 'a')
    let puzzle = ''                                                      //przygotowanie zmiennej (typu string) dla wyświetlenia odgadywanego hasła

    this.word.forEach((letter) => {                                      //będzie przelatywać po tablicy z .7 (hasło rozbite na poszczególne litery) a elementy nazwie 'letter'
        if (this.guessedLetters.includes(letter) || letter === ' ') {    //jeśli tablica zawierająca odgadnięte litery (9.) ma daną letter, albo letter to spacja to:
            puzzle += letter                                             //wyświetl tę 'letter', czyli wrzuć do stringa puzle z 13.

        } else {
            puzzle += '*'                                                //jesli nie, to wrzuć do puzle gwiazdkę: '*'    
        }
    })

    return puzzle                                                        //wywołana funkcja zwraca stringa 'puzzle' czyli hasło z odgadniętymi (bądź nie) literami
}

Hangman.prototype.makeGuess = function (guess) {                         //prototyp funkcji, która będzie zarządzała ilością pozostałych odgadnięć i literami w guessedLetters z 9.
    guess = guess.toLowerCase()                                          //robi małą literę (jeśli nie jest mała) z litery przekazanej uderzeniem w klawisz w 46.
    const isUnique = !this.guessedLetters.includes(guess)                //isUnique jest prawdą jeśli tablica z 9. 'guessedLetters' (z już odgadniętymi literami) nie zawiera tej litery 
    const isBadGuess = !this.word.includes(guess)                        //isBadGuesss jest prawdą, jeśli hasło do odgadnięcia ('word' z 7.) nie zawiera tej litery

    if (isUnique) {                                                      //jeśli isUnique jest prawdą:  
        this.guessedLetters.push(guess)                                  //wrzuć tę literę do tablicy z 9.
    }

    if (isUnique && isBadGuess) {                                        //jeśli w tablicy 'guessedLetters' 9. nie ma tej litery i w haśle ('word') też jej nie ma to:
        this.remainingGuesses--                                          //zmniejsz liczbę z remainingGuesses z 8. o jeden
    }
}

const game1 = new Hangman('Cat', 2)                                      //stwórz instancję za pomocą konstruktora z 6.

console.log(game1.getPuzzle())                                           //pokaż hasło (odgadnięte, bądź nie) używając funkcji getPuzzle z 12.
console.log(game1.remainingGuesses)                                      //pokaż ile jeszcze odgadnięć zostało

window.addEventListener('keypress', function (e) {                       //nasłuchuj w jaki klawisz uderzył użytkownik
    const guess = String.fromCharCode(e.charCode)                        //stwórz zmienną guess, do której będzie przypisany string - tłumaczenie charCode na literę.
    game1.makeGuess(guess)                                               //wykonaj funkcję z 27, do której jako argument wrzuć guess (czyli literę)
    console.log(game1.getPuzzle())                                       //ponownie pokaż hasło (odgadnięte, bądź nie) używając funkcji getPuzzle z 12.
    console.log(game1.remainingGuesses)                                  //ponownie pokaż ile jeszcze odgadnięć zostało
    console.log(game1.guessedLetters)                                    //pokaż jakie litery wrzuciłeś do tablicy z 9.
})