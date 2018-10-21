let json = '[{"id":"71fac036-128f-47ca-b08a-23b256707e0e","title":"królik","body":"je marchewkę","createdAt":1540065452379,"updatedAt":1540065461714},{"id":"8dacb3d0-3c13-41f4-8eb2-5c0a3e0e483c","title":"kot","body":"jest zwinny","createdAt":1540065434931,"updatedAt":1540065442444},{"id":"392599d6-4301-4182-acbb-7aa65ac4301f","title":"sowa","body":"jest mądra","createdAt":1540065419229,"updatedAt":1540065428997},{"id":"b3f87e90-1e75-4050-a927-284d4b3ee16d","title":"pies","body":"je kość","createdAt":1540065473145,"updatedAt":1540065481434}]'
let notes = JSON.parse(json)
console.log(notes)
const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

console.log('UWAGA KURWA PRZERWA!!!')
const sortNotes = (notes, sortBy) => {  // wrzuciło tu tablicę notes oraz typ sortowania z notes-app 7. (domyślnie jest to byEdited) funkcja używana w renderNotes
    if (sortBy === 'byEdited') {   // porównuje wartości updatedAt
        return notes.sort((a, b) => { // sortuje od największej do najmniejszej
            if (a.updatedAt > b.updatedAt) {
                return -1   //jeśli jedna wartość jest większa niż inna to ustaw ją jako pierwszą - ustaw później stworzoną na początku
            } else if (a.updatedAt < b.updatedAt) {
                return 1  //jeśli jedna wartość jest mniejsza niż inna, to ustaw ją jako drugą - ustaw wcześniej stworzoną na końcu
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}

let newe = sortNotes(notes, filters.sortBy)

console.log(newe)
