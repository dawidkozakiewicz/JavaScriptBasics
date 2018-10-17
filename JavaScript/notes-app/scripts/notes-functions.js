'use strict'

// Read existing notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')  // pobranie z localstorage tablicy json o nazwie 'notes'

    try {
        return notesJSON ? JSON.parse(notesJSON) : []  // jak taka tablica jest, to ją sparsuj, jak nie ma to wyrzuć pustą tablicę
    } catch (e) {
        return []  // jeśli był błąd, zwróć pustą tablicę
    } 
}

// Save the notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')

    // Setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl)

    // Setup the link
    noteEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.classList.add('list-item')

    // Setup the status message
    statusEl.textContent = generateLastEdited(note.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)

    return noteEl
}

// Sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {  // wrzuciło tu tablicę notes oraz typ sortowania z notes-app 7. (domyślnie jest to byEdited) funkcja używana w renderNotes
    if (sortBy === 'byEdited') {   // porównuje wartości updatedAt
        return notes.sort((a, b) => { // sortuje od najmniejszej do największej
            if (a.updatedAt > b.updatedAt) {
                return -1   //jeśli jedna wartość jest większa niż inna to ustaw ją jako pierwszą
            } else if (a.updatedAt < b.updatedAt) {
                return 1  //jeśli jedna wartość jest mniejsza niż inna, to ustaw ją jako drugą
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

// Render application notes
const renderNotes = (notes, filters) => {    // przyjmuje jako argumenty tablicę notes z notes-app 3. oraz obiekt filters z notes-app 5.
    const notesEl = document.querySelector('#notes')  // chwyta diva o klasie "notes" z  index.html 27.
    notes = sortNotes(notes, filters.sortBy) // tworzy tablicę posortowanych notes funkcją z 56. argumenty: tablica notes z notes-app 3. oraz typ sortowania z filters
    console.log(notes)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase())) // przeszukuje posortowaną już tablicę notes zmniejsza
    console.log(`this is searched text: ${filters.searchText}`)
    //ewentualnie wielkie litery tytułu każdej note i sprawdza, czy poszczególny tytuł zawiera literę z filtra (też zmniejszoną) domyślnie: ''
    notesEl.innerHTML = '' // czyści całą zawartość diva o klasie "notes" z index.html 27.

    if (filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note)
            notesEl.appendChild(noteEl)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to show'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }
}

// Generate the last edited message
const generateLastEdited = (timestamp) => {
    return `Last edited ${moment(timestamp).fromNow()}`
}