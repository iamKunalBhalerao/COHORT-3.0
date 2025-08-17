import express from 'express'

const app = express()

app.get("/", (req, res) => {
    res.send("Hello")
})

app.get("/signup", (req, res) => {
    res.send("This is Sign up")
})

app.get("/signin", (req, res) => {
    res.send("This is Sign In")
})

app.listen(5000, () => {
    console.log("Server s runing...")
})