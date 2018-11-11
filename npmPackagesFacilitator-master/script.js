let packages = {
    "babel-cli": "^6.26.0",
    "babel-loader": "^7.1.4",
    "babel-polyfill": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "live-server": "^1.2.0",
    "uuid": "^3.2.1",
    "webpack": "^4.5.0",
    "webpack-cli": "^2.0.14",
    "webpack-dev-server": "^3.1.3"
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