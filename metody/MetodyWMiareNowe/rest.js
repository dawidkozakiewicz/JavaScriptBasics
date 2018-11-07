// Parametr rest umożliwia dostęp do zestawu argumentów funkcji jako tablicy.
// Jest to alternatywa dla użycia tablicy jako argumentu funkcji.
// W poniższym przykładzie parametr rest służy do przechwytywania wszystkich argumentów funkcji i zapisywania ich w tablicy numbers.
// Daje to elastyczną funkcję, dzięki której można obliczyć średnie bez względu na liczbę podawanych liczb.

const calculateAverage = (...numbers) => {
    let sum = 0
    numbers.forEach((num) => sum += num)
    return sum / numbers.length
}

console.log(calculateAverage(0, 100, 88, 64)) // Will print: 63




// Parametr rest może być używany z normalnymi funkcjami lub funkcjami strzałkowymi.
// Może być używany również z innymi argumentami.
// Poniższy kod właśnie to robi. 
// Pierwszym argumentem jest nazwa drużyny, która jest wyciągnięta do własnej zmiennej teamName. 
// Drugim argumentem jest nazwa trenera, która również została wyciągnięta na własną zmienną. 
// Wreszcie, parametr rest używany jest do przechwytywania wszystkich innych argumentów i przechowywania ich w tablicy graczy.


const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')