const filters = {
    searchText: '',
    hideCompleted: false
}


const setFilters = ({ searchText, hideCompleted }) => {
    if (typeof searchText === 'string') {
        filters.searchText = searchText
    }
    if (typeof hideCompleted === 'boolean') {
        filters.hideCompleted = hideCompleted
    }
}


setFilters({
        searchText: 'a'
    })


console.log(filters)