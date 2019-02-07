let packages = {
    "axios": "^0.18.0",
    "react": "^16.4.1",
    "react-dom": "^16.4.1",
    "react-redux": "^5.0.7",
    "react-router-dom": "^4.3.1",
    "react-scripts": "1.1.4",
    "redux": "^4.0.0"
  }

  let tablica = Object.keys(packages)
  console.log(tablica)




const showNpmPackages = function (tablica) {
    document.querySelector('#catchme').innerHTML = 'npm install'
    tablica.forEach(function (oneNpmPackage) {
        document.querySelector('#catchme').appendChild(render(oneNpmPackage))
    })
}


const render = function (oneNpmPackage) {
    const element = document.createElement('span')
    const package = document.createElement('span')
    package.textContent = ` ${oneNpmPackage}`
    element.appendChild(package)
    return element
}




showNpmPackages(tablica)