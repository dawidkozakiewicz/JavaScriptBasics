// Składnia spread może być używana podczas wywoływania funkcji.
// Pozwala to rozłożyć tablicę na jej indywidualne wartości i przekazać te wartości jako argumenty funkcji pojedynczej.
// Poniższy kod pokazuje, że dane, do których masz dostęp, mają graczy przechowywanych w tablicy.
// Problem polega na tym, że printTeam nie oczekuje argumentu tablicowego. 
// Oczekuje graczy jako indywidualnych argumentów.
// Używając składni spread, możesz wywołać printTeam z poprawnymi argumentami.

const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(', ')}`)
}

const team = {
    name: 'Libery',
    coach: 'Casey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}

printTeam(team.name, team.coach, ...team.players)


// Składnia spread może być również używana podczas tworzenia tablicy. 
// Przydaje się do dodawania elementów do tablicy lub kopiowania tablic. 
// Poniższy kod wykorzystuje składnię spread do klonowania tablicy i dodawania do niej nowego elementu.


let cities = ['Barcelona', 'Cape Town', 'Bordeaux']
let citiesClone = [...cities, 'Santiago']

console.log(cities) // Will print three citites

console.log(citiesClone) // Will print four citites