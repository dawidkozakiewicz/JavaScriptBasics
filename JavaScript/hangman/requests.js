const getPuzzle = (call) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            call(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            call('An error has taken place', undefined)
        }
    })

    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
    request.send()
}