const rzeczyDoZrobienia = ['Jestem stringiem, który był w tablicy domyślnie']

const wyrenderuj = function (rzeczyDoZrobienia) {
document.querySelector('#todos').innerHTML = '<h4>LISTA RZECZY, KTÓRE WPISAŁEŚ I ZATWIERDZIŁEŚ:</h4>'
rzeczyDoZrobienia.forEach(function (rzecz, index) {
        const p = document.createElement('p')
        p.textContent = `${index + 1}- ${rzecz}`
        document.querySelector('#todos').appendChild(p)
    })
}

document.querySelector('#dodaj').addEventListener('submit', function (e) {
    e.preventDefault()
    rzeczyDoZrobienia.push(e.target.elements.toCoWpisales.value)
    wyrenderuj(rzeczyDoZrobienia)
    e.target.elements.toCoWpisales.value = ''
})

wyrenderuj(rzeczyDoZrobienia)