var txt = `{"body-parser": "^1.18.2",
"express": "^4.16.3",
"passport": "^0.4.0",
"passport-google-oauth": "^1.0.0",
"pug": "^2.0.3"}`
var obj = JSON.parse(txt);
console.log(obj)

var coco = obj[obj.index(obj)[0]]

console.log(coco)