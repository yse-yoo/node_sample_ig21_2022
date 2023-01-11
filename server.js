const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const host = process.env.HOST
const port = process.env.PORT

console.log(host)
console.log(port)

const app = express()

app.get('/', (req, res) => {
    res.send('Hello, Express')
})

app.get('/profile', (req, res) => {
    res.send('My Profile')
})

app.listen(port, host, () => {
    console.log('Server launched.')
    console.log(host)
    console.log(port)
})
