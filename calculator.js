const express = require("express")
const app = express()

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html")
})

app.post("/", function (req, res) {
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)
    const sum = num1 + num2
    res.send("Your sum is: " + sum + '<br><br><a href="/bmiCalculator">BMI Calculator</a>' )
})

app.get("/bmiCalculator", function (req, res) {
    res.sendFile(__dirname + "/views/bmiCalculator.html")
})

app.post("/bmiCalculator", function (req, res) {
    const weight = parseFloat(req.body.weight)
    const height = parseFloat(req.body.height)
    const bmi = weight / (height * height)

    res.send("Your BMI is: " + bmi + '<br><br><a href="/">Calculator</a>')
})

app.listen(80, function () {
    console.log("Server started on port 80")
})