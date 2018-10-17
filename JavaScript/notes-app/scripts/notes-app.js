'use strict'

let notes = getSavedNotes()  // tworzy tablicę z notatkami funkcją z notes-functions z 4.
console.log(notes)
const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)  // renderuje przy użyciu funkcji z notes-functions z 93.

document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuidv4()
    const timestamp = moment().valueOf()

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})
