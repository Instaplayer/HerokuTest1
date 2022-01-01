const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000;
// bardzo istotna linijka - port zostaje przydzielony przez Heroku

app.get("/", function (req, res) {
    
    codeString ="<h1>my app on heroku!</h1>"
    codeString += `<p style="color: #CCCCCC">autor: Jakub Proszek</p>`

    res.send(codeString)
})

app.get("/data", function (req, res) {
    
    codeString ="<h1>my app on heroku!</h1>"

    infoDataObject = {}

    infoDataObject.imie = req.query.imie
    infoDataObject.nazwisko = req.query.nazwisko
    infoDataObject.klasa = req.query.klasa.substr(0, 3)
    infoDataObject.grupa = req.query.klasa.substr(3, 1)

    codeString += "<p>" + JSON.stringify(infoDataObject) + "</p>"
    codeString += `<p style="color: #CCCCCC">autor: Jakub Proszek</p>`

    res.send(codeString)
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})