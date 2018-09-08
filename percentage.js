

getTip = function (price, percentage) {
    let tip = (price / 100) * percentage
    return tip
}

console.log(getTip(145, 10));


